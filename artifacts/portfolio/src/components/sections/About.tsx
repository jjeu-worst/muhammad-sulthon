import { motion } from "framer-motion";
import { usePortfolioData } from "@/hooks/use-portfolio";

export function About() {
  const { data, isLoading } = usePortfolioData();

  if (isLoading || !data) return null;

  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
              About <br/> Me.
            </h2>
            <div className="w-12 h-1 bg-foreground mt-8"></div>
          </motion.div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl leading-relaxed text-muted-foreground"
          >
            {data.about.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm uppercase tracking-widest font-semibold text-foreground mb-6">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.about.skills.map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-white border border-border rounded-full text-sm font-medium shadow-sm hover:border-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-border/60 grid grid-cols-2 gap-8"
          >
            <div>
              <p className="text-4xl font-display font-bold">4+</p>
              <p className="text-sm text-muted-foreground mt-1">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold">20+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
