import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CoreExpertise from "@/components/sections/CoreExpertise";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import ToolsAndTech from "@/components/sections/ToolsAndTech";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative z-10">
      <Hero />
      <About />
      <CoreExpertise />
      <Projects />
      <Experience />
      <Education />
      <ToolsAndTech />
      <Certifications />
      <Contact />
    </div>
  );
}
