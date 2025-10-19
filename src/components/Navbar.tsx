"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [clickedLink, setClickedLink] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // Always show navbar near top
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLinks = [
    { label: "About Us", href: "/about" },
    { label: "Location", href: "/location" },
  ];
  const rightLinks = [
    { label: "Social", href: "/social" },
    { label: "Contact", href: "/contact" },
  ];

  const handleMobileClick = (label: string) => {
    setClickedLink(label);
    setTimeout(() => {
      setClickedLink(null);
      setMobileOpen(false);
    }, 300);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 shadow-md"
      initial={{ y: -120 }}
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.3 }}
    >
      {/* Desktop */}
      <div className="hidden md:!flex w-full mx-auto px-6 py-4 items-center font-sans flex-nowrap max-w-[clamp(400px,60vw,1200px)] justify-between">
        {/* Left links */}
        <div className="flex flex-shrink space-x-8 text-eggshell text-sm md:text-base font-thin whitespace-nowrap">
          {leftLinks.map((link) => (
            <motion.div
              key={link.label}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredItem(link.label)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100, damping: 14 }}
            >
              <Link href={link.href} className="relative z-10">
                {link.label}
              </Link>
              <motion.div
                className="absolute top-1/2 left-1/2 h-[2px] bg-lime-400"
                style={{ translateX: "-50%", translateY: "-50%" }}
                animate={{ width: hoveredItem === link.label ? "100%" : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="flex-1 min-w-[150px] text-center text-eggshell font-thin text-base md:text-lg whitespace-normal leading-snug px-4 cursor-pointer"
        >
          DYNAMIC SPORTS<br />
          ACADEMY
        </Link>

        {/* Right links */}
        <div className="flex flex-shrink space-x-8 text-eggshell text-sm md:text-base font-thin whitespace-nowrap">
          {rightLinks.map((link) => (
            <motion.div
              key={link.label}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredItem(link.label)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100, damping: 14 }}
            >
              <Link href={link.href} className="relative z-10">
                {link.label}
              </Link>
              <motion.div
                className="absolute top-1/2 left-1/2 h-[2px] bg-lime-400"
                style={{ translateX: "-50%", translateY: "-50%" }}
                animate={{
                  width:
                    hoveredItem === link.label || clickedLink === link.label
                      ? "100%"
                      : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between px-4 py-6 w-full">
        <Link href="/" className="text-eggshell text-lg font-thin leading-tight cursor-pointer">
          DYNAMIC SPORTS ACADEMY
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-3xl text-eggshell"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col space-y-4 bg-black bg-opacity-95 p-4 md:hidden text-eggshell"
          >
            {[...leftLinks, ...rightLinks].map((link) => (
              <motion.div
                key={link.label}
                className="relative cursor-pointer py-2 w-max"
                onClick={() => handleMobileClick(link.label)}
              >
                <Link href={link.href}>
                  <motion.span
                    className="relative z-10 inline-block font-semibold uppercase"
                    animate={{ color: clickedLink === link.label ? "#84cc16" : "#fff" }}
                    transition={{ duration: 0.15 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
