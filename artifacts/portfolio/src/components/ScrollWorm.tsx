import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollWorm() {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed left-4 md:left-8 top-0 h-full z-40 pointer-events-none flex items-start justify-center" style={{ width: 32 }}>
      <svg
        viewBox="0 0 32 900"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M16,0 C28,40 4,80 16,120 C28,160 4,200 16,240 C28,280 4,320 16,360 C28,400 4,440 16,480 C28,520 4,560 16,600 C28,640 4,680 16,720 C28,760 4,800 16,840 C28,880 4,920 16,900"
          stroke="#4ade80"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
          fill="none"
          opacity={0.7}
        />
      </svg>
    </div>
  );
}
