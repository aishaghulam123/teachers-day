import { useEffect, useMemo, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { EasterEgg } from "./Ambient";
import firstDay from "@/assets/mem-first-day.jpg";
import presentation from "@/assets/mem-presentation.jpg";
import wellDone from "@/assets/mem-well-done.jpg";
import mistake from "@/assets/mem-mistake.jpg";
import success from "@/assets/mem-success.jpg";

export const EVENT = {
  day: "05",
  month: "October",
  year: "2026",
};

/* ------------------------------------------------ REGISTER */
const students = [
  { n: "Student A.", note: "Always curious.", m: "Raised a hand before the question was even finished." },
  { n: "Student B.", note: "Keep going.", m: "Stayed after class every Thursday until the first bug finally got fixed." },
  { n: "Student C.", note: "Excellent effort.", m: "Rebuilt the webpage three times. The third one made the teacher smile." },
  { n: "Student D.", note: "You can do this.", m: "Shaking hands, first project demo, a nod from the back of the room." },
  { n: "Student E.", note: "Don’t give up.", m: "Crashed the first app. Shipped the last one. Nobody was surprised but them." },
];

export function Register() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".rg-row", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", stagger: 0.12, duration: 0.9, ease: "power2.out", scrollTrigger: { trigger: ".rg-book", start: "top 70%" } });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={root} className="px-4 py-28 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Attendance register · Class of always</p>
        <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-navy sm:text-6xl">The people who made the classroom matter</h2>
        <div className="rg-book paper-texture mt-12 overflow-hidden">
          <div className="grid grid-cols-[2.5rem_1fr_auto] border-b border-navy/30 bg-paper/50 px-4 py-3 font-sans text-[0.65rem] uppercase tracking-[0.25em] text-brown">
            <span>No.</span><span>Name</span><span className="flex items-center gap-2">Remarks <EasterEgg label="Red mark" trigger={<span className="font-hand text-lg text-redpen">✗</span>} reveal="Not wrong. Just learning." /></span>
          </div>
          {students.map((s, i) => (
            <button key={s.n} onClick={() => setOpen(open === i ? null : i)} className="rg-row block w-full border-b border-navy/10 px-4 py-4 text-left transition-colors hover:bg-paper/40">
              <span className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-2">
                <span className="font-mono text-sm text-brown">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif text-2xl text-graphite">{s.n}</span>
                <span className="font-hand text-xl text-redpen sm:text-2xl">{s.note}</span>
              </span>
              <span className={"grid pl-10 transition-all duration-500 " + (open === i ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                <span className="overflow-hidden font-serif text-lg italic text-forest">{s.m}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------ LETTER */
const letter = [
  "Dear Teacher,",
  "We may not remember every line of code,",
  "every tag and every syntax,",
  "or every tutorial we followed.",
  "But we remember the way you encouraged us.",
  "The way you corrected us.",
  "The way you made us believe",
  "we could do more than we thought.",
  "Thank you.",
];

export function Letter() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.timeline({ scrollTrigger: { trigger: ".lt-paper", start: "top 70%", end: "bottom 60%", scrub: 0.8 } })
        .fromTo(".lt-line", { clipPath: "inset(-20% 100% -20% 0)" }, { clipPath: "inset(-20% 0% -20% 0)", stagger: 0.5, ease: "none" });
      gsap.fromTo(".lt-paper", { rotate: -4, y: 60 }, { rotate: 1, y: -30, ease: "none", scrollTrigger: { trigger: root.current, scrub: true } });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={root} className="bg-paper/40 px-5 py-28">
      <h2 className="mx-auto max-w-2xl text-center font-serif text-3xl font-light uppercase tracking-wide text-navy sm:text-5xl">A note we should have written sooner.</h2>
      <div className="lt-paper paper-texture mx-auto mt-14 max-w-xl px-8 py-12 sm:px-14">
        {letter.map((l, i) => (
          <p key={i} className={"lt-line font-hand text-[1.7rem] leading-[1.5] text-navy sm:text-4xl " + (i === 0 ? "mb-4" : "") + (i === letter.length - 1 ? " mt-6 text-right text-brown" : "")}>
            {l}
          </p>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------ INVITATION */
export function Invitation() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".iv-word", { yPercent: 110 }, { yPercent: 0, stagger: 0.06, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".iv-lead", start: "top 75%" } });
      gsap.fromTo(".iv-big", { scale: 1.6, opacity: 0, filter: "blur(10px)" }, { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.6, ease: "expo.out", scrollTrigger: { trigger: ".iv-big", start: "top 80%" } });
      gsap.fromTo(".iv-rule", { scaleX: 0 }, { scaleX: 1, stagger: 0.15, duration: 1.2, ease: "power3.inOut", scrollTrigger: { trigger: ".iv-grid", start: "top 80%" } });
      gsap.fromTo(".iv-cell", { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.15, duration: 1, scrollTrigger: { trigger: ".iv-grid", start: "top 75%" } });
    }, root);
    return () => ctx.revert();
  }, []);
  const lead = "And now, we’d love to celebrate you.".split(" ");
  return (
    <section ref={root} className="px-6 py-32 text-center">
      <p className="iv-lead mx-auto max-w-lg font-serif text-3xl italic text-brown sm:text-4xl">
        {lead.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom"><span className="iv-word inline-block">{w}&nbsp;</span></span>
        ))}
      </p>
      <p className="eyebrow mt-20">You’re invited</p>
      <h2 className="iv-big mt-4 font-serif text-5xl font-light uppercase leading-[0.9] text-navy sm:text-8xl">Teachers’ Day<br /><em className="lowercase">celebration</em></h2>
      <div className="iv-grid mx-auto mt-20 max-w-4xl">
        <div className="iv-rule h-px origin-left bg-graphite/40" />
        <div className="grid grid-cols-1">
          <div className="iv-cell py-8">
            <p className="eyebrow">Date</p>
            <p className="mt-2 font-serif text-8xl font-light leading-none text-navy">{EVENT.day}</p>
            <p className="mt-2 font-sans text-sm uppercase tracking-[0.4em] text-graphite">{EVENT.month} {EVENT.year}</p>
          </div>
        </div>
        <div className="iv-rule h-px origin-right bg-graphite/40" />
      </div>
    </section>
  );
}

/* ------------------------------------------------ DATE — peel the vellum */
export function DateReveal() {
  const stage = useRef<HTMLDivElement>(null);
  const veil = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const drag = useRef<{ x: number; dx: number } | null>(null);
  const days = useMemo(() => {
    const first = new Date(2026, 9, 1).getDay();
    return [...Array(first).fill(null), ...Array.from({ length: 31 }, (_, i) => i + 1)];
  }, []);

  const finish = () => {
    setRevealed(true);
    gsap.to(veil.current, { xPercent: 120, rotate: 8, opacity: 0, duration: 0.8, ease: "power3.in" });
    gsap.timeline({ delay: 0.7 })
      .fromTo(".dr-ring", { strokeDashoffset: 200 }, { strokeDashoffset: 0, duration: 0.8 })
      .to(".dr-cal", { scale: 0.85, opacity: 0, filter: "blur(6px)", duration: 0.8, ease: "power2.in" }, "+=0.5")
      .fromTo(".dr-big", { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1.2, ease: "expo.out", pointerEvents: "auto" });
  };
  const down = (e: React.PointerEvent) => { if (revealed) return; drag.current = { x: e.clientX, dx: 0 }; (e.target as HTMLElement).setPointerCapture(e.pointerId); };
  const move = (e: React.PointerEvent) => {
    if (!drag.current) return;
    drag.current.dx = Math.max(0, e.clientX - drag.current.x);
    gsap.set(veil.current, { x: drag.current.dx, rotate: drag.current.dx / 40 });
  };
  const up = () => {
    if (!drag.current) return;
    const w = stage.current!.offsetWidth;
    if (drag.current.dx > w * 0.3) finish();
    else gsap.to(veil.current, { x: 0, rotate: 0, duration: 0.5, ease: "elastic.out(1,0.5)" });
    drag.current = null;
  };

  return (
    <section className="px-5 py-24">
      <p className="eyebrow text-center">Save the date</p>
      <div ref={stage} className="relative mx-auto mt-8 aspect-[4/5] w-full max-w-md">
        <div className="dr-cal paper-texture absolute inset-0 flex flex-col p-6">
          <div className="flex items-baseline justify-between border-b border-graphite/30 pb-3">
            <span className="font-serif text-4xl text-navy">October</span>
            <span className="font-mono text-brown">2026</span>
          </div>
          <div className="mt-4 grid grid-cols-7 gap-y-3 text-center font-sans text-[0.6rem] uppercase tracking-widest text-brown">
            {"SMTWTFS".split("").map((d, i) => <span key={i}>{d}</span>)}
          </div>
          <div className="mt-3 grid flex-1 grid-cols-7 content-start gap-y-3 text-center font-serif text-xl text-graphite">
            {days.map((d, i) => (
              <span key={i} className="relative">
                {d}
                {d === 5 && (
                  <svg viewBox="0 0 60 60" className="absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] overflow-visible" aria-hidden>
                    <path className="dr-ring stroke-redpen" d="M30 6 C 50 4, 56 26, 50 42 S 14 58, 8 36 S 22 4, 40 10" fill="none" strokeWidth="2.5" strokeDasharray="200" strokeDashoffset="200" strokeLinecap="round" />
                  </svg>
                )}
              </span>
            ))}
          </div>
        </div>
        <div
          ref={veil}
          onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}
          className="absolute inset-0 flex cursor-grab touch-none select-none flex-col items-center justify-center bg-ivory/60 backdrop-blur-md shadow-lift active:cursor-grabbing"
        >
          <span className="font-hand text-4xl text-navy">Drag the paper away</span>
          <span className="mt-2 font-sans text-xs uppercase tracking-[0.3em] text-brown">→ swipe right →</span>
          <button onClick={finish} className="mt-6 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-brown/70 underline">or tap here</button>
        </div>
        <div className="dr-big pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center opacity-0">
          <span className="font-serif text-[9rem] font-light leading-none text-navy sm:text-[12rem]">{EVENT.day}</span>
          <span className="iv-rule my-4 h-px w-24 bg-gold" />
          <span className="font-sans text-lg uppercase tracking-[0.6em] text-graphite">{EVENT.month}</span>
          <span className="mt-2 font-hand text-3xl text-brown">a Monday to remember</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------ MEMORY WALL */
const memories = [
  { t: "First day", line: "Someone knelt down to our height and said, “You’ll be fine.”", img: firstDay, r: "-rotate-3" },
  { t: "First presentation", line: "Our knees were shaking. Your nod from the back steadied them as we showed our first project.", img: presentation, r: "rotate-2" },
  { t: "First “well done”", line: "Two words in the review comments we read a hundred times on the bus home.", img: wellDone, r: "-rotate-1" },
  { t: "First big mistake", line: "You didn’t delete the error. You showed us what it taught.", img: mistake, r: "rotate-3" },
  { t: "First success", line: "Our first website went live — but you’d seen it coming all along.", img: success, r: "-rotate-2" },
];

export function MemoryWall() {
  const root = useRef<HTMLElement>(null);
  const [flipped, setFlipped] = useState<number | null>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".mw-frame").forEach((el, i) => {
        gsap.fromTo(el, { y: 120, opacity: 0, rotate: i % 2 ? 14 : -14 }, { y: 0, opacity: 1, rotate: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } });
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={root} className="bg-paper/50 px-5 py-28">
      <h2 className="text-center font-serif text-4xl font-light uppercase leading-tight text-navy sm:text-6xl">The memories<br />we take with us</h2>
      <p className="mt-3 text-center font-sans text-sm text-brown">Tap a photograph to turn it over.</p>
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3">
        {memories.map((m, i) => (
          <div key={m.t} className={"mw-frame [perspective:1000px] " + (i === 4 ? "col-span-2 mx-auto w-1/2 sm:col-span-1 sm:w-full" : "")}>
            <button onClick={() => setFlipped(flipped === i ? null : i)} className={"relative block w-full transition-transform duration-700 [transform-style:preserve-3d] " + m.r} style={{ transform: flipped === i ? "rotateY(180deg)" : undefined }}>
              <span className="polaroid block [backface-visibility:hidden]">
                <img src={m.img} alt={m.t} width={816} height={816} loading="lazy" className="aspect-square w-full object-cover sepia-[.25] contrast-[.95]" />
                <span className="absolute bottom-3 left-0 right-0 text-center font-hand text-xl text-navy sm:text-2xl">{m.t}</span>
              </span>
              <span className="polaroid absolute inset-0 flex items-center justify-center p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <span className="font-hand text-xl leading-snug text-navy sm:text-2xl">{m.line}</span>
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------ CLIMAX */
export function Climax() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top top", end: "+=320%", scrub: 1, pin: true } });
      tl.fromTo(".cl-1", { opacity: 0, filter: "blur(12px)", y: 20 }, { opacity: 1, filter: "blur(0px)", y: 0 })
        .to({}, { duration: 0.5 })
        .to(".cl-1", { opacity: 0, filter: "blur(8px)", y: -20 })
        .fromTo(".cl-2", { opacity: 0, filter: "blur(12px)", y: 20 }, { opacity: 1, filter: "blur(0px)", y: 0 })
        .to({}, { duration: 0.6 })
        .to(".cl-2", { opacity: 0, filter: "blur(8px)", y: -20 })
        .fromTo(".cl-3", { opacity: 0, letterSpacing: "0.5em" }, { opacity: 1, letterSpacing: "0.08em", duration: 1.2 })
        .fromTo(".cl-4", { opacity: 0, clipPath: "inset(0 50% 0 50%)" }, { opacity: 1, clipPath: "inset(0 0% 0 0%)" })
        .to({}, { duration: 0.6 });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={root} className="relative flex h-[100svh] items-center justify-center bg-ivory px-6 text-center">
      <p className="cl-1 absolute max-w-lg font-serif text-3xl font-light italic leading-snug text-graphite opacity-0 sm:text-5xl">“I don’t remember every lesson you taught me.”</p>
      <p className="cl-2 absolute max-w-xl font-serif text-3xl font-light italic leading-snug text-navy opacity-0 sm:text-5xl">“But I remember how you made me feel capable of learning.”</p>
      <div className="absolute">
        <h2 className="cl-3 font-serif text-5xl font-light uppercase text-navy opacity-0 sm:text-8xl">Thank you,<br />MISS RUHAMA.</h2>
        <p className="cl-4 mt-8 font-sans text-xs uppercase tracking-[0.5em] text-gold opacity-0 sm:text-sm">Happy Teachers’ Day</p>
      </div>
    </section>
  );
}

/* ------------------------------------------------ FINAL */
export function Finale() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".fn-line", { opacity: 0, x: (i) => (i % 2 ? 40 : -40) }, { opacity: 1, x: 0, stagger: 0.25, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: root.current, start: "top 60%" } });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={root} className="bg-navy px-6 py-32 text-center text-ivory">
      <div className="font-serif text-3xl font-light uppercase leading-[1.25] tracking-wide sm:text-5xl">
        <p className="fn-line">For every lesson.</p>
        <p className="fn-line">For every encouragement.</p>
        <p className="fn-line">For every second chance.</p>
        <p className="fn-line mt-6 italic text-gold">Thank you. MISS RUHAMA </p>
      </div>
      <div className="mx-auto my-14 h-px w-20 bg-gold/60" />
      <p className="font-sans text-xs uppercase tracking-[0.5em] text-paper/80">Teachers’ Day 2026</p>
      <p className="mt-4 font-hand text-3xl text-paper">Because some lessons stay with us forever.</p>
      <div className="mt-16 flex justify-center">
        <EasterEgg label="Handwritten star" trigger={<span className="font-hand text-3xl text-gold">☆</span>} reveal="Someone believed in you." />
      </div>
    </section>
  );
}
