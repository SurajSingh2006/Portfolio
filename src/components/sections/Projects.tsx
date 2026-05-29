"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "EV Charging Infrastructure",
    category: "Technical Training",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Toyota Workshop Operations",
    category: "Automotive Servicing",
    image: "https://images.unsplash.com/photo-1621245645391-7fbd69d1da42?q=80&w=1200&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "EV Diagnostics & BMS",
    category: "Edunet Program",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Vehicle Troubleshooting",
    category: "Hands-on Maintenance",
    image: "https://images.unsplash.com/photo-1486262715619-673c246f90d1?q=80&w=1200&auto=format&fit=crop",
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
    <div ref={ref} className="relative w-full h-[60vh] md:h-[80vh] mb-24 overflow-hidden group rounded-lg">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        />
      </motion.div>
      
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-12 pointer-events-none">
        <div className="flex justify-between items-start overflow-hidden">
          <motion.span 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs tracking-[0.2em] uppercase font-medium"
          >
            0{index + 1}
          </motion.span>
          <a href={project.link} className="pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <ArrowUpRight className="w-8 h-8" />
          </a>
        </div>
        
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">{project.title}</h3>
            <p className="text-secondary tracking-widest uppercase text-xs md:text-sm">{project.category}</p>
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
