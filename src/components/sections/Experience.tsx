"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const experience = [
  {
    year: "May 2026 - Jun 2026",
    role: "EV Infrastructure Trainee",
    company: "EcoConnect Services + Mercedes-Benz R&D India + TERI Institute",
    description: "Worked hands-on with EV charging systems and infrastructure. Performed charger assembly, disassembly, inspection, and troubleshooting. Learned charger-to-vehicle and charger-to-grid communication systems. Studied EV charging protocols and power delivery systems. Developed practical understanding of charging hardware, software, and battery integration.",
    highlight: true,
  },
  {
    year: "Mar 2026 - Apr 2026",
    role: "Automobile Technician Trainee",
    company: "Thirty Six Toyota (Faridabad)",
    description: "Performed servicing, maintenance, diagnostics, and troubleshooting of Toyota ICE vehicles. Worked on wheel alignment, major component replacement, and gained practical automotive workflow experience.",
    highlight: false,
  },
  {
    year: "Dec 2025 - Jan 2026",
    role: "EV Technology Trainee",
    company: "Edunet EV Technical Program",
    description: "Studied EV architecture, BMS, motors, sensors, onboard chargers, and subsystem integration and diagnostics.",
    highlight: false,
  },
  {
    year: "Jan 2025 - Feb 2025",
    role: "Automobile Technician Trainee",
    company: "Crystal Toyota (Delhi)",
    description: "Conducted vehicle servicing, maintenance, diagnostics, and troubleshooting. Handled workshop operations, inspections, and hands-on Toyota training.",
    highlight: false,
  }
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="py-24 md:py-32 relative z-10 px-4 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 flex flex-col"
          >
            <h2 className="text-xs tracking-[0.3em] uppercase text-secondary mb-6">04 — Experience</h2>
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
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "group relative pl-8 md:pl-16 py-8 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-12 transition-all duration-500",
                    exp.highlight ? "bg-accent/[0.03] rounded-r-2xl border-y border-r border-accent/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]" : ""
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[4px] md:left-[11px] top-[40px] md:top-[44px] w-2 h-2 rounded-full bg-background border border-accent group-hover:bg-accent transition-colors duration-500 shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_10px_rgba(59,130,246,1)] z-10" />

                  <div className="md:w-1/3 shrink-0">
                    <span className={cn("text-xs tracking-[0.2em] uppercase block mt-1", exp.highlight ? "text-accent font-medium" : "text-secondary")}>{exp.year}</span>
                  </div>
                  
                  <div className="md:w-2/3 flex flex-col">
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">{exp.role}</h3>
                    <h4 className={cn("text-sm uppercase tracking-widest mb-6", exp.highlight ? "text-foreground/90 font-medium" : "text-secondary")}>{exp.company}</h4>
                    <p className="text-foreground/60 leading-relaxed font-light">{exp.description}</p>
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
