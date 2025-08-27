import Hero from "../components/Hero";

import MeetTheCoaches from "@/components/Coaches";
import Infrastructure from "@/components/Infrastructure";
import FAQSection from "@/components/FAQ";

export default function Home() {
  return (
    <main suppressHydrationWarning>

      <Hero/>
      <MeetTheCoaches/>
      <Infrastructure/>
      <FAQSection/>
      
    </main>
  );
}
