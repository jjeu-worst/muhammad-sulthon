import { motion } from "framer-motion";

const stacks = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Flutter", category: "Mobile" },
  { name: "React Native", category: "Mobile" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Firebase", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "DevOps" },
  { name: "Figma", category: "Design" },
];

const categoryColors: Record<string, string> = {
  Frontend: "bg-blue-50 text-blue-700 border-blue-200",
  Mobile: "bg-purple-50 text-purple-700 border-purple-200",
  Backend: "bg-green-50 text-green-700 border-green-200",
  Database: "bg-orange-50 text-orange-700 border-orange-200",
  Language: "bg-gray-100 text-gray-700 border-gray-200",
  DevOps: "bg-red-50 text-red-700 border-red-200",
  Design: "bg-pink-50 text-pink-700 border-pink-200",
};

export function TechStack() {
  return (
    <section id="techstack" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
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
              Tech<br />Stack.
            </h2>
            <div className="w-12 h-1 bg-foreground mt-8" />
            <p className="mt-6 text-muted-foreground">
              Teknologi yang saya gunakan sehari-hari untuk membangun produk.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {stacks.map((stack, i) => (
              <motion.div
                key={stack.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium ${categoryColors[stack.category]}`}
              >
                <span>{stack.name}</span>
                <span className="text-xs opacity-60">· {stack.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
