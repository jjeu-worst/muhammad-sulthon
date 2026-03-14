import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { usePortfolioData } from "@/hooks/use-portfolio";

export function Works() {
  const { data, isLoading } = usePortfolioData();

  if (isLoading || !data) return null;

  return (
    <section id="works" className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-white rounded-t-[3rem] md:rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
            Selected <br className="hidden md:block"/> Works.
          </h2>
          <p className="text-white/60 max-w-sm text-balance">
            A showcase of my recent projects, demonstrating my expertise in building scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {data.projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block relative overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Arrow Icon Top Right */}
              <div className="absolute top-8 right-8 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 -translate-y-4 translate-x-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 pr-12">
                {project.title}
              </h3>
              <p className="text-white/60 mb-8 max-w-md line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs font-medium px-3 py-1 bg-white/10 rounded-full text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
