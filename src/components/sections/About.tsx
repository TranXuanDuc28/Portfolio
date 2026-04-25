"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Code2, Sparkles, User, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-900/5 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <User className="w-3 h-3" />
              <span>Identity</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Crafting Excellence Through <br /> <span className="text-gradient">Modern Engineering</span>
            </h2>

            <div className="space-y-8 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a final-year IT student and an aspiring Fullstack Developer with a relentless
                drive to build exceptional digital products. My approach combines technical
                rigor with a keen eye for design aesthetics.
              </p>
              <p>
                I specialize in building high-performance backend systems and fluid,
                interactive frontends. My goal is to create software that doesn&apos;t just
                work—it <span className="text-foreground font-bold">delights</span> users.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              <div className="p-8 glass rounded-3xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-foreground">Education</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Final-year IT student focused on Software Engineering.</p>
              </div>

              <div className="p-8 glass rounded-3xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-foreground">Mission</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Delivering scalable, secure, and user-centric solutions.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 aspect-square rounded-[3rem] bg-slate-50 dark:bg-indigo-500/10 border border-slate-200 dark:border-white/5 p-12 flex items-center justify-center overflow-hidden">
              {/* Abstract visual background */}
              <div className="absolute inset-0 opacity-20 dark:bg-grid" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

              <div className="w-full h-full border border-primary/10 dark:border-primary/20 rounded-[2.5rem] flex items-center justify-center relative group overflow-hidden bg-white dark:bg-slate-900">
                <div className="absolute inset-0 flex items-center justify-center animate-spin-slow opacity-30">
                  <div className="w-4/5 h-4/5 border border-dashed border-primary/30 rounded-full" />
                </div>

                <div className="relative w-full h-full p-4">
                  <Image
                    src="/images/Duc.jpg"
                    alt="Tran Xuan Duc Avatar"
                    fill
                    className="object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="flex items-center gap-3 text-white">
                      <Zap className="w-5 h-5 text-primary animate-pulse" />
                      <span className="font-black tracking-[0.2em] uppercase text-xs">Fullstack Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 glass rounded-full flex items-center justify-center animate-bounce delay-700 z-20 shadow-primary/20 shadow-xl">
              <Sparkles className="w-10 h-10 text-yellow-400" />
            </div>
            {/* <div className="absolute -bottom-10 -left-10 w-40 h-40 glass rounded-3xl flex items-center justify-center animate-pulse z-20 shadow-secondary/20 shadow-xl">
              <Code2 className="w-12 h-12 text-sky-400" />
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
