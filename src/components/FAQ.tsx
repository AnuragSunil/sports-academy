"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What are your timings?",
    answer: "We are open from 6 AM to 9 PM every day. Contact us or visit the academy for details.",
  },
  {
    question: "How can I register?",
    answer: "You can register online using the Register Now button or visit us in person.",
  },
  {
    question: "Is there parking available?",
    answer: "Yes, ample parking is available for all visitors.",
  },
  {
    question: "Do you offer trial sessions?",
    answer: "Absolutely! Contact us to schedule a trial session with a coach.",
  },
  {
    question: "What sports do you teach?",
    answer: "We offer coaching in Tennis, Football, Swimming, Basketball, and more.",
  },
  {
    question: "Are there age restrictions?",
    answer: "We welcome all ages. Contact us for age-specific programs.",
  },
  {
    question: "Is equipment provided?",
    answer: "Basic equipment is provided. Specialized gear should be brought by participants.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-black py-16 md:py-24">
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-12">
        
        {/* Grid A: Heading + Description */}
        <div className="flex flex-col justify-center text-white space-y-6 font-sans">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-thin tracking-tight leading-tight break-words text-lime-400"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-base leading-relaxed text-gray-300"
          >
            If you have more doubts, contact us or visit the academy. Below are answers to common questions to help you get started.
          </motion.p>
        </div>

        {/* Grid B: Questions */}
        <div className="flex flex-col divide-y divide-gray-700 font-sans text-base">
          {faqs.map((faq, index) => (
       <motion.div
  key={index}
  layout
  initial={{ opacity: 0, y: 40 }} // bigger vertical shift
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }} // slightly longer & more noticeable stagger
  className="py-4 cursor-pointer"
  onClick={() => toggle(index)}
>
  {/* Question */}
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.2 }}
    className="flex justify-between items-center text-gray-200 font-semibold"
  >
    <span>{faq.question}</span>
    <span>{openIndex === index ? "-" : "+"}</span>
  </motion.div>

  {/* Answer */}
  <AnimatePresence>
    {openIndex === index && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-2 text-gray-400 text-left"
      >
        {faq.answer}
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
