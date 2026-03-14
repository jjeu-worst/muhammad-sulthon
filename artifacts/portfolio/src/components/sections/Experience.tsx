import { motion } from "framer-motion";

const experiences = [
  {
    year: "2023 — Now",
    role: "Full-stack Developer",
    company: "Freelance",
    desc: "Building web and mobile apps for clients across various industries using React, Node.js, and Flutter.",
  },
  {
    year: "2022 — 2023",
    role: "Mobile Developer",
    company: "Startup Project",
    desc: "Developed cross-platform mobile applications with Flutter and integrated REST APIs.",
  },
  {
    year: "2021 — 2022",
    role: "Frontend Developer",
    company: "Agency",
    desc: "Built responsive landing pages and web apps using React and Tailwind CSS.",
  },
  {
    year: "2020 — 2021",
    role: "Junior Developer",
    company: "Internship",
    desc: "Assisted in developing internal tools and learned fundamentals of full-stack development.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
              Experience.
            </h2>
            <div className="w-12 h-1 bg-foreground mt-8" />
          </motion.div>
        </div>

        {/* Right */}
        <div className="lg:col-span-7 flex flex-col">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {i < experiences.length - 1 && (
                <div className="absolute left-[5px] top-10 w-[1px] h-full bg-border" />
              )}

              {/* Dot */}
              <div className="mt-1.5 flex-shrink-0 w-3 h-3 rounded-full border-2 border-foreground bg-background group-hover:bg-foreground transition-colors duration-300" />

              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                  {exp.year}
                </span>
                <h3 className="text-xl font-display font-bold">{exp.role}</h3>
                <span className="text-sm font-medium text-muted-foreground">{exp.company}</span>
                <p className="mt-2 text-muted-foreground leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
