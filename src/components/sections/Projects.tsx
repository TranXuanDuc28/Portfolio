"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Medical Appointment System",
    description: "A comprehensive platform for booking and managing medical appointments with real-time notifications and secure patient records.",
    tech: ["React", "Node.js", "MySQL", "Socket.io", "JWT"],
    github: "https://github.com/TranXuanDuc28",
    demo: "#",
    category: "Fullstack",
  },
  {
    title: "AI Fitness App",
    description: "An innovative mobile application that uses computer vision to track exercise form and provide real-time feedback to users.",
    tech: ["React Native", "Node.js", "TensorFlow.js", "Expo"],
    github: "https://github.com/TranXuanDuc28",
    demo: "#",
    category: "AI / Mobile",
  },
  {
    title: "Criminal Investigation System",
    description: "A secure management system for criminal records and investigation workflows featuring Role-Based Access Control (RBAC).",
    tech: ["NestJS", "React", "MySQL", "RBAC", "TypeScript"],
    github: "https://github.com/TranXuanDuc28",
    demo: "#",
    category: "Fullstack",
  },
];

const categories = ["All", "Fullstack", "AI / Mobile"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              A selection of my recent work, ranging from full-stack web applications to AI-powered mobile solutions.
            </motion.p>
          </div>
          
          <div className="flex flex-wrap gap-2 p-1 glass rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  filter === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/25" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
