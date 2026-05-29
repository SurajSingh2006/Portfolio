"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "EV Technology",
    skills: ["EV Charging Infrastructure", "Charger Troubleshooting", "Battery Systems", "BMS", "Onboard Chargers", "EV Sensors", "EV Fundamentals"]
  },
  {
    title: "Automotive (ICE)",
    skills: ["Vehicle Diagnostics", "Wheel Alignment", "General Servicing", "Component Replacement", "ICE Maintenance"]
  },
  {
    title: "Technical Knowledge",
    skills: ["Charger-to-Grid Comm.", "Charger-to-Vehicle Comm.", "EV Hardware Basics", "EV Software Basics"]
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Teamwork", "Leadership", "Problem Solving", "Time Management"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative z-10 px-4 md:px-12 bg-primary/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 flex flex-col"
          >
            <h2 className="text-xs tracking-[0.3em] uppercase text-secondary mb-6">02 — Expertise</h2>
            <div className="w-8 h-[1px] bg-secondary mb-12" />
          </motion.div>

          <div className="md:col-span-8 flex flex-col gap-16">
            {skillCategories.map((category, catIndex) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: catIndex * 0.1 }}
                className="flex flex-col"
              >
                <h3 className="text-sm tracking-[0.2em] uppercase text-foreground/40 mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground/20 hover:text-foreground transition-colors duration-500 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
