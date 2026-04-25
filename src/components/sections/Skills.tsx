"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, Settings, Terminal, Cpu, Globe, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-8 h-8" />,
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "TypeScript"],
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/20",
  },
  {
    title: "Backend",
    icon: <Server className="w-8 h-8" />,
    skills: ["Node.js", "Express", "NestJS", "Socket.io", "Python"],
    color: "from-emerald-500 to-teal-400",
    shadow: "shadow-emerald-500/20",
  },
  {
    title: "Database",
    icon: <Database className="w-8 h-8" />,
    skills: ["MySQL", "Firebase", "PostgreSQL", "MongoDB", "Redis"],
    color: "from-purple-500 to-pink-400",
    shadow: "shadow-purple-500/20",
  },
  {
    title: "DevOps & Tools",
    icon: <Settings className="w-8 h-8" />,
    skills: ["Docker", "Git", "Postman", "Vercel", "AWS"],
    color: "from-orange-500 to-yellow-400",
    shadow: "shadow-orange-500/20",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Technical <span className="text-gradient">Ecosystem</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            I leverage a modern technology stack to build robust, scalable, and high-performance applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-10 glass rounded-[2.5rem] hover:shadow-2xl ${category.shadow} transition-all duration-500 group`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-8 text-white shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-8">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
