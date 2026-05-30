"use client";

import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
  },
};

export default function Hero() {
  const firstName = "SURAJ".split("");
  const lastName = "Singh".split("");

  return (
    <section id="home" className="relative min-h-[100vh] flex flex-col justify-end pb-24 md:pb-32 px-4 md:px-12 z-10 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 lg:col-span-9 perspective-[1000px]">
            <motion.h1 
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-[14vw] sm:text-[12vw] md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] uppercase whitespace-nowrap"
            >
              <div className="flex text-foreground/90 mix-blend-difference hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-accent transition-all duration-700">
                {firstName.map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block transform-style-3d">
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="text-secondary italic font-light lowercase text-[12vw] sm:text-[10vw] md:text-7xl lg:text-[7rem] ml-12 md:ml-24 lg:ml-32 flex mt-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-accent hover:to-primary transition-all duration-700">
                {lastName.map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block transform-style-3d">
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="md:col-span-4 lg:col-span-3 flex flex-col justify-end"
          >
            <p className="text-secondary text-sm md:text-base leading-relaxed tracking-wide font-light max-w-xs md:ml-auto md:text-right mt-12 md:mt-0">
              <span className="text-foreground block font-medium mb-2">Automobile Technician & EV Technology Enthusiast</span>
              Building the future of mobility through Automotive & EV Technology in Delhi, India.
            </p>
            <div className="mt-8 md:mt-12 h-[1px] w-full bg-secondary/30 origin-left" />
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
              className="h-[1px] w-full bg-accent/80 origin-left -mt-[1px] shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Dynamic light reflection */}
      <motion.div
        animate={{
          x: ["-10%", "10%", "-10%"],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-1/4 w-[60vw] h-[20vh] bg-gradient-to-t from-accent/10 to-transparent blur-[80px] pointer-events-none -z-10"
      />
    </section>
  );
}
