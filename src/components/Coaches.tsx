"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Coach {
  name: string;
  designation: string;
  description: string;
  image: string;
}

const coaches: Coach[] = [
  { name: "Alice", designation: "Tennis Coach", description: "Expert in advanced techniques and strategy, helping players reach their full potential on court.", image: "/coaches/alice.jpg" },
  { name: "Bob", designation: "Fitness Coach", description: "Specialist in strength and agility training to maximize athletic performance and endurance.", image: "/coaches/bob.jpg" },
  { name: "Charlie", designation: "Yoga Coach", description: "Focus on flexibility, balance, and breathing exercises to improve overall athletic well-being.", image: "/coaches/charlie.jpg" },
  { name: "Diana", designation: "Nutrition Coach", description: "Guides athletes to optimize diet and recovery for peak performance during training and events.", image: "/coaches/diana.jpg" },
];
// Child component for animation-safe hooks
function CoachCard({ coach, delay }: { coach: Coach; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className="flex flex-col items-start"
      >
      <motion.div style={{ scale }} className="relative w-full h-[380px] md:h-[480px] mb-6">
        <Image
          src={coach.image}
          alt={coach.name}
          fill
          className="object-cover rounded-2xl shadow-xl"
          priority
        />
      </motion.div>

      <div className="pl-2 md:pl-3">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold uppercase text-black tracking-tight">{coach.name}</motion.h3>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="uppercase font-semibold text-lime-500 tracking-wide text-lg md:text-xl mt-1">{coach.designation}</motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-xl md:text-2xl leading-relaxed font-normal text-gray-700 mt-4">{coach.description}</motion.p>
      </div>
    </motion.div>
  );
}

export default function MeetTheCoaches() {
  return (
    <div id="coaches" className="relative bg-[#f5f5e8] -mt-40 md:-mt-56 z-20 py-10">
      <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl font-thin tracking-tight leading-tight break-words px-4 text-lime-500 font-sans text-left md:text-center mb-16">
        <span className="text-black">MEET THE</span><br className="block md:hidden"/><span className="text-lime-500">COACHES</span>
      </motion.h2>

      <div className="max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {coaches.map((coach, i) => <CoachCard key={coach.name} coach={coach} delay={i * 0.1} />)}
      </div>
    </div>
  );
}
