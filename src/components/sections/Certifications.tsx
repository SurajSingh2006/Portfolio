"use client";

import { motion } from "framer-motion";

const certs = [
  {
    title: "EV Charging Infrastructure",
    issuer: "Mercedes-Benz R&D India + TERI",
    year: "2026"
  },
  {
    title: "EV Technical Program",
    issuer: "Edunet Foundation",
    year: "2026"
  },
  {
    title: "Automotive Technical Training",
    issuer: "Thirty Six Toyota & Crystal Toyota",
    year: "2025 - 2026"
  }
];

export default function Certifications() {
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
          <h2 className="text-xs tracking-[0.3em] uppercase text-secondary mb-6">07 — Certifications & Training</h2>
          <div className="w-8 h-[1px] bg-secondary" />
        </motion.div>

        <div className="flex flex-col border-t border-card-border">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-card-border hover:bg-accent/[0.03] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 rounded-xl cursor-default"
            >
              <div className="flex flex-col md:w-1/2 mb-4 md:mb-0 transform group-hover:translate-x-2 transition-transform duration-500 ease-out">
                <h3 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight group-hover:text-accent transition-colors duration-500">{cert.title}</h3>
              </div>
              <div className="flex flex-col md:w-1/3">
                <span className="text-secondary uppercase tracking-widest text-sm">{cert.issuer}</span>
              </div>
              <div className="md:w-1/6 text-left md:text-right mt-2 md:mt-0">
                <span className="text-xs tracking-[0.2em] text-foreground/50 uppercase">{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
