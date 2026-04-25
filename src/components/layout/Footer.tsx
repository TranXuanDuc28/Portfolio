import { Mail, ArrowUp } from "lucide-react";
import { Github } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl font-bold tracking-tight mb-2">
            <span className="text-gradient">TXD</span>.
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tran Xuan Duc. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/TranXuanDuc28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:xuanductran71@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="#home"
            className="p-2 glass rounded-full hover:bg-white/5 transition-all group"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
