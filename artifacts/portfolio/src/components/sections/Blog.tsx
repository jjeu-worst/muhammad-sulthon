import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Kenapa Flutter Jadi Pilihan Utama untuk Mobile Dev",
    desc: "Flutter vs React Native — perbandingan mendalam dari sudut pandang developer yang sudah pakai keduanya.",
    tag: "Mobile",
    date: "Mar 2024",
    readTime: "5 min",
  },
  {
    title: "Membangun REST API yang Clean dengan Node.js & Express",
    desc: "Best practice struktur folder, error handling, dan validasi request untuk API yang mudah dimaintain.",
    tag: "Backend",
    date: "Feb 2024",
    readTime: "8 min",
  },
  {
    title: "Tips Animasi Halus di React dengan Framer Motion",
    desc: "Cara bikin animasi yang smooth dan performant tanpa bikin website jadi berat.",
    tag: "Frontend",
    date: "Jan 2024",
    readTime: "6 min",
  },
  {
    title: "Database Design untuk Aplikasi Skala Besar",
    desc: "Strategi indexing, normalisasi, dan query optimization yang perlu kamu tahu dari awal.",
    tag: "Database",
    date: "Des 2023",
    readTime: "10 min",
  },
];

const tagColors: Record<string, string> = {
  Mobile: "bg-purple-100 text-purple-700",
  Backend: "bg-green-100 text-green-700",
  Frontend: "bg-blue-100 text-blue-700",
  Database: "bg-orange-100 text-orange-700",
};

export function Blog() {
  return (
    <section id="blog" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
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
              Blog.
            </h2>
            <div className="w-12 h-1 bg-foreground mt-8" />
            <p className="mt-6 text-muted-foreground">
              Artikel dan tutorial seputar dunia pengembangan software.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-5">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 bg-white border border-border rounded-3xl hover:border-foreground/20 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[post.tag]}`}>
                      {post.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date} · {post.readTime} read</span>
                  </div>
                  <h3 className="font-display font-bold text-lg leading-snug mb-2 group-hover:text-foreground/80 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.desc}</p>
                </div>
                <div className="w-9 h-9 border border-border rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:border-foreground group-hover:text-background transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
