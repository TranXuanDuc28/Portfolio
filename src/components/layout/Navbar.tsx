"use client";

import { useState, useEffect } from "react";
import { Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-lg" : "py-6 bg-transparent"
        }`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative text-2xl font-black tracking-tighter flex items-center gap-1 group"
            suppressHydrationWarning
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition duration-500 pointer-events-none" />
            <span className="relative text-2xl font-black tracking-tighter text-foreground">
              TXD<span className="text-primary">.</span>
            </span>
          </motion.div>
        </div>

        {/* Middle: Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-1 p-1 glass rounded-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all text-muted-foreground hover:text-foreground hover:bg-white/5"
              >  {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="px-6 py-2.5 bg-foreground text-background rounded-xl text-sm font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2"
          >
            Contact Me <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex-1 flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            suppressHydrationWarning
            className="w-12 h-12 glass rounded-xl flex items-center justify-center transition-colors hover:bg-white/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full p-6 md:hidden"
          >
            <div className="glass rounded-3xl p-8 flex flex-col gap-6 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <ThemeToggle />
                  <a href="https://github.com/TranXuanDuc28" target="_blank" className="p-3 glass rounded-xl"><Github className="w-5 h-5" /></a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
