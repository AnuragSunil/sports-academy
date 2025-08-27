// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Oswald } from "next/font/google";

import Navbar from "@/components/Navbar";       // ✅ navbar at top
import Footer from "@/components/Footer";       // ✅ footer at bottom
import CTASection from "@/components/CTA";      // ✅ CTA above footer

// Oswald font
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sports Academy",
  description: "Sports Academy Website",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"suppressHydrationWarning className={`${oswald.variable}` }>
      <body className="font-sans bg-eggshell">
        {/* Navbar always at top */}
        <Navbar />

        {/* Page content */}
        <main className=""> 
          {children}
        </main>

        {/* CTA always above footer */}
        <CTASection />

        {/* Footer always at bottom */}
        <Footer />
      </body>
    </html>
  );
}
