"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function Infrastructure() {
  const facilities = [
    { name: "Basketball Court", image: "/basketball.jpg" },
    { name: "Swimming Pool", image: "/swimming.jpg" },
    { name: "Football Ground", image: "/football.jpg" },
    { name: "Gymnasium", image: "/gym.jpg" },
  ];

  return (
    <section id="infrastructure" className="relative min-h-[80vh] flex items-center py-16 md:py-24">
      <div className="absolute inset-0">
        <Image src="/bg.jpg" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col justify-center text-white space-y-6 h-full max-w-full">
            <h2 className="text-5xl md:text-6xl font-thin tracking-tight leading-tight text-lime-400 break-words max-w-full">FACILITIES</h2>
            <p className="text-xl md:text-2xl leading-relaxed">
              Our academy provides world-class facilities designed to bring out the best in every athlete. From modern courts to a fully-equipped gym, we’ve got everything to fuel your journey.
            </p>
            <Link href="/contact" passHref>
    <motion.button
      whileHover={{ backgroundColor: "#84cc16", color: "#000" }}
      whileTap={{ backgroundColor: "#84cc16", color: "#000" }}
      transition={{ duration: 0 }}
      className="px-14 py-3 rounded-full border-3 border-lime-400 bg-transparent text-lime-400 font-semibold uppercase text-[clamp(1.1rem,2.5vw,1.5rem)] tracking-wide transition-colors duration-150"
    >
      Register Now
    </motion.button>
  </Link>
          </motion.div>

          {/* Facilities */}
          <div className="flex flex-col">
            {/* Desktop */}
            <div className="hidden lg:!grid grid-cols-2 gap-8">
              {facilities.map((facility, i) => (
                <motion.div key={facility.name} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: i * 0.1 }} className="flex flex-col items-center w-full">
                  <div className="relative w-full h-[200px]">
                    <Image src={facility.image} alt={facility.name} fill className="rounded-lg object-cover" priority />
                  </div>
                  <span className="mt-3 text-lg md:text-xl font-semibold text-white uppercase text-center">{facility.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Mobile */}
            <div className="flex lg:hidden space-x-6 py-6 overflow-x-auto scrollbar-hide px-2">
              {facilities.map((facility, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: i * 0.1 }} className="flex-shrink-0 w-56 flex flex-col items-center">
                  <div className="relative w-full h-48">
                    <Image src={facility.image} alt={facility.name} fill className="rounded-lg object-cover" priority />
                  </div>
                  <p className="mt-4 text-xl md:text-2xl font-semibold uppercase tracking-wide text-center">{facility.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
