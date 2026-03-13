import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-foreground text-background text-sm font-medium mb-8">
          What's Next?
        </span>
        
        <h2 className="text-5xl sm:text-7xl md:text-[90px] leading-[1.1] font-display font-bold tracking-tighter mb-8 text-balance">
          Let's work <br/> together.
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently available for freelance work and open to new opportunities. 
          If you have a project that needs some creative touch, I'd love to hear about it.
        </p>

        <a 
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          <Mail className="w-5 h-5" />
          Say Hello
          <ArrowRight className="w-5 h-5" />
        </a>

        <div className="mt-20 flex items-center justify-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
