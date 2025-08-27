"use client";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6 relative z-50 w-full">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16">

          {/* Left Section: Logo + Catchphrase */}
          <div className="flex flex-col items-start gap-4 md:max-w-sm">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
              Dynamic<br />Sports Academy
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Training future champions. Excellence in every step, on and off the court.
            </p>
          </div>

          {/* Right Section: Contact + Socials aligned right */}
          <div className="flex flex-col items-start md:items-end gap-6 md:gap-8 w-full md:w-auto text-left md:text-right">
            {/* Contact Info */}
            <div className="flex flex-col text-gray-400 text-sm md:text-base gap-2">
              <div className="flex items-center gap-2 justify-start md:justify-end">
                <HiOutlineLocationMarker className="w-5 h-5" />
                <span>123 Sports Street, Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-2 justify-start md:justify-end">
                <HiOutlineMail className="w-5 h-5" />
                <span>info@sportsacademy.com</span>
              </div>
              <div className="flex items-center gap-2 justify-start md:justify-end">
                <HiOutlinePhone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </div>
            </div>

            {/* Social Media below contact info */}
            <div className="flex space-x-6 mt-4 justify-start md:justify-end">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lime-500 transition"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lime-500 transition"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lime-500 transition"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm md:text-base w-full max-w-[1200px] mx-auto text-gray-500">
        © {new Date().getFullYear()} Sports Academy. All rights reserved.
      </div>
    </footer>
  );
}
