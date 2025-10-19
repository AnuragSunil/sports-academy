"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export default function HeroAbout() {
  return (
    <section className="bg-eggshell pt-28 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-20 min-h-[60vh]">
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
        
        {/* Left: Heading + Description */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Building Champions, Inspiring Futures
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
  Join us on a journey where dedication meets opportunity. 
  At our academy, we don’t just train athletes to play the game — 
  we mentor them to become leaders and role models. 
  With personalized coaching, world-class facilities, and a supportive community, 
  we empower every athlete to push limits and achieve greatness.
</p>

        </div>

        {/* Right: Hero Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end order-2 mt-6 lg:mt-0">
          <Image
            src="/about/hero-image.jpg"
            alt="Hero"
            width={600}
            height={500}
            className="object-contain rounded-2xl shadow-lg"
          />
        </div>

        {/* Button: below image on mobile */}
        <div className="lg:col-span-12 flex justify-center lg:justify-start mt-6 order-3">
          <Link href="/contact" passHref>
    <motion.button
      whileHover={{ backgroundColor: "#000", color: "#fff" }}
      whileTap={{ backgroundColor: "#000", color: "#fff", scale: 0.95 }}
      transition={{ duration: 0 }}
      className="px-14 py-3 rounded-full border-3 border-black bg-transparent 
                 text-black font-semibold uppercase 
                 text-[clamp(1.1rem,2.5vw,1.5rem)] tracking-wide
                 transition-colors duration-150"
    >
      Register Now
    </motion.button>
  </Link>
        </div>

      </div>
    </section>
  );
}
