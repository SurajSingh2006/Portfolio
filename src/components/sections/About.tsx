"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 relative z-10 px-4 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 flex flex-col"
          >
            <h2 className="text-xs tracking-[0.3em] uppercase text-secondary mb-6">01 — About</h2>
            <div className="w-8 h-[1px] bg-secondary mb-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-8"
          >
            <h3 className="text-3xl md:text-5xl font-medium leading-[1.3] tracking-tight text-foreground/90 mb-12">
              Transitioning from <span className="italic font-light text-secondary">ICE vehicles</span> to the forefront of <span className="italic font-light text-secondary">EV technology</span>.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-secondary font-light leading-relaxed">
              <p>
                Highly motivated Automobile Technician with hands-on experience in conventional ICE vehicles, advanced diagnostics, wheel alignment, and major component replacement. I've trained extensively under technical experts at Crystal Toyota and Thirty Six Toyota.
              </p>
              <p>
                Currently, I am building deep expertise in Electric Vehicle technology—focusing on charging infrastructure, battery systems, BMS, onboard chargers, and charging communication systems. I am passionate about driving the transition into the EV industry with a practical understanding of both traditional and modern mobility systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
