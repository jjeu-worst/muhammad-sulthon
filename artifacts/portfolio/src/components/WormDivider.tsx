import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function WormDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative w-full flex justify-center py-8 overflow-hidden">
      <svg
        viewBox="0 0 1200 120"
        className="w-full max-w-4xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,60 C100,10 200,110 300,60 C400,10 500,110 600,60 C700,10 800,110 900,60 C1000,10 1100,110 1200,60"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-border"
          style={{ pathLength, opacity }}
          fill="none"
        />
      </svg>
    </div>
  );
}
