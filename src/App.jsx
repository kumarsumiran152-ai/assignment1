import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef([]);
  const objectRef = useRef(null);
  const scrollTextRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // -----------------------------
      // 1. INITIAL PAGE LOAD ANIMATION
      // -----------------------------

      const timeline = gsap.timeline();

      timeline.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      timeline.from(
        statsRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4"
      );


      // -----------------------------
      // 2. SCROLL ANIMATION
      // -----------------------------

      gsap.to(objectRef.current, {
        x: 220,
        y: 150,
        rotation: 360,
        scale: 1.15,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });


      // -----------------------------
      // 3. KEEP SCROLLING TEXT
      // -----------------------------

      gsap.to(scrollTextRef.current, {
        opacity: 0.3,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "30% top",
          end: "60% top",
          scrub: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[180vh] bg-[#f4f1ea] px-6 py-8 md:px-10"
    >

      {/* TOP BAR */}
      <div className="flex justify-between items-start">
        <p className="text-xs md:text-sm tracking-[0.3em]">
          TZFIZZ
        </p>

        <p className="text-xs md:text-sm tracking-widest">
          2026
        </p>
      </div>


      {/* HERO TITLE */}
      <div className="mt-28 md:mt-32 overflow-hidden">
        <h1
          ref={titleRef}
          className="text-[16vw] md:text-[12vw] leading-[0.85] font-bold tracking-[0.08em]"
        >
          WELCOME
        </h1>
      </div>


      {/* ANIMATED OBJECT */}
      <div className="relative h-[45vh] flex items-center justify-center">

        <div
          ref={objectRef}
          className="w-48 h-24 md:w-56 md:h-28 rounded-[50%] bg-black flex items-center justify-center"
        >
          <span className="text-white text-sm md:text-lg tracking-[0.25em]">
            TZFIZZ
          </span>
        </div>

      </div>


      {/* STATISTICS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-4xl">

        <div ref={(el) => (statsRef.current[0] = el)}>
          <h2 className="text-4xl md:text-5xl font-bold">
            92%
          </h2>

          <p className="mt-2 text-xs md:text-sm uppercase tracking-widest">
            Customer Impact
          </p>
        </div>


        <div ref={(el) => (statsRef.current[1] = el)}>
          <h2 className="text-4xl md:text-5xl font-bold">
            48K+
          </h2>

          <p className="mt-2 text-xs md:text-sm uppercase tracking-widest">
            Projects
          </p>
        </div>


        <div ref={(el) => (statsRef.current[2] = el)}>
          <h2 className="text-4xl md:text-5xl font-bold">
            4.9/5
          </h2>

          <p className="mt-2 text-xs md:text-sm uppercase tracking-widest">
            Satisfaction
          </p>
        </div>

      </div>


      {/* BOTTOM TEXT */}
      <div
        ref={scrollTextRef}
        className="mt-40 flex justify-center"
      >
        <p className="text-xs tracking-[0.3em] uppercase">
          Keep Scrolling
        </p>
      </div>

    </section>
  );
}

export default Hero;