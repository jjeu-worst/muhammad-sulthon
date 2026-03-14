import { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function WormDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        pathLength: 1,
        opacity: 1,
        transition: { duration: 1.8, ease: "easeInOut" },
      });
    }
  }, [isInView, controls]);

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
          initial={{ pathLength: 0, opacity: 0 }}
          animate={controls}
          fill="none"
        />
      </svg>
    </div>
  );
}
