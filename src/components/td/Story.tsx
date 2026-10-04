import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { EasterEgg } from "./Ambient";
import successImg from "@/assets/mem-success.jpg";

/* ------------------------------------------------ OPENING HOOK */
export function Hero() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });
      tl.set(".h-write", { strokeDasharray: 1400, strokeDashoffset: 1400 })
        .fromTo(".h-pencil", { opacity: 0, x: -20, y: 10 }, { opacity: 1, x: 0, y: 0, duration: 0.4 })
        .to(".h-write", { strokeDashoffset: 0, duration: 2.6, ease: "power1.inOut" }, "<0.1")
        .fromTo(".h-pencil", { left: "4%" }, { left: "92%", duration: 2.6, ease: "power1.inOut" }, "<")
        .to(".h-write", { fill: "currentColor", duration: 0.6 }, "-=0.4")
        .to(".h-pencil", { rotate: -18, y: -6, duration: 0.35, yoyo: true, repeat: 1 })
        .fromTo(".h-small", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "power2.out" })
        .to(".h-pencil", { opacity: 0, y: 30, duration: 0.5 }, "+=0.2")
        .to(".h-hand", { opacity: 0, filter: "blur(10px)", y: -30, duration: 0.9, ease: "power2.in" }, "+=0.3")
        .fromTo(".h-believe span", { opacity: 0, filter: "blur(14px)", y: 20 }, { opacity: 1, filter: "blur(0px)", y: 0, stagger: 0.07, duration: 1, ease: "power3.out" }, "-=0.2")
        .fromTo(".h-rule", { scaleX: 0 }, { scaleX: 1, duration: 1, ease: "power3.inOut" }, "+=0.4")
        .fromTo(".h-title", { clipPath: "inset(100% 0 0 0)", y: 30 }, { clipPath: "inset(0% 0 0 0)", y: 0, duration: 1.2, ease: "power4.out" }, "-=0.4")
        .fromTo(".h-sub", { opacity: 0 }, { opacity: 1, duration: 1.2 }, "-=0.3")
        .fromTo(".h-cue", { opacity: 0 }, { opacity: 1, duration: 1 });
      gsap.to(".h-stage", { yPercent: -18, opacity: 0.2, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } });
    }, root);
    return () => ctx.revert();
  }, []);

  const believe = "To believe.".split("");
  return (
    <section ref={root} className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6">
      <div className="h-stage relative w-full max-w-4xl text-center">
        <div className="h-hand absolute inset-x-0 top-1/2 -translate-y-1/2">
          <div className="relative mx-auto w-full max-w-3xl">
            <svg viewBox="0 0 720 120" className="w-full text-graphite" aria-label="Before we knew how to…">
              <text x="360" y="82" textAnchor="middle" className="h-write font-hand" fontSize="78" fill="transparent" stroke="currentColor" strokeWidth="1.1">
                Before we knew how to…
              </text>
            </svg>
            <svg className="h-pencil pointer-events-none absolute top-[10%] h-16 w-16 -translate-x-2 opacity-0" viewBox="0 0 64 64" aria-hidden>
              <g transform="rotate(35 32 32)">
                <rect x="27" y="2" width="10" height="42" className="fill-gold" />
                <rect x="27" y="2" width="10" height="6" className="fill-brown" />
                <polygon points="27,44 37,44 32,58" className="fill-paper" />
                <polygon points="30.5,53 33.5,53 32,58" className="fill-graphite" />
              </g>
            </svg>
            <p className="h-small mt-2 font-hand text-3xl text-brown sm:text-4xl" style={{ clipPath: "inset(0 100% 0 0)" }}>
              someone taught us.
            </p>
          </div>
        </div>

        <div className="relative">
          <h1 className="h-believe font-serif text-6xl font-light italic leading-none text-navy sm:text-8xl md:text-9xl">
            {believe.map((c, i) => (
              <span key={i} className="inline-block opacity-0">{c === " " ? "\u00A0" : c}</span>
            ))}
          </h1>
          <div className="h-rule mx-auto my-8 h-px w-24 origin-center scale-x-0 bg-gold" />
          <h2 className="h-title font-sans text-sm font-medium uppercase tracking-[0.55em] text-graphite sm:text-base" style={{ clipPath: "inset(100% 0 0 0)" }}>
            Teachers’ Day
          </h2>
          <p className="h-sub mx-auto mt-6 max-w-xs font-serif text-xl italic text-brown opacity-0 sm:max-w-md sm:text-2xl">
            For every lesson that never made it into a textbook.
          </p>
        </div>
      </div>
      <div className="h-cue absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-0">
        <span className="eyebrow">scroll slowly</span>
        <span className="h-10 w-px animate-pulse bg-brown" />
      </div>
    </section>
  );
}

/* ------------------------------------------------ BEFORE WE KNEW */
export function BeforeWeKnew() {
  const root = useRef<HTMLElement>(null);
  const [typed, setTyped] = useState("");
  const full = "BEFORE WE KNEW HOW TO WRITE…";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // 1 — mask reveal + pencil underline
      const t1 = gsap.timeline({ scrollTrigger: { trigger: ".b1", start: "top 65%" } });
      t1.fromTo(".b1-line", { clipPath: "inset(0 0 100% 0)", yPercent: 60 }, { clipPath: "inset(0 0 0% 0)", yPercent: 0, stagger: 0.15, duration: 1.2, ease: "power4.out" })
        .fromTo(".b1-under", { strokeDashoffset: 400 }, { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" }, "-=0.3")
        .fromTo(".b1-hand", { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.8 }, "-=0.4");

      // 2 — typewriter
      ScrollTrigger.create({
        trigger: ".b2", start: "top 65%", once: true,
        onEnter: () => {
          const o = { n: 0 };
          gsap.to(o, { n: full.length, duration: 2, ease: "none", onUpdate: () => setTyped(full.slice(0, Math.round(o.n))) });
          gsap.fromTo(".b2-hand", { opacity: 0, rotate: -4, scale: 0.9 }, { opacity: 1, rotate: -2, scale: 1, delay: 2.1, duration: 0.8, ease: "back.out(2)" });
        },
      });

      // 3 — chalk writing on the board
      gsap.set(".b3-chalk", { strokeDasharray: 1600, strokeDashoffset: 1600 });
      const t3 = gsap.timeline({ scrollTrigger: { trigger: ".b3", start: "top 60%" } });
      t3.fromTo(".b3", { clipPath: "inset(8% 6% 8% 6% round 6px)" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 1.2, ease: "power3.inOut" })
        .to(".b3-chalk", { strokeDashoffset: 0, duration: 2.4, stagger: 0.8, ease: "power1.inOut" }, "-=0.4")
        .to(".b3-chalk", { fill: "currentColor", fillOpacity: 0.85, duration: 0.6 }, "-=0.6");

      // 4 — image reveal through an opening circle
      gsap.timeline({ scrollTrigger: { trigger: ".b4", start: "top 70%", end: "center center", scrub: 1 } })
        .fromTo(".b4-img", { clipPath: "circle(0% at 50% 50%)", scale: 1.25 }, { clipPath: "circle(75% at 50% 50%)", scale: 1 })
        .fromTo(".b4-text", { letterSpacing: "0.6em", opacity: 0 }, { letterSpacing: "0.04em", opacity: 1 }, 0);
      gsap.fromTo(".b4-hand", { opacity: 0, filter: "blur(8px)" }, { opacity: 1, filter: "blur(0px)", duration: 1.4, scrollTrigger: { trigger: ".b4", start: "center 60%" } });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative">
      <div className="b1 flex min-h-[85svh] flex-col justify-center px-6 sm:px-16">
        <p className="eyebrow mb-6">Lesson 01</p>
        <h2 className="font-serif text-5xl font-light leading-[0.95] text-navy sm:text-7xl md:text-8xl">
          <span className="block overflow-hidden"><span className="b1-line block">Before we knew</span></span>
          <span className="block overflow-hidden"><span className="b1-line block">how to <em className="relative">read…
            <svg viewBox="0 0 300 20" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-4 w-full" aria-hidden>
              <path className="b1-under stroke-graphite" d="M2 12 C 60 4, 140 18, 200 9 S 290 10, 298 7" fill="none" strokeWidth="2" strokeDasharray="400" strokeLinecap="round" />
            </svg></em></span></span>
        </h2>
        <p className="b1-hand mt-8 self-end font-hand text-3xl text-brown sm:text-4xl">someone taught us to discover.</p>
      </div>

      <div className="b2 flex min-h-[80svh] items-center justify-center px-6">
        <div className="paper-texture w-full max-w-2xl -rotate-1 px-6 py-12 sm:px-14">
          <p className="min-h-[5.5rem] font-mono text-2xl leading-snug text-graphite sm:text-4xl">
            <span className={typed.length < full.length ? "caret" : ""}>{typed}</span>
          </p>
          <p className="b2-hand mt-6 inline-block font-hand2 text-4xl text-forest opacity-0 sm:text-5xl">someone taught us to express.</p>
        </div>
      </div>

      <div className="b3 chalkboard flex min-h-[90svh] items-center justify-center px-4 py-20">
        <svg viewBox="0 0 800 300" className="w-full max-w-4xl text-chalk" aria-label="Before we knew how to fail… someone taught us to try again.">
          <text x="400" y="110" textAnchor="middle" className="b3-chalk font-hand4" fontSize="58" fill="transparent" stroke="currentColor" strokeWidth="1.2">Before we knew how to fail…</text>
          <text x="400" y="220" textAnchor="middle" className="b3-chalk font-hand" fontSize="66" fill="transparent" stroke="currentColor" strokeWidth="1.2">someone taught us to try again.</text>
        </svg>
      </div>

      <div className="b4 relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6">
        <img src={successImg} alt="" width={816} height={816} loading="lazy" className="b4-img absolute inset-0 h-full w-full object-cover opacity-40 sepia-[.3]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/40 to-ivory" />
        <div className="relative text-center">
          <h2 className="b4-text font-serif text-4xl font-light uppercase leading-tight text-navy sm:text-6xl">Before we knew<br />who we could become…</h2>
          <p className="b4-hand mt-8 font-hand3 text-2xl text-brown sm:text-3xl">someone believed in us.</p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------ NOTEBOOK */
const notes = [
  { t: "Ask questions.", m: "There was never a silly one. You made sure we knew that.", x: "8%", y: "14%" },
  { t: "Try again.", m: "You handed the project back — not as a grade, but as a second chance.", x: "48%", y: "36%" },
  { t: "Don’t be afraid of mistakes.", m: "Every error message was proof we were still trying.", x: "6%", y: "60%" },
  { t: "Keep going.", m: "Two words in the code review that carried us through whole years.", x: "44%", y: "82%" },
];

export function Notebook() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const path = root.current!.querySelector<SVGPathElement>(".nb-path")!;
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(path, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: ".nb-page", start: "top 70%", end: "bottom 70%", scrub: 0.6 } });
      gsap.utils.toArray<HTMLElement>(".nb-note").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, scale: 0.6, rotate: -8 }, { opacity: 1, scale: 1, rotate: 0, ease: "back.out(2)", duration: 0.7, scrollTrigger: { trigger: el, start: "top 75%" } });
      });
      gsap.to(".nb-page", { rotate: 0.6, yPercent: -3, ease: "none", scrollTrigger: { trigger: root.current, scrub: true } });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="px-4 py-24 sm:px-10">
      <div className="mx-auto mb-12 max-w-xl text-center">
        <p className="eyebrow">The notebook</p>
        <h2 className="mt-4 font-serif text-4xl font-light text-navy sm:text-5xl">Notes in the margins of growing up</h2>
        <p className="mt-3 font-sans text-sm text-brown">Tap a note to open it.</p>
      </div>
      <div className="nb-page paper-texture ruled relative mx-auto h-[150svh] max-w-3xl -rotate-1 overflow-hidden">
        <svg viewBox="0 0 400 1000" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
          <path className="nb-path stroke-graphite" d="M60 40 C 300 120, 340 220, 240 330 S 40 480, 120 600 S 360 760, 260 860 S 140 960, 200 990" fill="none" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
        </svg>
        <span className="absolute left-14 top-6 font-hand text-xl text-brown/70">p. 47 — things to remember</span>
        <EasterEgg className="absolute bottom-6 left-2" label="Margin note" trigger={<span className="font-hand text-sm text-brown [writing-mode:vertical-rl]">did you check the margins?</span>} reveal="That’s where the best memories were." />
        {notes.map((n, i) => (
          <button
            key={n.t}
            onClick={() => setOpen(open === i ? null : i)}
            className="nb-note absolute w-[46%] text-left sm:w-[40%]"
            style={{ left: n.x, top: n.y }}
          >
            <span className={"block bg-card px-4 py-3 shadow-paper transition-all duration-500 " + (open === i ? "rotate-0 scale-105" : i % 2 ? "rotate-2" : "-rotate-2")}>
              <span className="font-hand text-2xl leading-tight text-navy sm:text-3xl">{n.t}</span>
              <span className={"grid transition-all duration-500 " + (open === i ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                <span className="overflow-hidden font-serif text-base italic leading-snug text-graphite sm:text-lg">{n.m}</span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------ THINGS YOU TAUGHT US */
const lessons = [
  { t: "To try again.", m: "Even when the code wouldn’t run.", f: "font-hand", r: "-rotate-1" },
  { t: "To ask why.", m: "And to keep asking until it made sense.", f: "font-hand2", r: "rotate-1" },
  { t: "To be curious.", m: "About code, bugs, browsers and people.", f: "font-hand4", r: "-rotate-2" },
  { t: "To speak up.", m: "Even when our voice shook in front of the class.", f: "font-hand3", r: "rotate-0" },
  { t: "To keep going.", m: "One page, one term, one year at a time.", f: "font-hand", r: "rotate-2" },
  { t: "To believe we could.", m: "Long before we believed it ourselves.", f: "font-hand2", r: "-rotate-1" },
];

export function ThingsYouTaught() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".tt-head", { x: "-30%" }, { x: "10%", ease: "none", scrollTrigger: { trigger: root.current, scrub: true } });
      gsap.utils.toArray<HTMLElement>(".tt-item").forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, x: i % 2 ? 60 : -60 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={root} className="overflow-hidden bg-navy py-28 text-ivory">
      <h2 className="tt-head whitespace-nowrap font-serif text-6xl font-light italic text-gold/80 sm:text-8xl">Things you taught us — things you taught us</h2>
      <p className="mt-6 px-6 font-sans text-xs uppercase tracking-[0.3em] text-paper/70">Not on any syllabus. Tap each one.</p>
      <ul className="mx-auto mt-14 max-w-3xl space-y-10 px-6">
        {lessons.map((l, i) => (
          <li key={l.t} className={"tt-item " + (i % 2 ? "text-right" : "text-left")}>
            <button
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === i ? null : i)}
              className="relative inline-block"
            >
              <span className={"pointer-events-none absolute inset-0 flex items-center justify-center whitespace-nowrap font-serif text-lg italic text-gold transition-all duration-700 sm:text-2xl " + (active === i ? "translate-y-10 opacity-100 blur-0" : "translate-y-4 opacity-0 blur-sm")}>
                {l.m}
              </span>
              <span className={`relative block ${l.f} ${l.r} text-5xl leading-none text-ivory transition-all duration-500 sm:text-7xl ${active === i ? "-translate-y-2 opacity-60" : ""}`}>
                {l.t}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------ RED CORRECTION */
export function Correction() {
  const root = useRef<HTMLElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(".cr-draw", { strokeDasharray: 600, strokeDashoffset: 600 });
      tl.current = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top 55%" } })
        .to(".cr-circle", { strokeDashoffset: 0, duration: 0.9, ease: "power2.inOut" })
        .to(".cr-x", { strokeDashoffset: 0, duration: 0.35, stagger: 0.2 })
        .fromTo(".cr-wrong", { opacity: 0, scale: 1.4, rotate: -12 }, { opacity: 1, scale: 1, rotate: -6, duration: 0.4, ease: "back.out(3)" })
        .to({}, { duration: 0.8 })
        .to(".cr-wrong", { opacity: 0, filter: "blur(8px)", scaleX: 0.3, duration: 0.6 })
        .to(".cr-x", { opacity: 0, duration: 0.4 }, "<")
        .to(".cr-circle", { opacity: 0.25, duration: 0.6 }, "<")
        .fromTo(".cr-try", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power1.inOut" })
        .to(".cr-under", { strokeDashoffset: 0, duration: 0.6 })
        .fromTo(".cr-lesson", { opacity: 0, y: 20, filter: "blur(6px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2 }, "+=0.2");
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={root} className="flex min-h-[100svh] flex-col items-center justify-center px-6 py-24">
      <p className="eyebrow mb-8">Lesson 07 — bugs</p>
      <div className="paper-texture ruled relative w-full max-w-xl rotate-1 px-14 pb-16 pt-12">
        <p className="font-hand4 text-xl text-graphite">Q4. Which HTML tag makes the biggest heading?</p>
        <div className="relative mt-6 inline-block">
          <span className="font-hand4 text-5xl text-graphite">= &lt;h6&gt;</span>
          <svg viewBox="0 0 200 100" className="absolute -inset-x-8 -inset-y-6 h-[calc(100%+3rem)] w-[calc(100%+4rem)] overflow-visible" aria-hidden>
            <path className="cr-draw cr-circle stroke-redpen" d="M20 55 C 15 15, 170 5, 185 45 S 60 105, 25 60 S 90 10, 140 18" fill="none" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <svg viewBox="0 0 60 60" className="absolute -right-24 top-0 h-14 w-14" aria-hidden>
            <path className="cr-draw cr-x stroke-redpen" d="M8 8 L 52 52" strokeWidth="4" strokeLinecap="round" />
            <path className="cr-draw cr-x stroke-redpen" d="M52 8 L 8 52" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        <p className="cr-wrong absolute right-8 top-10 font-hand text-4xl font-semibold uppercase text-redpen opacity-0">Wrong</p>
        <div className="mt-10">
          <p className="cr-try inline-block font-hand text-5xl text-redpen sm:text-6xl" style={{ clipPath: "inset(0 100% 0 0)" }}>Try again. It’s &lt;h1&gt;!</p>
          <svg viewBox="0 0 300 14" className="h-3 w-64" aria-hidden>
            <path className="cr-draw cr-under stroke-redpen" d="M2 8 C 80 2, 200 14, 298 5" fill="none" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="cr-lesson mt-14 max-w-md text-center font-serif text-3xl font-light uppercase leading-tight tracking-wide text-navy opacity-0 sm:text-5xl">
        Bugs are part of learning.
      </p>
      <button onClick={() => tl.current?.restart()} className="mt-8 font-sans text-xs uppercase tracking-[0.3em] text-brown underline-offset-4 hover:underline">
        ↺ grade it again
      </button>
    </section>
  );
}
