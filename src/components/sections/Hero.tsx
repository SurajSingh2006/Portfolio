"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] flex flex-col justify-end pb-24 md:pb-32 px-4 md:px-12 z-10 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-8 lg:col-span-9"
          >
            <h1 className="text-[14vw] sm:text-[12vw] md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] uppercase text-foreground/90 mix-blend-difference whitespace-nowrap">
              Suraj<br />
              <span className="text-secondary italic font-light lowercase text-[12vw] sm:text-[10vw] md:text-7xl lg:text-[7rem] ml-12 md:ml-24 lg:ml-32 block mt-2">Singh</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="md:col-span-4 lg:col-span-3 flex flex-col justify-end"
          >
            <p className="text-secondary text-sm md:text-base leading-relaxed tracking-wide font-light max-w-xs md:ml-auto md:text-right mt-12 md:mt-0">
              Automobile Technician & EV Technology Enthusiast.<br/><br/>
              Building the future of mobility through Automotive & EV Technology in Delhi, India.
            </p>
            <div className="mt-8 md:mt-12 h-[1px] w-full bg-secondary/30 origin-left" />
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1 }}
              className="h-[1px] w-full bg-foreground/50 origin-left -mt-[1px]"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Background ambient light */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 3 }}
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[150px] pointer-events-none -z-10"
      />
    </section>
  );
}
