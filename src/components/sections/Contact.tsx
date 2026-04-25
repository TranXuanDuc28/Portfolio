"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, ArrowRight, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-grid">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 text-secondary font-bold tracking-widest uppercase text-[10px] mb-6 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
              <Sparkles className="w-3 h-3" />
              <span>Get in Touch</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Ready to Build <br /> <span className="text-gradient">Something Great?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-md">
              I&apos;m currently open to new opportunities and interesting projects. 
              Let&apos;s discuss how we can work together.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <a
                href="mailto:xuanductran71@gmail.com"
                className="flex flex-col gap-4 p-8 glass rounded-[2rem] hover:bg-primary/5 transition-all group border-white/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-bold group-hover:text-primary transition-colors">xuanductran71@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/TranXuanDuc28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-4 p-8 glass rounded-[2rem] hover:bg-white/5 transition-all group border-white/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">GitHub</p>
                  <p className="text-lg font-bold group-hover:text-primary transition-colors">TranXuanDuc28</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="glass p-10 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <MessageSquare className="w-32 h-32" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full" />
                  Send a Message
                </h3>
                
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-muted-foreground">Full Name</label>
                      <input
                        type="text"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="John Doe"
                        suppressHydrationWarning
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-muted-foreground">Email</label>
                      <input
                        type="email"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="john@example.com"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-muted-foreground">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell me about your project..."
                      suppressHydrationWarning
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    suppressHydrationWarning
                    className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 group/btn overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
                    <span className="relative flex items-center gap-3">
                      Send Message <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
