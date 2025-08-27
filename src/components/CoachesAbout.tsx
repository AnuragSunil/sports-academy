"use client";
import Image from "next/image";

interface Coach {
  name: string;
  designation: string;
  description: string;
  image: string;
}

const coaches: Coach[] = [
  { name: "Alice", designation: "Tennis Coach", description: "Expert in advanced techniques and strategy, helping players reach their full potential on court.", image: "/Alice.jpg" },
  { name: "Bob", designation: "Fitness Coach", description: "Specialist in strength and agility training to maximize athletic performance and endurance.", image: "/Bob.jpg" },
  { name: "Charlie", designation: "Yoga Coach", description: "Focus on flexibility, balance, and breathing exercises to improve overall athletic well-being.", image: "/Charlie.jpg" },
  { name: "Diana", designation: "Nutrition Coach", description: "Guides athletes to optimize diet and recovery for peak performance during training and events.", image: "/Diana.jpg" },
];

export default function MeetOurStaff() {
  return (
    <section className="relative bg-black py-16 px-6 lg:px-20 text-[#f5f5e8]">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 font-[var(--font-sans)]">Meet Our Staff</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {coaches.map((coach, index) => (
          <div key={coach.name} className={`flex items-start gap-6 ${index % 2 !== 0 ? "md:flex-row-reverse text-right" : ""}`}>
            <div className="relative w-24 h-24 md:w-28 md:h-28">
              <Image src={coach.image} alt={coach.name} fill className="object-cover rounded-full shadow-lg" priority />
            </div>
            <div className={`${index % 2 !== 0 ? "md:text-right" : ""}`}>
              <h3 className="text-2xl font-bold text-[#f5f5e8]">{coach.name}</h3>
              <p className="text-lime-400 font-semibold text-lg mb-2">{coach.designation}</p>
              <p className="text-[#f5f5e8]/80 text-base leading-relaxed">{coach.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
