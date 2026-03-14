import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Full-Stack Web Development",
    issuer: "Dicoding Indonesia",
    year: "2023",
    color: "bg-blue-50 border-blue-200",
  },
  {
    title: "Flutter Development Bootcamp",
    issuer: "Udemy",
    year: "2022",
    color: "bg-purple-50 border-purple-200",
  },
  {
    title: "React - The Complete Guide",
    issuer: "Udemy",
    year: "2022",
    color: "bg-cyan-50 border-cyan-200",
  },
  {
    title: "Node.js & Express Development",
    issuer: "Coursera",
    year: "2021",
    color: "bg-green-50 border-green-200",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Google",
    year: "2021",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    title: "Cloud Practitioner Essentials",
    issuer: "AWS",
    year: "2023",
    color: "bg-orange-50 border-orange-200",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
            Certificates.
          </h2>
          <p className="mt-4 text-white/50 max-w-md">
            Sertifikat dan pencapaian yang sudah saya raih.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg leading-tight mb-2">{cert.title}</h3>
              <p className="text-white/50 text-sm">{cert.issuer}</p>
              <p className="text-white/30 text-xs mt-3 font-mono">{cert.year}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
