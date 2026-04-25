"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import { Github } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-grid">
      {/* Dynamic Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] animate-pulse delay-1000 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            Transforming Ideas <br /> Into <span className="text-gradient">Digital Reality</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Hi, I&apos;m <span className="text-foreground font-bold">Tran Xuan Duc</span>. A Fullstack Developer crafting 
            high-performance web applications with precision and passion.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 shadow-2xl shadow-primary/30 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <span className="relative flex items-center gap-2">
                View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 glass rounded-2xl font-bold hover:bg-white/10 transition-all"
            >
              Contact Me
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex items-center justify-center gap-8 text-muted-foreground"
          >
             <div className="h-[1px] w-12 bg-border" />
             <div className="flex gap-6">
                <a href="https://github.com/TranXuanDuc28" target="_blank" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                <a href="mailto:xuanductran71@gmail.com" className="hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
             </div>
             <div className="h-[1px] w-12 bg-border" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Scroll</span>
          <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
