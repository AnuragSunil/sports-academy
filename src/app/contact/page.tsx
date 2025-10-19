"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for contacting us! (Form backend not yet connected)");
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 md:py-28 pt-[6rem] bg-[#f5f5e8]">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-lime-400 mb-10 text-center"
      >
        Contact / Register
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl text-center mb-12"
      >
        Have questions or want to join our academy? Get in touch with us — we’d love to hear from you!
      </motion.p>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12"
      >
        {/* Left: Contact Details */}
        <div className="flex-1 flex flex-col gap-6 text-gray-700 text-base sm:text-lg">
          <div className="flex items-center gap-3">
            <HiOutlineMail className="text-lime-500 text-2xl" />
            <p>info@sportsacademy.com</p>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlinePhone className="text-lime-500 text-2xl" />
            <p>+91 98765 43210</p>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineLocationMarker className="text-lime-500 text-2xl" />
            <p>123 Sports Street, Bengaluru, India</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col gap-4 w-full md:w-auto"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 bg-white border border-gray-300 rounded-md text-black placeholder-lime-500 focus:border-lime-500 focus:outline-none w-full"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 bg-white border border-gray-300 rounded-md text-black placeholder-lime-500 focus:border-lime-500 focus:outline-none w-full"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="p-3 bg-white border border-gray-300 rounded-md text-black placeholder-lime-500 focus:border-lime-500 focus:outline-none resize-none w-full"
          ></textarea>

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 200, damping: 12 }}
  type="submit"
  className="bg-lime-500 text-white font-semibold py-3 rounded-md w-full 
             md:bg-white md:text-lime-500 md:hover:bg-lime-500 md:hover:text-white"
>
  Send Message
</motion.button>


        </form>
      </motion.div>
    </section>
  );
}
