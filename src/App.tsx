import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, Brain, Briefcase, CircleDot, Download, Github, Globe, GraduationCap, Hammer, Linkedin, Mail, MessageCircle, Menu as MenuIcon, Rocket, Send, Trophy, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import LiquidReveal from './LiquidReveal';
import useAdaptiveScale from './useAdaptiveScale';
import { capabilities, profile, projects } from './data';
gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Work', id: 'works' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
];
const HERO_LINES = ['A creative,', 'AI & Full-Stack', 'Builder.'];
const HERO_CARDS = [
  {
    caption: 'EDUCATION',
    title: "CSE @ Daffodil Int'l University",
    subtitle: 'B.Sc. in Computer Science & Engineering',
    icon: GraduationCap,
  },
  {
    caption: 'ACHIEVEMENT',
    title: 'AI Project Finalist 2026',
    subtitle: 'DIU AI Project Competition',
    icon: Trophy,
  },
  {
    caption: 'STATUS',
    title: 'Available for Roles',
    subtitle: 'AI & Full-Stack engineering opportunities',
    icon: Briefcase,
  },
];
const BUILT_WITH = ['Python', 'Flask', 'React', 'OpenCV', 'Docker', 'Earth Engine'];
const CREATE_WORDS = ['Think', 'Build', 'Ship'];
const FOOTER_SOCIALS = [
  { label: 'Facebook', href: profile.facebook },
  { label: 'Instagram', href: profile.instagram },
  { label: 'WhatsApp', href: profile.whatsapp },
];

function Logo({ className }: { className?: string }){
  return <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden="true"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z"/></svg>;
}

function useClock(){
  const [state, setState] = useState({ time: '9:41am', date: '12 March, 2025' });
  useEffect(() => {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const tick = () => {
      const d = new Date();
      let h = d.getHours() % 12; if(h === 0) h = 12;
      const m = String(d.getMinutes()).padStart(2, '0');
      const mer = d.getHours() < 12 ? 'am' : 'pm';
      setState({ time: `${h}:${m}${mer}`, date: `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}` });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return state;
}

function ClockChip(){
  const { time, date } = useClock();
  return <div className="clock-chip"><span className="label">Local time</span><b>{time}</b><span className="sep">•</span><span>{date}</span></div>;
}

function useFocusTrap(active: boolean, containerRef: React.RefObject<HTMLElement>){
  useEffect(() => {
    if(!active) return;
    const container = containerRef.current;
    if(!container) return;
    const items = container.querySelectorAll<HTMLElement>('a[href],button,input,textarea,select');
    items[0]?.focus();
    const key = (e: KeyboardEvent) => {
      if(e.key !== 'Tab' || !items.length) return;
      const first = items[0], last = items[items.length - 1];
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    };
    addEventListener('keydown', key);
    return () => removeEventListener('keydown', key);
  }, [active]);
}

function Eyebrow({ children, light, boxed }: { children: ReactNode; light?: boolean; boxed?: boolean }){
  return <span className={`eyebrow${light ? ' eyebrow--light' : ''}${boxed ? ' eyebrow--boxed' : ''}`}><span className="eyebrow-dot"/>{children}</span>;
}

function PillButton({ children, variant = 'dark', arrow, onClick, href, type, target, download }: { children: ReactNode; variant?: 'dark'|'light'|'outline'; arrow?: 'right'|'up-right'; onClick?: () => void; href?: string; type?: 'button'|'submit'; target?: string; download?: boolean }){
  const badge = arrow && <span className={`pill-badge${arrow === 'up-right' ? ' up' : ''}`}>{arrow === 'up-right' ? <ArrowUpRight/> : <ArrowRight/>}</span>;
  const cls = `pill-btn pill-btn--${variant}${arrow ? ' has-arrow' : ''}`;
  if(href) return <a href={href} className={cls} onClick={onClick} target={target} rel={target ? 'noreferrer' : undefined} download={download}>{children}{badge}</a>;
  return <button type={type || 'button'} className={cls} onClick={onClick}>{children}{badge}</button>;
}

function Lines({ lines, as: Tag = 'h2', className }: { lines: string[]; as?: keyof JSX.IntrinsicElements; className?: string }){
  return <Tag className={`${className || ''} line-reveal`}>{lines.map((l, i) => <span className="line" key={i}><span className="line-inner">{l}</span></span>)}</Tag>;
}

function Words({ text, muted, className }: { text: string; muted?: string; className?: string }){
  return <span className={`${className || ''} word-reveal`}>{text.split(' ').map((w, i) => <span className="word" key={`a${i}`}>{w}&nbsp;</span>)}{muted && <span className="muted">{muted.split(' ').map((w, i) => <span className="word" key={`b${i}`}>{w}&nbsp;</span>)}</span>}</span>;
}

function TagChip({ children }: { children: ReactNode }){ return <span className="tag-chip">{children}</span>; }

function PageLoader({ stopScroll, startScroll, onDone }: { stopScroll: () => void; startScroll: () => void; onDone: () => void }){
  const ref = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Guard against React StrictMode's dev-only double-invoke: this is a
    // one-shot intro animation, not something that should ever restart.
    if(started.current) return;
    started.current = true;
    stopScroll();
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const proxy = { v: 0 };
    const finish = () => {
      gsap.to(ref.current, { yPercent: -100, duration: reduced ? 0.01 : 0.85, ease: 'power4.inOut', onComplete: () => {
        startScroll();
        setGone(true);
        onDone();
        ScrollTrigger.refresh();
      }});
    };
    gsap.to(proxy, {
      v: 100, duration: reduced ? 0.01 : 0.8, ease: 'power3.inOut',
      onUpdate: () => {
        const n = Math.round(proxy.v);
        if(countRef.current) countRef.current.textContent = String(n).padStart(3, '0');
        if(fillRef.current) fillRef.current.style.width = n + '%';
      },
      onComplete: finish,
    });
  }, []);

  if(gone) return null;
  return <div className="loader" ref={ref}>
    <div className="loader-center">
      <div className="loader-brand"><Logo/> {profile.short}</div>
      <p className="loader-tag">Bold ideas, shipped with quiet precision.</p>
    </div>
    <div className="loader-progress">
      <div className="loader-track"><div className="loader-fill" ref={fillRef} style={{ width: '0%' }}/></div>
      <div className="loader-meta"><span>Loading</span><span className="loader-count" ref={countRef}>000</span></div>
    </div>
  </div>;
}

function Header({ onMenu, onNav }: { onMenu: () => void; onNav: (id: string) => void }){
  return <header className="site-header">
    <div className="shell site-header-inner">
      <button className="brand-btn" onClick={() => onNav('home')}><Logo/> {profile.short}</button>
      <nav aria-label="Primary">
        <ul className="primary-nav">
          {NAV_ITEMS.map(n => <li key={n.id}><button aria-current={n.id === 'home' ? 'page' : undefined} onClick={() => onNav(n.id)}>{n.label}{n.id === 'services' && <span className="caret">▾</span>}</button></li>)}
        </ul>
      </nav>
      <div className="header-right">
        <ClockChip/>
        <button className="menu-btn" onClick={onMenu} aria-label="Open menu"><span className="menu-btn-inner"><MenuIcon size={14}/> <span>Menu</span></span></button>
      </div>
    </div>
  </header>;
}

function HeroCard(){
  const [i, setI] = useState(0);
  const go = (step: number) => setI(v => (v + step + HERO_CARDS.length) % HERO_CARDS.length);
  const item = HERO_CARDS[i];
  const IconComponent = item.icon;
  return <div className="hero-card">
    <div className="hero-card-row" onClick={() => go(1)} role="button" tabIndex={0} onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && go(1)}>
      <div className="hero-card-icon"><IconComponent size={24}/></div>
      <div className="hero-card-panel">
        <div className="hero-card-slot" key={i}>
          <div className="hero-card-caption">{item.caption}</div>
          <div className="hero-card-title">{item.title}</div>
          <div className="hero-card-subtitle">{item.subtitle}</div>
        </div>
        <div className="hero-card-bottom">
          <div className="hero-card-dots">{HERO_CARDS.map((_, idx) => <span key={idx} className={idx === i ? 'active' : ''}/>)}</div>
          <div className="hero-card-nav">
            <button className="prev" onClick={e => { e.stopPropagation(); go(-1); }} aria-label="Previous"><ArrowRight size={14}/></button>
            <button onClick={e => { e.stopPropagation(); go(1); }} aria-label="Next"><ArrowRight size={14}/></button>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

function Hero({ onNav }: { onNav: (id: string) => void }){
  return <section id="home" className="hero">
    <LiquidReveal src={profile.formalPhoto} alt="Sourav Kundu Samya"/>
    <div className="hero-vignette"/>
    <div className="hero-watermark watermark-text">SOURAV</div>
    <div className="shell hero-content">
      <div className="hero-left">
        <span className="hero-eyebrow"><Eyebrow>{profile.role}</Eyebrow></span>
        <Lines as="h1" className="hero-heading" lines={HERO_LINES}/>
        <div className="rating-row"><Eyebrow>Open to new opportunities</Eyebrow></div>
        <div className="hero-ctas">
          <PillButton variant="dark" arrow="right" onClick={() => onNav('contact')}>Let's Talk</PillButton>
          <PillButton variant="outline" onClick={() => onNav('works')}>View Work</PillButton>
        </div>
      </div>
      <div className="hero-right">
        <HeroCard/>
        <div className="built-with">
          <div className="built-with-label">Core Stack</div>
          <div className="built-with-grid">{BUILT_WITH.map(t => <span className="built-with-item" key={t}><CircleDot size={14}/> {t}</span>)}</div>
        </div>
      </div>
    </div>
    <div className="shell hero-status">
      <span>Building since 2022</span>
      <span className="mid">Remote-first, worldwide</span>
      <span className="right">Scroll to explore <span aria-hidden="true">↓</span></span>
    </div>
  </section>;
}

function About(){
  return <section id="about" className="about">
    <div className="shell about-grid">
      <div className="about-globe reveal">
        <Globe/>
        <Eyebrow boxed>The Studio</Eyebrow>
        <div className="about-fact"><Globe size={24}/><span>CSE Undergraduate at Daffodil International University.</span></div>
      </div>
      <div className="about-statement">
        <Words className="about-h2" text="I'm a Computer Science &amp; Engineering student who turns" muted="complex technical ideas into practical, intelligent products — spanning AI, computer vision and full-stack systems."/>
        <div className="about-footer-row reveal">
          <div>
            <div className="about-social-label">Find me online</div>
            <div className="about-social">
              <a className="about-social-chip solid" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16}/></a>
              <a className="about-social-chip" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16}/></a>
              <a className="about-social-chip" href={`mailto:${profile.email}`} aria-label="Email"><Mail size={16}/></a>
            </div>
          </div>
          <PillButton variant="outline" arrow="right" href={profile.resume} target="_blank">Resume</PillButton>
        </div>
      </div>
    </div>
  </section>;
}

function CreateBand(){
  return <section className="createband">
    <ul className="shell">
      <li className="reveal"><div className="createband-tile light"><Brain className="cb-icon cb-icon--think"/><span>{CREATE_WORDS[0]}</span></div></li>
      <li className="reveal"><div className="createband-tile accent"><Hammer className="cb-icon cb-icon--build"/><span>{CREATE_WORDS[1]}</span></div></li>
      <li className="reveal"><div className="createband-tile dark"><ArrowRight className="cb-icon--arrow"/></div></li>
      <li className="reveal"><div className="createband-tile ghost"><Rocket className="cb-icon cb-icon--ship"/><span>{CREATE_WORDS[2]}</span></div></li>
    </ul>
  </section>;
}

function Portfolio({ onOpen }: { onOpen: (i: number) => void }){
  return <section id="works" className="portfolio">
    <div className="shell portfolio-head">
      <Eyebrow boxed>Portfolio</Eyebrow>
      <Lines as="h2" className="portfolio-h2" lines={['Selected Work']}/>
    </div>
    <div className="shell">
      <ul className="work-grid">
        {projects.map((p, i) => <li className="reveal" key={p.title}>
          <div className="work-card" role="button" tabIndex={0} onClick={() => onOpen(i)} onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onOpen(i)}>
            <div className="work-card-top">
              <span>{p.n} · {p.type}</span>
              <span className="arrow-badge"><ArrowUpRight size={16}/></span>
            </div>
            <div className="work-card-watermark"><Logo/></div>
            <div className="work-card-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="work-card-tags">{p.tech.map(t => <TagChip key={t}>{t}</TagChip>)}</div>
            </div>
          </div>
        </li>)}
      </ul>
    </div>
  </section>;
}

function Services(){
  return <section id="services" className="services">
    <div className="shell">
      <Eyebrow boxed>Services</Eyebrow>
      <Lines as="h2" className="services-h2" lines={['What I do best']}/>
      <ul>
        {capabilities.map((c, i) => <li className="service-row reveal" key={c[0]}>
          <div className="service-link">
            <span className="service-index">0{i + 1}</span>
            <h3 className="service-title">{c[0]}</h3>
            <p className="service-desc">{c[1]}</p>
            <span className="service-badge"><ArrowUpRight size={16}/></span>
          </div>
        </li>)}
      </ul>
    </div>
  </section>;
}

function Stats(){
  const techCount = useMemo(() => new Set(projects.flatMap(p => p.tech)).size, []);
  const stats = [
    { value: projects.length, suffix: '', label: 'Shipped projects' },
    { value: techCount, suffix: '+', label: 'Technologies used' },
    { value: 2, suffix: '', label: 'Competition finals' },
    { value: 1, suffix: '', label: 'Certification earned' },
  ];
  return <section className="stats-wrap">
    <div className="shell">
      <div className="stats-panel reveal">
        <Eyebrow light>By the numbers</Eyebrow>
        <Lines as="h2" className="stats-h2" lines={['Proof in the work, not the words.']}/>
        <ul className="stats-grid">
          {stats.map(s => <li className="stat-item reveal" data-value={s.value} data-suffix={s.suffix} key={s.label}>
            <div className="stat-value">0{s.suffix}</div>
            <div className="stat-label">{s.label}</div>
          </li>)}
        </ul>
      </div>
    </div>
  </section>;
}

function Footer({ onNav }: { onNav: (id: string) => void }){
  return <footer className="site-footer">
    <div className="shell footer-inner">
      <div className="footer-cta">
        <Lines as="h2" className="footer-h2" lines={['Have an idea', 'worth building?']}/>
        <PillButton variant="light" arrow="up-right" onClick={() => onNav('contact')}>Start a project</PillButton>
      </div>
      <div className="footer-columns">
        <div>
          <div className="footer-brand"><Logo/> {profile.short}</div>
          <p className="footer-tagline">An AI & full-stack developer crafting intelligent systems and the products that use them.</p>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Site</div>
          <ul>
            <li className="animated-link"><button onClick={() => onNav('about')}><span>About</span></button></li>
            <li className="animated-link"><button onClick={() => onNav('works')}><span>Work</span></button></li>
            <li className="animated-link"><button onClick={() => onNav('services')}><span>Services</span></button></li>
            <li className="animated-link"><button onClick={() => onNav('contact')}><span>Contact</span></button></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Capabilities</div>
          <ul>{capabilities.map(c => <li className="animated-link" key={c[0]}><button onClick={() => onNav('services')}><span>{c[0]}</span></button></li>)}</ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Social</div>
          <ul>{FOOTER_SOCIALS.map(s => <li className="animated-link" key={s.label}><a href={s.href} target="_blank" rel="noreferrer"><span>{s.label}</span></a></li>)}</ul>
        </div>
      </div>
      <div className="footer-legal">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>{profile.location}</span>
      </div>
    </div>
    <div className="footer-watermark watermark-text">SOURAV</div>
  </footer>;
}

function NavMenu({ open, onClose, onNav }: { open: boolean; onClose: () => void; onNav: (id: string) => void }){
  const { time } = useClock();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Keep the closed (invisible) overlay out of tab order via the DOM API
    // directly — React's attribute diffing doesn't recognize `inert` as a
    // boolean HTML attribute and would otherwise write a literal "false"
    // string, which HTML treats as present (i.e. still inert).
    // Must run (and clear inert) before useFocusTrap's effect below tries
    // to move focus into this container — React runs effects in the order
    // they're declared, so this has to come first.
    ref.current?.toggleAttribute('inert', !open);
  }, [open]);
  useFocusTrap(open, ref);
  useEffect(() => {
    if(!open) return;
    const key = (e: KeyboardEvent) => { if(e.key === 'Escape') onClose(); };
    addEventListener('keydown', key);
    return () => removeEventListener('keydown', key);
  }, [open]);
  return <div ref={ref} className={`nav-overlay${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!open}>
    <div className="shell nav-overlay-top">
      <span className="nav-overlay-brand"><Logo/> {profile.short}</span>
      <button className="nav-close" onClick={onClose}><X size={14}/> Close</button>
    </div>
    <div className="shell" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <ul className="nav-list">
        {NAV_ITEMS.map((n, i) => <li key={n.id}>
          <button style={{ transitionDelay: open ? `${i * 45 + 80}ms` : '0ms' }} onClick={() => onNav(n.id)}>
            <span className="idx">0{i + 1}</span><span className="label">{n.label}</span>
          </button>
        </li>)}
      </ul>
    </div>
    <div className="shell nav-bottom">
      <span>Local time — {time}</span>
      <button onClick={() => onNav('contact')}>Start a project →</button>
    </div>
  </div>;
}

function RequestModal({ open, onClose, stopScroll, startScroll }: { open: boolean; onClose: () => void; stopScroll: () => void; startScroll: () => void }){
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  useFocusTrap(open, panelRef);

  useEffect(() => {
    if(!open) return;
    stopScroll();
    const key = (e: KeyboardEvent) => { if(e.key === 'Escape') onClose(); };
    addEventListener('keydown', key);
    return () => { removeEventListener('keydown', key); startScroll(); };
  }, [open]);
  useEffect(() => {
    if(open) return;
    const t = setTimeout(() => { setSent(false); setSending(false); }, 300);
    return () => clearTimeout(t);
  }, [open]);

  if(!open) return null;
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 900);
  };

  return <div className="request-backdrop" role="dialog" aria-modal="true" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <div className="request-panel" ref={panelRef}>
      <button className="request-close" onClick={onClose} aria-label="Close"><X size={16}/></button>
      {sent ? <div className="request-success">
        <div className="request-success-badge"><Logo/></div>
        <h2>Request received</h2>
        <p>Thanks for reaching out — I'll get back to you within one business day.</p>
        <PillButton variant="dark" onClick={onClose}>Close</PillButton>
      </div> : <>
        <div>
          <span className="request-kicker"><span className="dot"/> Start a project</span>
          <h2 className="request-heading">Tell me what you're building.</h2>
        </div>
        <form className="request-form" onSubmit={submit}>
          <div className="request-field"><label htmlFor="rq-name">Name</label><input id="rq-name" required placeholder="Your name"/></div>
          <div className="request-field"><label htmlFor="rq-email">Email</label><input id="rq-email" type="email" required placeholder="you@company.com"/></div>
          <div className="request-field"><label htmlFor="rq-project">Project</label><textarea id="rq-project" rows={4} required placeholder="A few words about your project, timeline, and budget."/></div>
          <div className="request-bottom">
            <span className="request-note">I reply within one business day.</span>
            <PillButton variant="dark" arrow="up-right" type="submit">{sending ? 'Sending…' : 'Send request'}</PillButton>
          </div>
        </form>
      </>}
    </div>
  </div>;
}

type ChatMessage = { role: 'assistant'|'user'; text: string };
const MAX_MESSAGE_LEN = 500;
function PortfolioAssistant(){
  const [open, setOpen] = useState(false), [input, setInput] = useState(''), [sending, setSending] = useState(false), [messages, setMessages] = useState<ChatMessage[]>([{ role: 'assistant', text: "Hi! I’m Sourav’s portfolio assistant. Ask about his projects, skills, education or contact details." }]);
  const inputRef = useRef<HTMLInputElement>(null), panelRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if(open) setTimeout(() => inputRef.current?.focus(), 120);
    const onKey = (e: KeyboardEvent) => {
      if(e.key === 'Escape') setOpen(false);
      if(open && e.key === 'Tab'){
        const nodes = panelRef.current?.querySelectorAll<HTMLElement>('button,a,input') || [];
        if(!nodes.length) return;
        const first = nodes[0], last = nodes[nodes.length - 1];
        if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
        else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
      }
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [open]);

  const localAnswer = (value: string) => {
    const q = value.toLowerCase();
    if(/about|who are you|yourself|introduce|নিজের সম্পর্কে|পরিচয়/.test(q)) return "Sourav Kundu Samya is a Computer Science and Engineering student at Daffodil International University with a strong passion for artificial intelligence, software development and intelligent systems. His project work spans computer vision, speech transcription, satellite-imagery analysis, geospatial automation, distributed AI infrastructure and full-stack application development. His philosophy: development is more than writing code — it's about understanding a problem, designing an effective solution, and turning that solution into something useful.";
    if(/project|work|কাজ|প্রজেক্ট/.test(q)) return 'Featured work includes Sentinel Map Automation, Distributed Campus AI Compute, VisionScribe AI, Street Food Safety Platform, ZEN Bank Tracker and FocusFlow.';
    if(/skill|stack|technology|tech|স্কিল/.test(q)) return 'Verified skills include Python, Java, C, PHP, JavaScript, SQL, Flask, FastAPI, Laravel, React, MySQL, SQLite, OpenCV, Docker, Git, machine learning, computer vision and Google Earth Engine.';
    if(/education|study|university|শিক্ষা/.test(q)) return 'Sourav is studying B.Sc. in Computer Science and Engineering at Daffodil International University.';
    if(/email|contact|phone|যোগাযোগ/.test(q)) return `Email ${profile.email} or use the Contact section. Verified phone: ${profile.phone}.`;
    if(/resume|cv|রেজুমে/.test(q)) return 'Use the Resume link below to open Sourav’s verified CV.';
    if(/location|where|থাক/.test(q)) return `Sourav is based in ${profile.location}.`;
    return 'I can help with Sourav’s projects, skills, education, resume, location or contact information.';
  };
  const send = async (value = input) => {
    const clean = value.trim().slice(0, MAX_MESSAGE_LEN);
    if(!clean || sending) return;
    const history = messages;
    setMessages(prev => [...prev, { role: 'user', text: clean }]);
    setInput('');
    setSending(true);
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: clean, history: history.slice(-6) }) });
      if(!res.ok) throw new Error('bad response');
      const data = await res.json();
      const reply = typeof data?.reply === 'string' ? data.reply : localAnswer(clean);
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', text: localAnswer(clean) }]);
    } finally { setSending(false); }
  };

  return <>
    <button className={`chat-launcher ${open ? 'active' : ''}`} onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="portfolio-chat"><MessageCircle/><span>ASK SOURAV</span></button>
    {open && <section ref={panelRef} id="portfolio-chat" className="chat-panel" role="dialog" aria-label="Sourav portfolio assistant">
      <header>
        <div><span className="chat-status"/><strong>PORTFOLIO ASSISTANT</strong><small>Answers from this website</small></div>
        <button onClick={() => setOpen(false)} aria-label="Close portfolio assistant"><X/></button>
      </header>
      <div className="chat-messages" aria-live="polite">
        {messages.map((m, i) => <p key={i} className={m.role}>{m.text}</p>)}
        {sending && <p className="assistant typing" aria-label="Assistant is typing"><i/><i/><i/></p>}
      </div>
      <div className="chat-suggestions">{['Projects', 'Skills', 'Education', 'Contact'].map(s => <button key={s} disabled={sending} onClick={() => send(s)}>{s}</button>)}</div>
      <form onSubmit={e => { e.preventDefault(); send(); }}>
        <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)} maxLength={MAX_MESSAGE_LEN} disabled={sending} placeholder="Ask about Sourav…" aria-label="Message portfolio assistant"/>
        <button type="submit" disabled={sending} aria-label="Send message"><Send/></button>
      </form>
      <footer><a href={profile.resume} target="_blank"><Download/> RESUME</a><a href={`mailto:${profile.email}`}><Mail/> EMAIL</a></footer>
    </section>}
  </>;
}

function ProjectModal({ index, onClose }: { index: number; onClose: () => void }){
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(true, ref);
  const p = projects[index];
  return <div className="modal" role="dialog" aria-modal="true" aria-labelledby="project-title" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <div className="modal-card" ref={ref}>
      <button className="modal-x" onClick={onClose} aria-label="Close"><X/></button>
      <span>{p.n} / {p.type}</span>
      <h2 id="project-title">{p.title}</h2>
      <p>{p.desc}</p>
      <div className="tags">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
      {p.github && <a href={p.github} target="_blank" rel="noreferrer">VIEW VERIFIED GITHUB <ArrowUpRight/></a>}
    </div>
  </div>;
}

function App(){
  const root = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const lockCount = useRef(0);
  const [project, setProject] = useState<number | null>(null);
  const [navOpen, setNavOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useAdaptiveScale();

  const stopScroll = () => {
    lockCount.current++;
    if(lockCount.current === 1){
      lenisRef.current?.stop();
      document.documentElement.style.position = 'relative';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
    }
  };
  const startScroll = () => {
    lockCount.current = Math.max(0, lockCount.current - 1);
    if(lockCount.current === 0){
      lenisRef.current?.start();
      document.documentElement.style.removeProperty('position');
      document.documentElement.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('height');
    }
  };
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if(el) lenisRef.current?.scrollTo(el, { offset: 0 });
  };

  useEffect(() => {
    if(project === null) return;
    stopScroll();
    const key = (e: KeyboardEvent) => { if(e.key === 'Escape') setProject(null); };
    addEventListener('keydown', key);
    return () => { removeEventListener('keydown', key); startScroll(); };
  }, [project]);
  const onNav = (id: string) => {
    setNavOpen(false);
    if(id === 'contact') setRequestOpen(true);
    else if(id === 'resume') window.open(profile.resume, '_blank');
    else scrollTo(id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduced) return;
    const lenis = new Lenis({ smoothWheel: true, duration: 1.1 });
    lenisRef.current = lenis;
    let rafId = 0;
    const raf = (t: number) => { lenis.raf(t); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); lenisRef.current = null; };
  }, []);

  useEffect(() => {
    if(!ready) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = matchMedia('(max-width: 900px)').matches;
    const ctx = gsap.context(() => {
      if(reduced){
        gsap.set('.line-inner, .word, .reveal, .site-header, .hero-eyebrow, .hero-card, .built-with, .rating-row, .hero-ctas, .hero-status, .hero-watermark', { clearProps: 'all' });
      } else {
        // Hero entrance choreography
        gsap.timeline({ defaults: { ease: 'power4.out' } })
          .from('.site-header', { opacity: 0, y: -18, duration: .8 }, .1)
          .from('.hero-eyebrow', { opacity: 0, y: 12, duration: .7 }, .2)
          .from('.hero-heading .line-inner', { yPercent: 120, opacity: 0, duration: 1.0, stagger: .12, ease: 'power4.out' }, .25)
          .from('.hero-card', { opacity: 0, y: 22, scale: .94, duration: .9, ease: 'back.out(1.2)' }, .4)
          .from('.built-with-label', { opacity: 0, y: 10, duration: .5 }, .55)
          .from('.built-with-item', { opacity: 0, y: 12, scale: .9, duration: .6, stagger: .05, ease: 'back.out(1.3)' }, .6)
          .from('.rating-row', { opacity: 0, y: 10, duration: .6 }, .6)
          .from('.hero-ctas', { opacity: 0, y: 12, duration: .7 }, .7)
          .from('.hero-status', { opacity: 0, y: 8, duration: .8 }, .85)
          .from('.hero-watermark', { opacity: 0, y: 35, duration: 1.2, ease: 'power3.out' }, .3);

        // Continuous subtle scroll parallax
        gsap.to('.hero-watermark', {
          yPercent: 35,
          ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
        });

        gsap.to('.lr-base', {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 },
        });

        gsap.from('.footer-watermark', {
          yPercent: -25,
          ease: 'none',
          scrollTrigger: { trigger: '.site-footer', start: 'top bottom', end: 'bottom bottom', scrub: 1 },
        });

        // Section reveals
        gsap.utils.toArray<HTMLElement>('.reveal').forEach(el => gsap.from(el, {
          y: mobile ? 20 : 32, opacity: 0, duration: .9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: mobile ? 'top 94%' : 'top 88%', once: true, invalidateOnRefresh: true },
        }));

        gsap.utils.toArray<HTMLElement>('.line-reveal').forEach(el => {
          if(el.closest('.hero')) return;
          gsap.from(el.querySelectorAll('.line-inner'), {
            yPercent: 120, opacity: 0, duration: 1.0, stagger: .08, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 86%', once: true, invalidateOnRefresh: true },
          });
        });

        gsap.utils.toArray<HTMLElement>('.word-reveal').forEach(el => gsap.from(el.querySelectorAll('.word'), {
          y: 20, opacity: 0, duration: .75, stagger: .03, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true, invalidateOnRefresh: true },
        }));
      }

      // True odometer counter animation
      gsap.utils.toArray<HTMLElement>('.stat-item').forEach(el => {
        const val = Number(el.dataset.value) || 0;
        const suffix = el.dataset.suffix || '';
        const target = el.querySelector<HTMLElement>('.stat-value');
        const counter = { n: 0 };
        ScrollTrigger.create({
          trigger: el, start: 'top 88%', once: true,
          onEnter: () => {
            gsap.to(counter, {
              n: val,
              duration: 1.8,
              ease: 'power3.out',
              onUpdate: () => {
                if(target) target.textContent = Math.round(counter.n) + suffix;
              },
            });
          },
        });
      });
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    const id = requestAnimationFrame(refresh);
    return () => { cancelAnimationFrame(id); ctx.revert(); };
  }, [ready]);

  return <div ref={root}>
    <a className="skip-link" href="#main">Skip to content</a>
    <PageLoader stopScroll={stopScroll} startScroll={startScroll} onDone={() => setReady(true)}/>
    <Header onMenu={() => { setNavOpen(true); stopScroll(); }} onNav={onNav}/>
    <main id="main">
      <Hero onNav={onNav}/>
      <About/>
      <CreateBand/>
      <Portfolio onOpen={setProject}/>
      <Services/>
      <Stats/>
    </main>
    <Footer onNav={onNav}/>
    <NavMenu open={navOpen} onClose={() => { setNavOpen(false); startScroll(); }} onNav={id => { startScroll(); onNav(id); }}/>
    <RequestModal open={requestOpen} onClose={() => setRequestOpen(false)} stopScroll={stopScroll} startScroll={startScroll}/>
    {!navOpen && !requestOpen && <PortfolioAssistant/>}
    {project !== null && <ProjectModal index={project} onClose={() => setProject(null)}/>}
  </div>;
}
export default App;
