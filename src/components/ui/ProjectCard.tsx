"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Calendar, User } from "lucide-react";
import { Github as GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  title: string;
  shortTitle?: string;
  icon?: React.ReactNode;
  role?: string;
  duration?: string;
  description: string | string[];
  tech: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({ title, shortTitle, icon, role, duration, description, tech, github, demo }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group hover-card glass rounded-[2.5rem] overflow-hidden flex flex-col h-full bg-slate-900/40"
    >
      <div className="aspect-[16/10] relative overflow-hidden">
        {/* Placeholder for project image with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-sky-500/10 to-transparent group-hover:scale-110 transition-transform duration-700 ease-out" />

        {/* Animated pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="w-full h-full border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 backdrop-blur-[2px] relative overflow-hidden group-hover:border-primary/30 transition-colors bg-white/5">
            {icon && (
              <div className="text-white/20 group-hover:text-primary/40 transition-colors duration-500 group-hover:scale-110">
                {icon}
              </div>
            )}
            <span className="text-xl font-black text-white/30 tracking-widest uppercase group-hover:text-primary/50 transition-colors duration-500 select-none text-center px-4">
              {shortTitle || title.split(' ')[0]}
            </span>

            {/* Hover link reveal */}
            <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 translate-y-full group-hover:translate-y-0">
              <a href={github} target="_blank" className="p-4 bg-white text-primary rounded-full hover:scale-110 transition-transform shadow-xl">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href={demo} target="_blank" className="p-4 bg-slate-900 text-white rounded-full hover:scale-110 transition-transform shadow-xl">
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute top-6 right-6">
          <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="p-10 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-primary/10 border border-primary/10 rounded-lg text-[10px] font-bold tracking-wider uppercase text-primary"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {(role || duration) && (
          <div className="flex flex-col gap-2 mb-6 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            {role && (
              <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                <User className="w-4 h-4 text-primary" />
                {role}
              </div>
            )}
            {duration && (
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary/70" />
                {duration}
              </div>
            )}
          </div>
        )}

        <div className="text-muted-foreground text-[14px] leading-relaxed mb-8 flex-grow">
          {Array.isArray(description) ? (
            <ul className="list-disc pl-4 space-y-2">
              {description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>

        <div className="flex items-center gap-6 pt-6 border-t border-white/5">
          <a href={github} target="_blank" className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
            <GithubIcon className="w-4 h-4" /> Code
          </a>
          <a href={demo} target="_blank" className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
