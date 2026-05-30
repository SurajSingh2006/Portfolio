"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Toyota Workshop Operations",
    category: "Technical Training",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    overlayLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Toyota.svg"
  },
  {
    title: "EV Charging Infrastructure",
    category: "EcoConnect & Mercedes-Benz",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "EV Diagnostics & BMS",
    category: "Battery Systems",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Vehicle Troubleshooting",
    category: "Hands-on Maintenance",
    image: "https://images.unsplash.com/photo-1632823462991-625d2ea9d1b0?q=80&w=1200&auto=format&fit=crop",
    link: "#"
  }
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative w-full h-[60vh] md:h-[80vh] mb-24 overflow-hidden group rounded-lg bg-primary/5">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:bg-black/30 transition-colors duration-700 z-10" />
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover grayscale opacity-70 group-hover:grayscale-[0.2] group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        {project.overlayLogo && (
          <div className="absolute inset-0 z-15 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none">
            <img src={project.overlayLogo} alt="Logo" className="w-64 h-64 md:w-96 md:h-96 object-contain invert" />
          </div>
        )}
      </motion.div>
      
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-12 pointer-events-none">
        <div className="flex justify-between items-start overflow-hidden">
          <motion.span 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs tracking-[0.2em] uppercase font-medium bg-background/30 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full"
          >
            0{index + 1}
          </motion.span>
          <a href={project.link} className="pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/30 backdrop-blur-md border border-white/10 p-4 rounded-full hover:bg-background/50 hover:scale-110 active:scale-95">
            <ArrowUpRight className="w-6 h-6" />
          </a>
        </div>
        
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="bg-background/20 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-2xl max-w-3xl shadow-2xl"
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-3 drop-shadow-xl">{project.title}</h3>
            <p className="text-secondary tracking-widest uppercase text-xs md:text-sm drop-shadow-md flex items-center gap-3">
              <span className="w-4 h-[1px] bg-accent"></span>
              {project.category}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative z-10 px-4 md:px-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-24"
        >
          <h2 className="text-xs tracking-[0.3em] uppercase text-secondary mb-6">03 — Selected Training & Projects</h2>
          <div className="w-8 h-[1px] bg-secondary" />
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
