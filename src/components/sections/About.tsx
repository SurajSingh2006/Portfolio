"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  
  return (
    <section id="about" ref={containerRef} className="py-32 md:py-48 relative z-10 px-4 md:px-12 overflow-hidden">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 flex flex-col"
          >
            <h2 className="text-xs tracking-[0.3em] uppercase text-secondary mb-6">01 — The Mission</h2>
            <div className="w-8 h-[1px] bg-secondary mb-12" />
            
            <motion.div style={{ y: y2 }} className="hidden md:block mt-32 w-48 h-48 rounded-full bg-gradient-to-tr from-accent/20 to-transparent blur-3xl absolute -left-20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-8 relative"
          >
            <motion.div style={{ y: y1 }}>
              <h3 className="text-4xl md:text-6xl font-medium leading-[1.2] tracking-tighter text-foreground mb-12 mix-blend-difference">
                Engineering the <span className="italic font-light text-accent">transition</span> from internal combustion to <span className="italic font-light text-accent">electric mobility</span>.
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-secondary font-light leading-relaxed text-lg">
                <div className="space-y-6">
                  <p>
                    I began my career mastering internal combustion engines (ICE) and traditional automotive systems on the workshop floor. Training intensively under technical experts at <strong className="text-foreground font-medium">Toyota</strong>, I built a foundation in hands-on vehicle diagnostics, component replacement, and precise mechanical workflows.
                  </p>
                  <p>
                    But the future is electric. 
                  </p>
                </div>
                <div className="space-y-6">
                  <p>
                    Driven by an unyielding ambition to pioneer sustainable mobility, I have pivoted my expertise entirely toward <strong className="text-foreground font-medium">Electric Vehicle Technology</strong>.
                  </p>
                  <p>
                    Through advanced programs with <strong className="text-foreground font-medium">Mercedes-Benz R&D India and TERI</strong>, I am now mastering high-voltage battery architecture, Battery Management Systems (BMS), and EV charging infrastructure. I am not just learning how to fix vehicles—I am preparing to engineer the infrastructure that will power the next century of transportation.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
