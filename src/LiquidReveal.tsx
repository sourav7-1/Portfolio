import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BRUSH_RADIUS = 143;
const DECAY = 0.016;
const IDLE_FADE_FRAMES = 120;
// Where the base <img> (via CSS object-position + transform, media-query
// matched below) anchors the photo, as fractions of the frame. Must mirror
// the CSS on .lr-base exactly so the canvas-drawn "reveal" layer stays
// pixel-aligned with the always-visible base image.
// - Above 1024px the hero is wide, so object-fit:cover is already
//   width-driven and leaves ample natural vertical crop room — no extra
//   zoom needed, just a slight downward slide off dead-center.
// - Below 1024px the hero stacks full-width/tall, so cover becomes
//   height-driven and leaves *no* vertical crop room at all — a deliberate
//   extra zoom is what actually gives FOCUS_Y anything to work with there.
const getFocus = () => ({ x: 0.5, y: 0.20, zoom: 1 });

export default function LiquidReveal({ src, alt }: { src: string; alt: string }){
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current, img = imgRef.current, canvas = canvasRef.current;
    if(!wrap || !img || !canvas) return;

    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const touch = matchMedia('(pointer: coarse)').matches;
    if(reduced || touch) return;

    const ctx = canvas.getContext('2d');
    if(!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cover = document.createElement('canvas');
    const coverCtx = cover.getContext('2d');

    let w = 0, h = 0;
    let last: { x: number; y: number } | null = null;
    let queue: { x: number; y: number }[] = [];
    let idle = 0;
    let ready = false;

    const drawCover = () => {
      if(!coverCtx || !img.naturalWidth || !w || !h) return;
      cover.width = w; cover.height = h;
      const focus = getFocus();
      const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight) * focus.zoom;
      const dw = img.naturalWidth * scale, dh = img.naturalHeight * scale;
      const dx = (w - dw) * focus.x, dy = (h - dh) * focus.y;
      coverCtx.save();
      coverCtx.filter = 'sepia(1) saturate(3.2) hue-rotate(-12deg) brightness(.92) contrast(1.05)';
      coverCtx.drawImage(img, dx, dy, dw, dh);
      coverCtx.restore();
      ready = true;
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      w = Math.max(1, Math.round(rect.width * dpr));
      h = Math.max(1, Math.round(rect.height * dpr));
      canvas.width = w; canvas.height = h;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      drawCover();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();
    if(!img.complete) img.addEventListener('load', resize, { once: true });

    const toLocal = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      return { x: (e.clientX - rect.left) * dpr, y: (e.clientY - rect.top) * dpr };
    };

    const onMove = (e: PointerEvent) => {
      const p = toLocal(e);
      const r = BRUSH_RADIUS * dpr;
      if(p.x < -r || p.x > w + r || p.y < -r || p.y > h + r){
        last = null;
        return;
      }
      if(last){
        const dist = Math.hypot(p.x - last.x, p.y - last.y);
        const step = Math.max(r * 0.3, 1);
        const n = Math.min(Math.ceil(dist / step), 60);
        for(let i = 1; i <= n; i++){
          queue.push({ x: last.x + (p.x - last.x) * (i / n), y: last.y + (p.y - last.y) * (i / n) });
        }
      } else {
        queue.push(p);
      }
      last = p;
    };
    // Listen on window, not wrap: the hero's text/content layer sits on top
    // (higher z-index) and would otherwise swallow the hit-test before it
    // ever reaches this element.
    window.addEventListener('pointermove', onMove);

    const tick = () => {
      if(!ready || !w || !h) return;
      const drawing = queue.length > 0;
      if(drawing) idle = 0;
      else {
        idle++;
        if(idle > IDLE_FADE_FRAMES) return;
      }

      const fade = drawing ? DECAY : Math.min(DECAY + idle * 0.004, 0.5);
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = `rgba(0,0,0,${fade})`;
      ctx.fillRect(0, 0, w, h);

      if(drawing){
        const r = BRUSH_RADIUS * dpr;
        ctx.globalCompositeOperation = 'source-over';
        for(const p of queue){
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.clip();
          ctx.drawImage(cover, 0, 0, w, h);
          ctx.restore();
        }
        queue = [];
      }

      if(idle === IDLE_FADE_FRAMES + 1) ctx.clearRect(0, 0, w, h);
    };
    gsap.ticker.add(tick);

    return () => {
      ro.disconnect();
      gsap.ticker.remove(tick);
      window.removeEventListener('pointermove', onMove);
      img.removeEventListener('load', resize);
    };
  }, [src]);

  return (
    <div className="liquid-reveal" ref={wrapRef}>
      <img ref={imgRef} src={src} alt={alt} className="lr-base" />
      <canvas ref={canvasRef} className="lr-canvas" aria-hidden="true" />
    </div>
  );
}
