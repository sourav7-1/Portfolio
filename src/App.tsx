import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Copy, Download, Github, Instagram, Linkedin, Mail, Menu, MessageCircle, Send, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { capabilities, profile, projects } from './data';
gsap.registerPlugin(ScrollTrigger);

function Preloader(){const [value,setValue]=useState(0);useEffect(()=>{let raf=0,start=performance.now();const tick=(now:number)=>{const p=Math.min(100,Math.round(((now-start)/1150)*100));setValue(p);if(p<100)raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick);return()=>cancelAnimationFrame(raf)},[]);return <div className={`preloader ${value===100?'done':''}`} aria-hidden="true"><div className="loader-words"><span>CREATIVE</span><span>AI BUILDER</span><span>FULL-STACK</span></div><div className="loader-box"><small>LOADING</small><strong>{value.toString().padStart(3,'0')}%<i/></strong><div><b style={{width:`${value}%`}}/></div></div></div>}

function Cursor(){const dot=useRef<HTMLDivElement>(null),glow=useRef<HTMLDivElement>(null);useEffect(()=>{if(matchMedia('(pointer: coarse)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const x=gsap.quickTo(dot.current,'x',{duration:.12}),y=gsap.quickTo(dot.current,'y',{duration:.12}),gx=gsap.quickTo(glow.current,'x',{duration:.5}),gy=gsap.quickTo(glow.current,'y',{duration:.5});const move=(e:MouseEvent)=>{x(e.clientX);y(e.clientY);gx(e.clientX);gy(e.clientY)};window.addEventListener('mousemove',move);return()=>window.removeEventListener('mousemove',move)},[]);return <><div ref={glow} className="cursor-glow"/><div ref={dot} className="cursor-dot"/></>}

function Navigation(){const [open,setOpen]=useState(false),navRef=useRef<HTMLElement>(null),trigger=useRef<HTMLButtonElement>(null);useEffect(()=>{document.body.classList.toggle('menu-open',open);const items=navRef.current?.querySelectorAll<HTMLElement>('a,button')||[];if(open)items[0]?.focus();const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);trigger.current?.focus()}if(open&&e.key==='Tab'&&items.length){const first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}};addEventListener('keydown',key);return()=>{removeEventListener('keydown',key);document.body.classList.remove('menu-open')}},[open]);return <header className="nav"><a href="#home" className="brand">SKS<span>.</span></a><a className="nav-email" href={`mailto:${profile.email}`}>{profile.email}</a><nav ref={navRef} className={open?'open':''} aria-label="Primary"><button className="menu-close" onClick={()=>setOpen(false)} aria-label="Close menu"><X/></button>{['ABOUT','JOURNEY','WORK','CONTACT'].map(v=><a key={v} onClick={()=>setOpen(false)} href={`#${v.toLowerCase()}`}>{v}<i/></a>)}</nav><button ref={trigger} className="menu-button" onClick={()=>setOpen(true)} aria-label="Open menu"><Menu/></button></header>}

function ExtraSocials(){return <aside className="social-extra" aria-label="More social links"><a href={profile.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><b>f</b><span>FACEBOOK</span></a><a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/><span>INSTAGRAM</span></a><a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/><span>WHATSAPP</span></a></aside>}

type ChatMessage = { role:'assistant'|'user'; text:string };
function PortfolioAssistant(){const [open,setOpen]=useState(false),[input,setInput]=useState(''),[messages,setMessages]=useState<ChatMessage[]>([{role:'assistant',text:"Hi! I’m Sourav’s portfolio assistant. Ask about his projects, skills, education or contact details."}]);const inputRef=useRef<HTMLInputElement>(null),panelRef=useRef<HTMLElement>(null);useEffect(()=>{if(open)setTimeout(()=>inputRef.current?.focus(),120);const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false);if(open&&e.key==='Tab'){const nodes=panelRef.current?.querySelectorAll<HTMLElement>('button,a,input')||[];if(!nodes.length)return;const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}};addEventListener('keydown',onKey);return()=>removeEventListener('keydown',onKey)},[open]);const answer=(value:string)=>{const q=value.toLowerCase();if(/project|work|কাজ|প্রজেক্ট/.test(q))return 'Featured work includes Sentinel Map Automation, Distributed Campus AI Compute, VisionScribe AI, Street Food Safety Platform, ZEN Bank Tracker and FocusFlow.';if(/skill|stack|technology|tech|স্কিল/.test(q))return 'Verified skills include Python, Flask, React, JavaScript, MySQL, SQLite, OpenCV, Docker, Git, machine learning, computer vision and Google Earth Engine.';if(/education|study|university|শিক্ষা/.test(q))return 'Sourav is studying B.Sc. in Computer Science and Engineering at Daffodil International University.';if(/email|contact|phone|যোগাযোগ/.test(q))return `Email ${profile.email} or use the Contact section. Verified phone: ${profile.phone}.`;if(/resume|cv|রেজুমে/.test(q))return 'Use the Resume link below to open Sourav’s verified CV.';if(/location|where|থাক/.test(q))return `Sourav is based in ${profile.location}.`;return 'I can help with Sourav’s projects, skills, education, resume, location or contact information.'};const send=(value=input)=>{const clean=value.trim();if(!clean)return;setMessages(prev=>[...prev,{role:'user',text:clean},{role:'assistant',text:answer(clean)}]);setInput('')};return <><button className={`chat-launcher ${open?'active':''}`} onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="portfolio-chat"><MessageCircle/><span>ASK SOURAV</span></button>{open&&<section ref={panelRef} id="portfolio-chat" className="chat-panel" role="dialog" aria-label="Sourav portfolio assistant"><header><div><span className="chat-status"/><strong>PORTFOLIO ASSISTANT</strong><small>Answers from this website</small></div><button onClick={()=>setOpen(false)} aria-label="Close portfolio assistant"><X/></button></header><div className="chat-messages" aria-live="polite">{messages.map((m,i)=><p key={i} className={m.role}>{m.text}</p>)}</div><div className="chat-suggestions">{['Projects','Skills','Education','Contact'].map(s=><button key={s} onClick={()=>send(s)}>{s}</button>)}</div><form onSubmit={e=>{e.preventDefault();send()}}><input ref={inputRef} value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask about Sourav…" aria-label="Message portfolio assistant"/><button type="submit" aria-label="Send message"><Send/></button></form><footer><a href={profile.resume} target="_blank"><Download/> RESUME</a><a href={`mailto:${profile.email}`}><Mail/> EMAIL</a></footer></section>}</>}

function App(){
const root=useRef<HTMLDivElement>(null),work=useRef<HTMLElement>(null),track=useRef<HTMLDivElement>(null);
const [project,setProject]=useState<number|null>(null),[copied,setCopied]=useState(false);

useEffect(()=>{
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile=matchMedia('(max-width: 900px), (pointer: coarse)').matches;
  let lenis:Lenis|undefined;
  let rafId=0;

  if(!reduced&&!mobile){
    lenis=new Lenis({duration:1.08,smoothWheel:true});
    const raf=(time:number)=>{lenis?.raf(time);rafId=requestAnimationFrame(raf)};
    rafId=requestAnimationFrame(raf);
    lenis.on('scroll',ScrollTrigger.update);
  }

  const ctx=gsap.context(()=>{
    gsap.from('.hero-line',{y:mobile?42:90,opacity:0,stagger:.1,duration:.95,ease:'power3.out',delay:1.25});
    gsap.from('.hero-portrait',{y:mobile?72:160,scale:mobile ? .94 : .86,opacity:0,duration:1.25,ease:'expo.out',delay:1.1});

    if(!reduced){
      if(!mobile){
        gsap.to('.hero-scene',{scale:.92,y:-80,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
        gsap.to('.orb-main',{x:'62vw',y:'30vh',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1.2}});
      }

      gsap.utils.toArray<HTMLElement>('.reveal').forEach(el=>gsap.from(el,{
        y:mobile?38:70,
        opacity:0,
        duration:.9,
        ease:'power2.out',
        scrollTrigger:{trigger:el,start:mobile?'top 92%':'top 86%',once:true,invalidateOnRefresh:true}
      }));

      gsap.utils.toArray<HTMLElement>('.capability').forEach((el,i)=>gsap.to(el,{
        opacity:1,
        x:0,
        duration:.75,
        ease:'power2.out',
        scrollTrigger:{trigger:el,start:mobile?'top 94%':'top 78%',once:true,invalidateOnRefresh:true},
        delay:mobile?0:i*.03
      }));

      const mm=gsap.matchMedia();
      mm.add('(min-width: 901px)',()=>{
        if(!track.current||!work.current)return;
        const distance=()=>Math.max(0,track.current!.scrollWidth-innerWidth);
        gsap.to(track.current,{x:()=>-distance(),ease:'none',scrollTrigger:{trigger:work.current,start:'top top',end:()=>`+=${distance()}`,pin:true,scrub:1,invalidateOnRefresh:true}});
      });
    }
  },root);

  const refresh=()=>ScrollTrigger.refresh();
  window.addEventListener('load',refresh,{once:true});
  const refreshId=requestAnimationFrame(refresh);

  return()=>{
    window.removeEventListener('load',refresh);
    cancelAnimationFrame(refreshId);
    if(rafId)cancelAnimationFrame(rafId);
    ctx.revert();
    lenis?.destroy();
  };
},[]);

const copy=async()=>{await navigator.clipboard.writeText(profile.email);setCopied(true);setTimeout(()=>setCopied(false),1800)};
return <div ref={root}><Preloader/><Cursor/><Navigation/><aside className="social-rail"><a href={profile.github} target="_blank" aria-label="GitHub"><Github/></a><a href={profile.linkedin} target="_blank" aria-label="LinkedIn"><Linkedin/></a></aside><main>
<section id="home" className="hero"><div className="grid-bg"/><div className="orb orb-main"/><div className="hero-scene"><div className="hero-left"><p className="hero-line">HELLO! I'M</p><h1 className="hero-line">SOURAV</h1></div><div className="portrait-wrap"><div className="beam"/><div className="floor-glow"/><img className="hero-portrait hero-character" src={profile.heroImage} alt="Cartoon portrait of Sourav Kundu Samya" width="873" height="1802"/></div><div className="hero-right"><p className="hero-line">A CREATIVE</p><h2 className="hero-line">AI & FULL-STACK</h2><h2 className="hero-line accent">BUILDER</h2></div></div><a href="#about" className="scroll-label">SCROLL TO EXPLORE <ArrowDown/></a></section>
<section id="about" className="about section-pad"><div className="section-label">01 / ABOUT</div><div className="about-layout"><div className="about-portrait reveal"><img src={profile.photo} alt="Sourav Kundu Samya"/><span/></div><div><p className="kicker reveal">CODE · DATA · CONTEXT</p><h2 className="display reveal">I turn complex technical ideas into <em>practical products.</em></h2><p className="about-copy reveal">I’m Sourav Kundu Samya, a Computer Science and Engineering student at Daffodil International University. I build AI-powered applications, full-stack web platforms, geospatial automation systems and distributed computing solutions.</p><div className="facts reveal"><span><b>CSE</b> Undergraduate</span><span><b>DIU</b> Bangladesh</span><span><b>AI</b> + Full Stack</span></div></div></div></section>
<section className="what section-pad"><div className="section-label">02 / CAPABILITIES</div><div className="what-grid"><h2 className="display sticky-title reveal">WHAT<br/>I <em>DO</em></h2><div className="cap-list">{capabilities.map((c,i)=><article className="capability" key={c[0]}><span>0{i+1}</span><div><h3>{c[0]}</h3><p>{c[1]}</p></div></article>)}</div></div><div className="ticker"><span>PYTHON</span><i/> <span>FLASK</span><i/> <span>REACT</span><i/> <span>OPENCV</span><i/> <span>DOCKER</span><i/> <span>EARTH ENGINE</span></div></section>
<section id="journey" className="journey section-pad"><div className="section-label">03 / SELECTED JOURNEY</div><h2 className="display reveal">My Journey &<br/><em>Experience</em></h2><div className="timeline"><article className="reveal"><b>01</b><h3>CSE Undergraduate</h3><span>Daffodil International University</span><p>Building a foundation in software engineering, databases, intelligent systems and practical product development.</p></article><article className="reveal"><b>02</b><h3>AI & Software Projects</h3><span>Academic and independent work</span><p>Exploring computer vision, geospatial automation, distributed infrastructure and focused full-stack applications.</p></article><article className="reveal"><b>03</b><h3>DIU AI Project Competition</h3><span>Final round selection · 2026</span><p>Recognized through a verified final-round selection while continuing to develop applied AI projects.</p></article></div></section>
<section id="work" className="work" ref={work}><div className="work-head"><span>04 / SELECTED WORK</span><h2>MY <em>WORK</em></h2><p>Scroll to move through selected systems.</p></div><div className="project-track" ref={track}>{projects.map((p,i)=><article className={`project-card card-${i+1}`} key={p.title} onClick={()=>setProject(i)} tabIndex={0} onKeyDown={e=>(e.key==='Enter'||e.key===' ')&&setProject(i)}><div className="project-top"><b>{p.n}</b><span>{p.type}</span></div><div className="project-media">{p.image?<img src={p.image} alt={`${p.title} project interface`} loading="lazy"/>:<div className="project-glyph">{p.title.split(' ').map(w=>w[0]).join('').slice(0,3)}</div>}<span>VIEW</span></div><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tech.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></section>
<section id="contact" className="contact section-pad"><div className="section-label">05 / CONTACT</div><h2 className="display reveal">LET'S BUILD<br/><em>SOMETHING USEFUL.</em></h2><div className="contact-grid reveal"><div><a className="email" href={`mailto:${profile.email}`}>{profile.email}</a><button onClick={copy}>{copied?<Check/>:<Copy/>}{copied?'COPIED':'COPY EMAIL'}</button></div><a className="resume" href={profile.resume} download><Download/> DOWNLOAD RESUME</a><div className="contact-meta"><span>{profile.location}</span><span>Built by {profile.name}</span><span>© {new Date().getFullYear()}</span></div></div></section></main>
<ExtraSocials/>
<PortfolioAssistant/>
{project!==null&&<div className="modal" role="dialog" aria-modal="true" aria-labelledby="project-title" onMouseDown={e=>e.target===e.currentTarget&&setProject(null)}><div className="modal-card"><button className="modal-x" onClick={()=>setProject(null)} aria-label="Close"><X/></button><span>{projects[project].n} / {projects[project].type}</span><h2 id="project-title">{projects[project].title}</h2><p>{projects[project].desc}</p><div className="tags">{projects[project].tech.map(t=><span key={t}>{t}</span>)}</div>{projects[project].github&&<a href={projects[project].github} target="_blank">VIEW VERIFIED GITHUB <ArrowUpRight/></a>}</div></div>}</div>}
export default App;
