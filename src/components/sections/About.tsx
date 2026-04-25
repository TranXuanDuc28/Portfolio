"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Code2, Sparkles, User, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-900/5 dark:bg-slate-900/20 scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <User className="w-3 h-3" />
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 leading-tight">
              Fullstack Developer <br /> <span className="text-gradient text-2xl sm:text-3xl italic">Building Web Applications</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                I am a <span className="text-foreground font-bold">final-year IT student</span> and an aspiring Fullstack Developer with a relentless
                drive to build exceptional digital products.
              </p>
              <p>
                My expertise lies at the intersection of <span className="text-primary font-semibold">modern web engineering</span> and
                <span className="text-secondary font-semibold"> Artificial Intelligence</span>, focusing on clean code, performance, and user experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="p-6 glass rounded-3xl hover:bg-white/5 transition-all duration-500 group border-white/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-foreground">Education</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Software Engineering student at <span className="text-foreground/80">Information Technology Major</span>.</p>
              </div>

              <div className="p-6 glass rounded-3xl hover:bg-white/5 transition-all duration-500 group border-white/5 hover:border-secondary/20 hover:shadow-xl hover:shadow-secondary/5">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-foreground">Mission</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Continuously improving my skills and building user-focused applications.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 max-w-[450px] mx-auto lg:mx-0 relative order-1 lg:order-2 mb-12 lg:mb-0"
          >
            <div className="relative z-10 aspect-square rounded-[2.5rem] sm:rounded-[3.5rem] bg-slate-50 dark:bg-indigo-500/10 border border-slate-200 dark:border-white/5 p-4 sm:p-8 flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Abstract visual background */}
              <div className="absolute inset-0 opacity-20 dark:bg-grid" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

              <div className="w-full h-full border border-primary/10 dark:border-primary/20 rounded-[2rem] sm:rounded-[3rem] flex items-center justify-center relative group overflow-hidden bg-white dark:bg-slate-900 shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center animate-spin-slow opacity-30">
                  <div className="w-4/5 h-4/5 border border-dashed border-primary/30 rounded-full" />
                </div>

                <div className="relative w-full h-full p-2">
                  <Image
                    src="/images/Duc.jpg"
                    alt="Tran Xuan Duc Avatar"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-[1.5rem] sm:rounded-[2.5rem] group-hover:scale-105 transition-transform duration-700"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="flex items-center gap-3 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="p-2 bg-primary/20 rounded-lg backdrop-blur-md">
                        <Zap className="w-5 h-5 text-primary animate-pulse" />
                      </div>
                      <span className="font-black tracking-[0.2em] uppercase text-[10px]">Fullstack Engineer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 glass rounded-full flex items-center justify-center z-20 shadow-primary/20 shadow-xl border-primary/20"
            >
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </motion.div>

            <div className="absolute -bottom-4 -left-4 w-32 h-12 glass rounded-2xl flex items-center justify-center z-20 shadow-xl border-white/10 px-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Active Now</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
