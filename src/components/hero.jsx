import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const sectionRef = useRef(null);
  const objectRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.to(objectRef.current, {
  y: 220,
  x: 180,
  rotation: 120,
  scale: 1.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-8 py-10"
    >

      <div className="flex justify-between items-start">
        <p className="text-sm tracking-[0.3em] uppercase">
          TZFIZZ
        </p>

        <p className="text-sm tracking-widest">
          2026
        </p>
      </div>

      <div className="mt-32">
        <h1 className="text-[12vw] leading-none font-bold tracking-[0.15em]">
          WELCOME
        </h1>
      </div>

      <div className="relative h-[45vh] flex items-center justify-center">

        <div
          ref={objectRef}
          className="w-48 h-24 rounded-[50%] bg-black flex items-center justify-center"
        >
          <span className="text-white text-xl tracking-widest">
            TZFIZZ
          </span>
        </div>

      </div>

      <div className="grid grid-cols-3 gap-8 max-w-3xl">

        <div>
          <h2 className="text-4xl font-bold">92%</h2>
          <p className="mt-2 text-sm uppercase tracking-widest">
            Customer Impact
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">48K+</h2>
          <p className="mt-2 text-sm uppercase tracking-widest">
            Projects
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">4.9/5</h2>
          <p className="mt-2 text-sm uppercase tracking-widest">
            Satisfaction
          </p>
        </div>

      </div>

    </section>
  );
}

export default Hero;