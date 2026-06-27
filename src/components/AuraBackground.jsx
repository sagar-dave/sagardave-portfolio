import { motion } from "motion/react";

function AuraBackground() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[-10rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[-12rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

export default AuraBackground;