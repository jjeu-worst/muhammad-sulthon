import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Works", id: "works" },
  { label: "Services", id: "services" },
  { label: "Tech Stack", id: "techstack" },
  { label: "Certificates", id: "certificates" },
  { label: "Blog", id: "blog" },
  { label: "Open Source", id: "opensource" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-border/50" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="text-2xl font-display font-bold tracking-tighter hover:opacity-70 transition-opacity"
          >
            j<span className="text-muted-foreground">.</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-foreground group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:flex group items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -20, pointerEvents: "none" }}
        transition={{ duration: 0.3 }}
        className="fixed top-[72px] left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border px-6 py-6 flex flex-col gap-4 md:hidden"
      >
        {navLinks.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo("contact")}
          className="mt-2 w-full bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-medium"
        >
          Contact
        </button>
      </motion.div>
    </>
  );
}
