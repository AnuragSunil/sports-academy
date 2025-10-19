"use client";
import { motion } from "framer-motion";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function SocialPage() {
  return (
    <section className="bg-[#f5f5e8] text-black min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-16 py-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-lime-500 mb-6 sm:mb-10 text-center leading-tight drop-shadow-md"
      >
        Connect With Us
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-700 text-sm sm:text-base md:text-lg text-center max-w-xl sm:max-w-2xl mb-8 sm:mb-12 px-2"
      >
        Stay connected with Dynamic Sports Academy through our social media.
        Follow us for updates, events, and training highlights.
      </motion.p>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-4xl sm:text-5xl md:text-6xl">
        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#84cc16" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="hover:shadow-lg hover:shadow-lime-500/50 rounded-full p-2"
        >
          <FaTwitter />
        </motion.a>

        <motion.a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#84cc16" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="hover:shadow-lg hover:shadow-lime-500/50 rounded-full p-2"
        >
          <FaYoutube />
        </motion.a>

        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#84cc16" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="hover:shadow-lg hover:shadow-lime-500/50 rounded-full p-2"
        >
          <FaInstagram />
        </motion.a>
      </div>
    </section>
  );
}
