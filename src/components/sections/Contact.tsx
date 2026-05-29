"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 relative z-10 px-4 md:px-12 bg-primary/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 flex flex-col"
          >
            <h2 className="text-xs tracking-[0.3em] uppercase text-secondary mb-6">05 — Contact</h2>
            <div className="w-8 h-[1px] bg-secondary mb-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-8 flex flex-col"
          >
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-16 leading-[0.9]">
              Let's build<br />
              <span className="italic font-light text-secondary">the future.</span>
            </h3>

            <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-16">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-secondary mb-2">Email</h4>
                <a href="mailto:surajsingh51115@gmail.com" className="text-lg md:text-xl hover:text-secondary transition-colors">surajsingh51115@gmail.com</a>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-secondary mb-2">Phone</h4>
                <a href="tel:+919958808738" className="text-lg md:text-xl hover:text-secondary transition-colors">+91-9958808738</a>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-secondary mb-2">Location</h4>
                <span className="text-lg md:text-xl">Delhi, India</span>
              </div>
            </div>

            <form className="flex flex-col gap-12 max-w-2xl">
              <div className="relative group">
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-b border-card-border pb-4 text-xl focus:outline-none focus:border-foreground transition-colors text-foreground peer placeholder-transparent"
                  placeholder="Name"
                />
                <label htmlFor="name" className="absolute left-0 top-0 text-secondary text-sm uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-xs peer-placeholder-shown:text-xl peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal cursor-text">
                  What is your name?
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b border-card-border pb-4 text-xl focus:outline-none focus:border-foreground transition-colors text-foreground peer placeholder-transparent"
                  placeholder="Email"
                />
                <label htmlFor="email" className="absolute left-0 top-0 text-secondary text-sm uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-xs peer-placeholder-shown:text-xl peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal cursor-text">
                  What is your email?
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  id="message" 
                  rows={1}
                  className="w-full bg-transparent border-b border-card-border pb-4 text-xl focus:outline-none focus:border-foreground transition-colors text-foreground peer placeholder-transparent resize-none"
                  placeholder="Message"
                />
                <label htmlFor="message" className="absolute left-0 top-0 text-secondary text-sm uppercase tracking-widest transition-all peer-focus:-top-6 peer-focus:text-xs peer-placeholder-shown:text-xl peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal cursor-text">
                  Tell me about your inquiry
                </label>
              </div>
              
              <button 
                type="button"
                className="group w-fit py-4 flex items-center justify-start gap-4 text-xl font-medium tracking-tight hover:text-secondary transition-colors"
              >
                Send Message
                <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-foreground/50 transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
