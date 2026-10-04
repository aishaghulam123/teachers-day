import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register unconditionally (safe on server) so production bundles never drop it.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
