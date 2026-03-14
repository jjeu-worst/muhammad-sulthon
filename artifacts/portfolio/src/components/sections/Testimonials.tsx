import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "CEO, Startup Digital",
    text: "Kerja sama yang luar biasa. Hasil kerja sangat memuaskan, tepat waktu, dan komunikasinya jelas. Sangat rekomendasikan!",
    avatar: "AP",
  },
  {
    name: "Siti Rahma",
    role: "Product Manager, Tech Company",
    text: "Developernya profesional banget. Aplikasi yang dibuat sesuai ekspektasi bahkan melebihi yang saya bayangkan.",
    avatar: "SR",
  },
  {
    name: "Budi Santoso",
    role: "Founder, E-Commerce",
    text: "Responsif dan paham kebutuhan klien. Hasil kerjanya clean dan scalable. Pasti akan kerja sama lagi ke depannya.",
    avatar: "BS",
  },
  {
    name: "Dewi Kusuma",
    role: "UI/UX Designer",
    text: "Sangat mudah diajak kolaborasi. Bisa translate design ke kode dengan sempurna, detail-oriented dan kreatif.",
    avatar: "DK",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
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
              What They<br />Say.
            </h2>
            <div className="w-12 h-1 bg-foreground mt-8" />
          </motion.div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-white border border-border rounded-3xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-muted-foreground leading-relaxed text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/60">
                <div className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
