import { useEffect, useRef, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const cssVar = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

/** Smooth scroll wired into ScrollTrigger. */
export function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
  return null;
}

/** Floating chalk dust / light particles. */
export function DustLayer() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    const gold = cssVar("--gold");
    const chalk = cssVar("--brown");
    let w = 0, h = 0, raf = 0;
    const dpr = Math.min(window.devicePixelRatio, 2);
    const resize = () => {
      w = c.width = window.innerWidth * dpr;
      h = c.height = window.innerHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);
    const count = window.innerWidth < 640 ? 34 : 70;
    const ps = Array.from({ length: count }, () => ({
      x: Math.random(), y: Math.random(),
      r: (Math.random() * 1.6 + 0.4) * dpr,
      vx: (Math.random() - 0.5) * 0.00008,
      vy: -Math.random() * 0.00012 - 0.00003,
      a: Math.random() * 0.5 + 0.15,
      p: Math.random() * Math.PI * 2,
      col: Math.random() > 0.5 ? gold : chalk,
    }));
    const loop = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.x += p.vx + Math.sin(t / 3000 + p.p) * 0.00005;
        p.y += p.vy;
        if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); }
        ctx.globalAlpha = p.a * (0.6 + 0.4 * Math.sin(t / 900 + p.p));
        ctx.fillStyle = p.col;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-40 h-full w-full opacity-70" />;
}

/** Graphite pencil trail following the cursor (fine pointers only). */
export function PencilTrail() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => setOn(window.matchMedia("(pointer: fine)").matches), []);
  useEffect(() => {
    if (!on) return;
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    const col = cssVar("--graphite");
    const dpr = Math.min(window.devicePixelRatio, 2);
    const resize = () => { c.width = innerWidth * dpr; c.height = innerHeight * dpr; };
    resize();
    addEventListener("resize", resize);
    const pts: { x: number; y: number; t: number }[] = [];
    const move = (e: PointerEvent) => pts.push({ x: e.clientX * dpr, y: e.clientY * dpr, t: performance.now() });
    addEventListener("pointermove", move);
    let raf = 0;
    const loop = () => {
      const now = performance.now();
      while (pts.length && now - pts[0]!.t > 600) pts.shift();
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.strokeStyle = col;
      ctx.lineCap = "round";
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1]!, b = pts[i]!; const life = 1 - (now - b.t) / 600;
        ctx.globalAlpha = life * 0.35;
        ctx.lineWidth = life * 1.6 * dpr;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); removeEventListener("pointermove", move); removeEventListener("resize", resize); };
  }, [on]);
  if (!on) return null;
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-50 h-full w-full" />;
}

/** Button that leans toward the pointer. */
export function Magnetic({ children, className, href, onClick }: { children: ReactNode; className?: string; href?: string; onClick?: () => void }) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const r = ref.current!.getBoundingClientRect();
    gsap.to(ref.current, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.4 });
  };
  const leave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,0.4)" });
  const cls =
    "inline-flex items-center gap-3 rounded-full border border-navy bg-navy px-7 py-4 font-sans text-xs uppercase tracking-[0.3em] text-ivory transition-colors hover:bg-forest " +
    (className ?? "");
  return href ? (
    <a ref={ref} href={href} target="_blank" rel="noreferrer" onPointerMove={move} onPointerLeave={leave} className={cls}>{children}</a>
  ) : (
    <button ref={ref} onClick={onClick} onPointerMove={move} onPointerLeave={leave} className={cls}>{children}</button>
  );
}

/** Tiny hidden reward. */
export function EasterEgg({ trigger, reveal, className, label }: { trigger: ReactNode; reveal: string; className?: string; label: string }) {
  const [open, setOpen] = useState(false);
  return (
    <span className={"relative inline-block " + (className ?? "")}>
      <button aria-label={label} onClick={() => setOpen((o) => !o)} className="cursor-pointer opacity-60 transition hover:scale-110 hover:opacity-100">
        {trigger}
      </button>
      {open && (
        <span className="absolute left-1/2 top-full z-30 mt-2 w-48 -translate-x-1/2 animate-scale-in bg-card px-4 py-3 text-center font-hand text-xl leading-tight text-navy shadow-paper">
          {reveal}
        </span>
      )}
    </span>
  );
}
