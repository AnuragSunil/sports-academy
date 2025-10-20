"use client";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function LocationPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f5e8] text-black">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')] pointer-events-none" />

      {/* Dim radial light behind map */}
      <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-gray-500/10 via-transparent to-transparent blur-[180px]" />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 py-20 md:py-28 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-lime-500 mb-6 drop-shadow-md leading-tight"
        >
          Our Location
        </motion.h1>

        {/* Subheading */}
        <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 md:mb-12 px-2"
>
  We&apos;re based in the vibrant heart of Bengaluru — easily accessible and equipped with world-class sports infrastructure.
</motion.p>


        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-700 text-base sm:text-lg mb-8"
        >
          <HiOutlineLocationMarker className="text-lime-500 text-2xl" />
          <span className="text-center sm:text-left">
            123 Sports Street, Indiranagar, Bengaluru
          </span>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="w-full max-w-[90vw] sm:max-w-2xl md:max-w-4xl rounded-2xl overflow-hidden border border-gray-300 shadow-[0_0_50px_rgba(0,255,0,0.05)]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.885571230772!2d77.64115431536478!3d12.97159859085482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167af9d0c1b1%3A0x7f02f8f0b3b9a999!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1705678901234!5m2!1sen!2sin"
            width="100%"
            height="300"
            loading="lazy"
            className="w-full h-[300px] sm:h-[400px] md:h-[450px]"
          ></iframe>
        </motion.div>

        {/* Tap to open (mobile) */}
        <motion.a
          href="https://goo.gl/maps/GXqLd8rQZh4V6Lht7"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block bg-lime-500 text-black px-8 py-3 rounded-full text-sm sm:text-base font-extrabold shadow-lg hover:bg-lime-400 transition-all md:hidden"
        >
          Open in Google Maps
        </motion.a>
      </div>
    </section>
  );
}
