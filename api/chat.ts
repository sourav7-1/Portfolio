import type { VercelRequest, VercelResponse } from '@vercel/node';
import { buildSystemPrompt } from './_grounding';

const MAX_MESSAGE_LEN = 500;
const MAX_HISTORY = 6;
const RATE_LIMIT_PER_HOUR = 30;
const HOUR_MS = 60 * 60 * 1000;

// Best-effort only: resets on cold start and isn't shared across serverless
// instances. A soft deterrent against a single abusive burst, not a hard cap.
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string){
  const now = Date.now();
  const entry = hits.get(ip);
  if(!entry || now > entry.reset){
    hits.set(ip, { count: 1, reset: now + HOUR_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_PER_HOUR;
}

type HistoryItem = { role: 'user' | 'assistant'; text: string };

export default async function handler(req: VercelRequest, res: VercelResponse){
  if(req.method !== 'POST'){
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if(!apiKey){
    res.status(503).json({ error: 'AI is not configured yet.' });
    return;
  }

  const ip = (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() || 'unknown';
  if(rateLimited(ip)){
    res.status(429).json({ error: 'Too many requests, please try again later.' });
    return;
  }

  const body = req.body as { message?: unknown; history?: unknown };
  const message = typeof body?.message === 'string' ? body.message.trim() : '';
  if(!message || message.length > MAX_MESSAGE_LEN){
    res.status(400).json({ error: 'Invalid message.' });
    return;
  }

  const history: HistoryItem[] = Array.isArray(body?.history)
    ? (body.history as HistoryItem[])
        .filter(m => (m?.role === 'user' || m?.role === 'assistant') && typeof m?.text === 'string')
        .slice(-MAX_HISTORY)
    : [];

  const messages = [
    { role: 'system' as const, content: buildSystemPrompt() },
    ...history.map(h => ({ role: h.role, content: h.text.slice(0, MAX_MESSAGE_LEN) })),
    { role: 'user' as const, content: message },
  ];

  try {
    const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages,
        max_tokens: 300,
        temperature: 0.5,
      }),
    });

    if(!upstream.ok){
      res.status(502).json({ error: 'AI service error.' });
      return;
    }

    const data = await upstream.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();
    if(!reply){
      res.status(502).json({ error: 'AI service returned no reply.' });
      return;
    }

    res.status(200).json({ reply });
  } catch {
    res.status(502).json({ error: 'AI service unreachable.' });
  }
}
