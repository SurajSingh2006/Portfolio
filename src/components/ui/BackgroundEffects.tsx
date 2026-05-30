"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-5] overflow-hidden bg-background">
      {/* Moving Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Ambient Light Orbs */}
      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-20%", "20%", "-20%"],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[120px]"
      />
      <motion.div
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["20%", "-20%", "20%"],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[150px]"
      />
    </div>
  );
}
