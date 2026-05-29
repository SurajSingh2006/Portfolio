"use client";

import { motion } from "framer-motion";

const experience = [
  {
    year: "May 2026",
    role: "EV Infrastructure Trainee",
    company: "EcoConnect Services + Mercedes-Benz R&I + TERI",
    description: "Worked on EV charging systems, charger assembly/disassembly, fault identification, charger communication systems, and EV charging infrastructure operations."
  },
  {
    year: "Mar 2026 - Apr 2026",
    role: "Automobile Technician Trainee",
    company: "Thirty Six Toyota (Faridabad)",
    description: "Performed servicing, maintenance, diagnostics, and troubleshooting of Toyota ICE vehicles. Worked on wheel alignment, major component replacement, and gained practical automotive workflow experience."
  },
  {
    year: "Dec 2025 - Jan 2026",
    role: "EV Technology Trainee",
    company: "Edunet EV Technical Program",
    description: "Studied EV architecture, BMS, motors, sensors, onboard chargers, and subsystem integration and diagnostics."
  },
  {
    year: "Jan 2025 - Feb 2025",
    role: "Automobile Technician Trainee",
    company: "Crystal Toyota (Delhi)",
    description: "Conducted vehicle servicing, maintenance, diagnostics, and troubleshooting. Handled workshop operations, inspections, and hands-on Toyota training."
  }
];

const education = [
  {
    year: "Present",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Currently Pursuing"
  },
  {
    year: "2024 - 2026",
    degree: "ITI in Mechanic Motor Vehicle",
    institution: "Industrial Training Institute"
  },
  {
    year: "Class 12th",
    degree: "High School (77%)",
    institution: "Board of Education"
  },
  {
    year: "Class 10th",
    degree: "Secondary School (67%)",
    institution: "Board of Education"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative z-10 px-4 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 flex flex-col"
          >
            <h2 className="text-xs tracking-[0.3em] uppercase text-secondary mb-6">04 — Experience</h2>
            <div className="w-8 h-[1px] bg-secondary mb-12" />
          </motion.div>

          <div className="md:col-span-8">
            <div className="flex flex-col mb-32">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                  className="group relative border-t border-card-border py-8 md:py-12 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-12"
                >
                  <div className="md:w-1/4 shrink-0">
                    <span className="text-xs tracking-[0.2em] text-secondary uppercase block mt-1">{exp.year}</span>
                  </div>
                  
                  <div className="md:w-3/4 flex flex-col">
                    <h3 className="text-2xl md:text-4xl font-medium tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">{exp.role}</h3>
                    <h4 className="text-sm uppercase tracking-widest text-secondary mb-6">{exp.company}</h4>
                    <p className="text-foreground/60 leading-relaxed font-light max-w-lg">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-card-border w-full" />
            </div>

            {/* Education Sub-section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-xs tracking-[0.3em] uppercase text-secondary mb-12">Education</h2>
            </motion.div>
            
            <div className="flex flex-col">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                  className="group relative border-t border-card-border py-8 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-12"
                >
                  <div className="md:w-1/4 shrink-0">
                    <span className="text-xs tracking-[0.2em] text-secondary uppercase block mt-1">{edu.year}</span>
                  </div>
                  
                  <div className="md:w-3/4 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">{edu.degree}</h3>
                    <h4 className="text-sm uppercase tracking-widest text-secondary">{edu.institution}</h4>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-card-border w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
