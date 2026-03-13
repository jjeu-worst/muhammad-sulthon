import { motion } from "framer-motion";

export function Blob() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[320px] h-[320px] md:w-[520px] md:h-[520px] pointer-events-none"
    >
      <div className="w-full h-full glass-blob" />
    </motion.div>
  );
}
