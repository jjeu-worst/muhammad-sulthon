import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Palette } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    desc: "Building fast, modern, and responsive websites using React, Next.js, and Node.js.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Development",
    desc: "Cross-platform mobile apps for iOS and Android using Flutter and React Native.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Backend & API",
    desc: "Designing and building robust REST APIs, databases, and server-side architecture.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    desc: "Crafting clean, intuitive interfaces with a focus on user experience and visual design.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
            Services.
          </h2>
          <p className="mt-4 text-white/50 max-w-md">
            What I can do for you — from idea to launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 border border-white/10 rounded-3xl hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
