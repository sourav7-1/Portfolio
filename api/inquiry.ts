import type { VercelRequest, VercelResponse } from '@vercel/node';
import { profile } from './_grounding';

const MAX_NAME_LEN = 100;
const MAX_EMAIL_LEN = 200;
const MAX_MESSAGE_LEN = 2000;
const RATE_LIMIT_PER_HOUR = 5;
const HOUR_MS = 60 * 60 * 1000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
const clean = (v: unknown, max: number) => typeof v === 'string' ? v.trim().slice(0, max) : '';

export default async function handler(req: VercelRequest, res: VercelResponse){
  if(req.method !== 'POST'){
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if(!apiKey){
    res.status(503).json({ error: 'Inquiries are not configured yet.' });
    return;
  }

  const ip = (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() || 'unknown';
  if(rateLimited(ip)){
    res.status(429).json({ error: 'Too many requests, please try again later.' });
    return;
  }

  const body = (req.body ?? {}) as Record<string, unknown>;

  // Honeypot: real visitors never see or fill this field, so bots that do get a
  // fake success and nothing is sent.
  if(clean(body.website, 200)){
    res.status(200).json({ ok: true });
    return;
  }

  const name = clean(body.name, MAX_NAME_LEN);
  const email = clean(body.email, MAX_EMAIL_LEN);
  const message = clean(body.message, MAX_MESSAGE_LEN);
  const source = body.source === 'chat' ? 'chatbot' : 'contact form';
  if(!name || !message || !EMAIL_RE.test(email)){
    res.status(400).json({ error: 'Please provide a name, a valid email and a message.' });
    return;
  }

  const to = process.env.INQUIRY_TO_EMAIL || profile.email;
  // onboarding@resend.dev works without a verified domain, but Resend only
  // delivers it to the email address of the Resend account itself.
  const from = process.env.INQUIRY_FROM_EMAIL || 'Portfolio Inquiry <onboarding@resend.dev>';

  try {
    const upstream = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New inquiry from ${name.replace(/[\r\n]+/g, ' ')} (${source})`,
        text: `Name: ${name}\nEmail: ${email}\nSource: ${source}\n\n${message}`,
        html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}<br><strong>Source:</strong> ${source}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
      }),
    });

    if(!upstream.ok){
      res.status(502).json({ error: 'Could not send the inquiry.' });
      return;
    }
    res.status(200).json({ ok: true });
  } catch {
    res.status(502).json({ error: 'Could not send the inquiry.' });
  }
}
