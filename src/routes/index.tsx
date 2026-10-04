import { createFileRoute } from "@tanstack/react-router";
import { DustLayer, PencilTrail, SmoothScroll } from "@/components/td/Ambient";
import { BeforeWeKnew, Correction, Hero, Notebook, ThingsYouTaught } from "@/components/td/Story";
import { Climax, DateReveal, Finale, Invitation, Letter, MemoryWall, Register } from "@/components/td/Classroom";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Before We Knew How To… — Teachers' Day 2026 Invitation" },
      { name: "description", content: "For every lesson that never made it into a textbook. You're invited to our Teachers' Day celebration." },
      { property: "og:title", content: "Before We Knew How To… — Teachers' Day 2026" },
      { property: "og:description", content: "For every lesson that never made it into a textbook. You're invited." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="grain relative bg-background text-foreground">
      <SmoothScroll />
      <DustLayer />
      <PencilTrail />
      <Hero />
      <BeforeWeKnew />
      <Notebook />
      <ThingsYouTaught />
      <Correction />
      <Register />
      <Letter />
      <Invitation />
      <DateReveal />
      <MemoryWall />
      <Climax />
      <Finale />
    </main>
  );
}
