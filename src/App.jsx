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

      // Page load animation
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

      // Scroll animation
      
gsap.to(objectRef.current, {
  x: "10vw",
  y: "20vh",
  rotation: 720,
  scale: 1.15,

  scrollTrigger: {
    trigger: objectRef.current,
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
  },
}); 
      // Fade scroll text
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
      className="min-h-[180vh] w-full overflow-hidden bg-[#f4f1ea] px-6 py-8 md:px-10"
    >

      {/* Top bar */}
      <div className="flex w-full justify-between items-start">
        <p className="text-xs md:text-sm tracking-[0.3em]">
          TZFIZZ
        </p>

        <p className="text-xs md:text-sm tracking-widest">
          2026
        </p>
      </div>

      {/* Hero title */}
      <div className="mt-28 md:mt-32 w-full text-center overflow-hidden">
        <h1
          ref={titleRef}
          className="whitespace-nowrap text-[13vw] md:text-[12vw] leading-[0.85] font-bold tracking-[0.04em]"
        >
          WELCOME
        </h1>
      </div>

      {/* Animated object */}
      <div className="relative h-[300px] w-full flex items-center justify-center">
        <div
          ref={objectRef}
          style={{
            width: "192px",
            height: "96px",
            minWidth: "192px",
            maxWidth: "192px",
            minHeight: "96px",
            maxHeight: "96px",
            backgroundColor: "#000000",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              color: "#ffffff",
              display: "block",
              whiteSpace: "nowrap",
              fontSize: "14px",
              letterSpacing: "0.25em",
            }}
          >
            TZFIZZ
          </span>
        </div>
      </div>

      {/* Statistics */}
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">

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

      {/* Bottom text */}
      <div
        ref={scrollTextRef}
        className="mt-40 flex w-full justify-center"
      >
        <p className="text-xs tracking-[0.3em] uppercase">
          Keep Scrolling
        </p>
      </div>

    </section>
  );
}

export default Hero;