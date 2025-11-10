import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ElectricMarquee() {
  const marqueeRef = useRef(null);
  const textsRef = useRef([]);
  textsRef.current = [];

  // function to add multiple text spans to ref array
  const addToRefs = (el) => {
    if (el && !textsRef.current.includes(el)) {
      textsRef.current.push(el);
    }
  };

  useEffect(() => {
    const texts = textsRef.current;
    const marquee = marqueeRef.current;

    // Infinite horizontal scroll
    const totalWidth = marquee.scrollWidth / 2;
    gsap.to(marquee, {
      x: -totalWidth,
      duration: 10,
      ease: "none",
      repeat: -1,
    });

    // Electric flicker effect on each text
    texts.forEach((t) => {
      const flicker = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
      flicker
        .to(t, {
          opacity: 0.8,
          textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff",
          duration: 0.05,
        })
        .to(t, {
          opacity: 1,
          textShadow: "0 0 25px #00ffff, 0 0 45px #00ffff",
          duration: 0.1,
        })
        .to(t, {
          opacity: 0.9,
          textShadow: "0 0 15px #00ffff, 0 0 25px #00ffff",
          duration: 0.05,
        });
    });

    return () => gsap.killTweensOf([marquee, texts]);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black py-2 md:py-3 border-t border-b border-cyan-500">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap text-cyan-300"
        style={{ willChange: "transform" }}
      >
        {/* Repeat text for continuous loop */}
        {[...Array(8)].map((_, i) => (
          <h1
            key={i}
            ref={addToRefs}
            className="mx-6 text-lg md:text-2xl font-extrabold uppercase tracking-widest"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              textShadow:
                "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff",
            }}
          >
           ⚡ Live At Lekki • Jan 03 • Limited Ticket Available ⚡
          </h1>
        ))}
      </div>
    </div>
  );
}
