"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { Stethoscope, Activity, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "Website for scheduling medical appointments",
    shortTitle: "MedCare System",
    icon: <Stethoscope className="w-16 h-16" />,
    role: "Fullstack Developer",
    duration: "16/06/2025 - 18/08/2025",
    description: [
      "Full-stack Healthcare Platform: Supporting automated appointment booking, medical records, and digital payment integration (Casso Pay).",
      "Security & Access Control: Implemented JWT-based authentication with hierarchical RBAC for Patients, Doctors, and Admins.",
      "AI Integration: Leveraged RAG (LangChain) and PhoBERT for an intelligent chatbot and automated medical history summarization.",
      "Real-time & Automation: Built management dashboards and live chat systems using Socket.io, featuring automated PDF prescription generation."
    ],
    tech: ["React.js", "Redux", "Node.js", "Express", "Flask", "JWT", "MySQL", "Sequelize ORM", "Socket.io", "LangChain", "FAISS"],
    github: "https://github.com/TranXuanDuc28/medical-appointment-system.git",
    demo: "#",
    category: "Fullstack",
  },
  {
    title: "Developing AI applications for fitness training",
    shortTitle: "AI Fitness App",
    icon: <Activity className="w-16 h-16" />,
    role: "Fullstack Developer",
    duration: "30/09/2025 - 30/11/2025",
    description: [
      "Developed an AI-powered health platform generating personalized workout and nutrition plans based on user BMI, goals, and preferences.",
      "Designed prompt engineering and backend logic to generate structured fitness plans using LLM APIs (OpenAI, Gemini).",
      "Built a 24/7 virtual health assistant supporting real-time consultation via LLM integration.",
      "Implemented AI pose detection using TensorFlow.js for real-time exercise feedback.",
      "Developed calorie tracking and workout analytics with interactive data visualization."
    ],
    tech: ["React Native", "Expo", "Node.js", "Express", "MySQL", "Sequelize ORM", "Socket.io", "TensorFlow.js", "LLM APIs"],
    github: "https://github.com/TranXuanDuc28/ai-fitness-training-app/tree/doan",
    demo: "#",
    category: "AI / Mobile",
  },
  {
    title: "Criminal Investigation Management System (CIMUS)",
    shortTitle: "CIMUS Platform",
    icon: <ShieldCheck className="w-16 h-16" />,
    role: "Full-Stack Developer Intern (SERN)",
    duration: "18/06/2025 - 17/07/2025",
    description: [
      "Built a web-based system for managing criminal cases, evidence tracking, and reporting.",
      "Implemented JWT authentication and RBAC for secure access control.",
      "Developed backend with NestJS + TypeORM (Query Builder, transactions) and RESTful APIs.",
      "Built responsive frontend using React.js, Redux, Tailwind CSS, and Radix UI based on Figma design.",
      "Integrated Cloudinary for file upload and media management.",
      "Applied Agile/Scrum for iterative team development."
    ],
    tech: ["NestJS", "TypeORM", "React.js", "Redux", "Tailwind CSS", "MySQL", "Cloudinary", "JWT Auth", "RESTful API"],
    github: "#",
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
    <section id="projects" className="section-padding scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-4"
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
                suppressHydrationWarning
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${filter === cat
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
