import MissionVision from "@/components/MissionVision";
import HeroAbout from "@/components/HeroAbout";
import MeetOurStaff from "@/components/CoachesAbout";
export default function About() {
  return (
    <main style={{ backgroundColor: "#F9F6EE",  }}>
      <HeroAbout/>
      <MissionVision />
      <MeetOurStaff/>

    </main>
  );
}
