"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "OBD Diagnostic Scanners", type: "Hardware" },
  { name: "EV Chargers (Level 2 & DC)", type: "Infrastructure" },
  { name: "BMS Monitoring Tools", type: "Software" },
  { name: "Vehicle Alignment Rigs", type: "Equipment" },
  { name: "High-Voltage Multimeters", type: "Hardware" },
  { name: "Toyota TIS / Techstream", type: "Software" }
];

export default function ToolsAndTech() {
  return (
    <section className="py-24 md:py-32 relative z-10 px-4 md:px-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-16"
        >
          <h2 className="text-xs tracking-[0.3em] uppercase text-secondary mb-6">06 — Tools & Technologies</h2>
          <div className="w-8 h-[1px] bg-secondary" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl border border-card-border bg-gradient-to-br from-card-bg/50 to-transparent backdrop-blur-sm group overflow-hidden relative shadow-lg"
            >
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
              
              <motion.div 
                className="absolute -right-10 -top-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
              />
              
              <div className="relative z-10">
                <span className="text-xs tracking-[0.2em] text-accent uppercase block mb-4 font-medium">{tool.type}</span>
                <h3 className="text-xl font-medium text-foreground tracking-tight">{tool.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
