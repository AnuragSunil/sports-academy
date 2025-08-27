"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CTAHeroScroll() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const headingY = useTransform(scrollYProgress, [0, 0.8], [0, -80]);
  const width = useTransform(scrollYProgress, [0, 0.8], ["100vw", "75vw"]);
  const height = useTransform(scrollYProgress, [0, 0.8], ["70vh", "70vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.8], ["0rem", "1.5rem"]);

  return (
    <div ref={ref} className="relative h-[160vh] z-0" style={{ backgroundColor: "#f5f5e8" }}>
      <div className="sticky top-15 h-screen flex flex-col items-center justify-start pt-20 pb-36">
        {/* Image container */}
        <motion.div
          style={{ width, height, borderRadius }}
          className="relative flex items-center justify-center max-w-full z-0 overflow-hidden"
        >
          <motion.img
            src="/cta-image.jpg"
            alt="CTA Image"
            className="w-full h-full object-cover max-w-full"
            style={{ borderRadius }}
          />
        </motion.div>

        {/* Heading ABOVE image */}
        <motion.div
          style={{ y: headingY }}
          className="absolute top-24 w-full flex flex-col items-center text-center z-[9999] pointer-events-none"
        >
          <div className="font-extrabold mb-4 text-lime-500 uppercase leading-[1.1] text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Train. Compete.
          </div>
          <div className="font-extrabold text-white uppercase leading-[1.1] text-4xl sm:text-5xl md:text-6xl tracking-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
            Conquer.
          </div>
        </motion.div>

        {/* Button BELOW image */}
        <motion.button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          whileHover={{ backgroundColor: "#000", color: "#fff" }}
          whileTap={{ backgroundColor: "#000", color: "#fff", scale: 0.95 }}
          transition={{ duration: 0 }} // instant color change
          className="mt-4 px-14 py-3 rounded-full border-3 border-black bg-transparent 
                     text-black font-semibold uppercase 
                     text-[clamp(1.1rem,2.5vw,1.5rem)] tracking-wide
                     transition-colors duration-150"
        >
          Register Now
        </motion.button>
      </div>
    </div>
  );
}
