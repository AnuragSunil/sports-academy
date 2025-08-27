"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Top/bottom text scroll — same movement but stretched
  const topTextY = useTransform(scrollYProgress, [0, 1.5], [0, -500]);
  const bottomTextY = useTransform(scrollYProgress, [0, 1.5], [0, 200]);

  // Image zoom — longer zoom effect
  const width = useTransform(scrollYProgress, [0, 3], ["75vw", "200vw"]);
  const height = useTransform(scrollYProgress, [0, 3], ["70vh", "200vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 3], ["2rem", "0rem"]);

  return (
    <div
      ref={ref}
      className="relative h-[300vh] z-0"
      style={{ backgroundColor: "#f5f5e8", color: "#111" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Image + inner contents */}
        <motion.div
          style={{ width, height, borderRadius }}
          className="fixed flex flex-col items-center justify-center max-w-screen z-0"
        >
          <motion.img
            src="/tennis-hero.jpg"
            alt="Hero"
            className="w-full h-full object-cover max-w-screen"
            style={{ transformOrigin: "center center", borderRadius: "2rem" }}
          />

          {/* Top Texts */}
<motion.div
  style={{ y: topTextY }}
  className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center"
>
  <div className="w-[60vw] max-w-[90%] min-w-[16rem]">
    <div className="text-lime-500 font-extrabold drop-shadow-lg mb-1 text-4xl sm:text-5xl md:text-6xl leading-tight">
      BEYOND LIMITS,
    </div>
    <div className="text-white font-extrabold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-4xl sm:text-5xl md:text-6xl leading-tight">
      BEYOND BOUNDARIES
    </div>
  </div>
</motion.div>



          {/* Center content (Learn More button) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
            <div
              className="text-white font-thin"
              style={{ transform: "scaleX(0.85)", fontSize: "clamp(1.2rem, 4vw, 2rem)" }}
            >
              LEARN MORE
            </div>

            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById("coaches")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center justify-center rounded-full border-2 border-white bg-transparent px-6 py-3 shadow-lg"
            >
              <span className="text-4xl text-white">↓</span>
            </motion.button>
          </div>

{/* Bottom Text */}
<motion.div
  style={{ y: bottomTextY }}
  className="absolute bottom-12 w-full text-center font-thin"
>
  <span
    className="block mx-auto max-w-[90%] leading-tight text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
    style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
  >
    TRAIN WITH THE BEST
  </span>
</motion.div>

        </motion.div>
      </div>
    </div>
  );
}
