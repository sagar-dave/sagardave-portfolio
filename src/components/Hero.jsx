import { motion } from "motion/react";

function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          DevOps • Cloud • Platform Engineering
        </motion.p>

        <motion.h1
          className="mb-6 text-5xl font-bold tracking-tight md:text-7xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Sagar Dave
        </motion.h1>

        <motion.p
          className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 md:text-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          I build cloud-native systems using AWS, Docker, Kubernetes,
          Terraform, GitHub Actions, ArgoCD, and production-style DevOps
          workflows.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a
            href="#tradevault"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View TradeVault
          </a>

          <a
            href="/Sagar_Dave_Resume.pdf"
            className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;