"use client";

import { motion } from "framer-motion";

const skills = [
  "EV Charging Infrastructure",
  "Battery Management Systems",
  "High-Voltage Diagnostics",
  "Vehicle Troubleshooting",
  "Wheel Alignment",
  "EV Fundamentals",
  "Automotive Maintenance",
  "Component Replacement"
];

export default function CoreExpertise() {
  return (
    <section className="py-24 md:py-32 relative z-10 px-4 md:px-12 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-16"
        >
          <h2 className="text-xs tracking-[0.3em] uppercase text-secondary mb-6">02 — Core Expertise</h2>
          <div className="w-8 h-[1px] bg-secondary" />
        </motion.div>

        <div className="flex flex-wrap gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 py-4 rounded-full border border-card-border bg-card-bg/30 backdrop-blur-md hover:border-accent hover:bg-accent/5 transition-all duration-300 cursor-default shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <span className="text-foreground tracking-wide font-light">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
