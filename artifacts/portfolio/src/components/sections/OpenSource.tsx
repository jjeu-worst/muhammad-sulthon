import { motion } from "framer-motion";
import { Github, Star, GitFork } from "lucide-react";

const repos = [
  {
    name: "flutter-ui-kit",
    desc: "Kumpulan komponen UI Flutter yang siap pakai — buttons, cards, modals, dan lainnya.",
    stars: 128,
    forks: 34,
    lang: "Dart",
    langColor: "bg-blue-400",
  },
  {
    name: "express-api-boilerplate",
    desc: "Boilerplate Node.js & Express dengan auth, validation, dan struktur folder yang bersih.",
    stars: 87,
    forks: 21,
    lang: "TypeScript",
    langColor: "bg-blue-600",
  },
  {
    name: "react-animation-hooks",
    desc: "Custom hooks untuk animasi React yang smooth menggunakan Framer Motion.",
    stars: 65,
    forks: 12,
    lang: "TypeScript",
    langColor: "bg-blue-600",
  },
  {
    name: "tailwind-component-library",
    desc: "Library komponen Tailwind CSS yang accessible dan mudah dikustomisasi.",
    stars: 203,
    forks: 58,
    lang: "CSS",
    langColor: "bg-pink-500",
  },
];

export function OpenSource() {
  return (
    <section id="opensource" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
              Open<br />Source.
            </h2>
            <div className="w-12 h-1 bg-foreground mt-8" />
            <p className="mt-6 text-muted-foreground">
              Proyek open source yang saya buat dan kontribusikan di GitHub.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/80 transition-colors"
            >
              <Github className="w-4 h-4" />
              Lihat GitHub
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-5">
          {repos.map((repo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 bg-white border border-border rounded-3xl hover:border-foreground/20 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-muted-foreground" />
                  <h3 className="font-display font-bold text-base">{repo.name}</h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{repo.desc}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className={`w-3 h-3 rounded-full ${repo.langColor}`} />
                  {repo.lang}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5" />
                  {repo.forks}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
