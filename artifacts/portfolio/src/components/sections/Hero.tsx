import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Blob } from "../Blob";

// Custom WhatsApp Icon since Lucide doesn't have brand icons
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M9.5 13.5c1.5 1 3.5 1 5 0" />
  </svg>
);

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 pt-20">
      <Blob />

      {/* Left decorative sidebar */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="hidden xl:flex absolute left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-6"
      >
        <div className="w-[1px] h-24 bg-border relative">
          <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 rounded-full bg-foreground" />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-1 duration-200">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-1 duration-200">
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-1 duration-200">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/70 backdrop-blur-sm border border-black/8 text-sm font-medium mb-6 shadow-sm">
            Hi! I'm Rasya Zildan
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[90px] leading-[1.05] tracking-tighter font-display font-bold text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Full-stack Developer<br />
          Mobile Developer.
        </motion.h1>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
