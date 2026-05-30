"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    year: "Present",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Currently Pursuing"
  },
  {
    year: "2024 - 2026",
    degree: "Mechanic Motor Vehicle (ITI)",
    institution: "SIR C. V. Raman ITI, Delhi"
  },
  {
    year: "2024",
    degree: "Senior Secondary Education (Class XII)",
    institution: "CBSE Board of Education"
  },
  {
    year: "2022",
    degree: "Secondary Education (Class X)",
    institution: "CBSE Board of Education"
  }
];

export default function Education() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" ref={containerRef} className="py-24 md:py-32 relative z-10 px-4 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 flex flex-col"
          >
            <h2 className="text-xs tracking-[0.3em] uppercase text-secondary mb-6">05 — Education</h2>
            <div className="w-8 h-[1px] bg-secondary mb-12" />
          </motion.div>

          <div className="md:col-span-8 relative">
            {/* Timeline Line */}
            <div className="absolute left-[7.5px] md:left-[15px] top-0 bottom-0 w-[1px] bg-card-border" />
            <motion.div 
              className="absolute left-[7.5px] md:left-[15px] top-0 w-[1px] bg-accent shadow-[0_0_10px_rgba(59,130,246,1)] origin-top" 
              style={{ height: lineHeight }} 
            />

            <div className="flex flex-col relative">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative pl-8 md:pl-16 py-8 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-12 transition-all duration-500"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[4px] md:left-[11px] top-[40px] md:top-[44px] w-2 h-2 rounded-full bg-background border border-accent group-hover:bg-accent transition-colors duration-500 shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_10px_rgba(59,130,246,1)] z-10" />

                  <div className="md:w-1/3 shrink-0">
                    <span className="text-xs tracking-[0.2em] uppercase block mt-1 text-secondary">{edu.year}</span>
                  </div>
                  
                  <div className="md:w-2/3 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">{edu.degree}</h3>
                    <h4 className="text-sm uppercase tracking-widest text-secondary">{edu.institution}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
