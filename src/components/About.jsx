import { motion } from "motion/react";

function About() {
  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-24 border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Building toward DevOps, Cloud, and Platform Engineering
          </h2>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <p className="mb-5 leading-8 text-slate-300">
            I am a software engineer focused on moving deeper into DevOps,
            cloud infrastructure, and platform engineering. My recent work
            includes building TradeVault, a cloud-native FastAPI trade journal
            API deployed with a production-style AWS and Kubernetes workflow.
          </p>

          <p className="mb-5 leading-8 text-slate-300">
            I enjoy working across the full delivery path: application
            containerization, infrastructure provisioning, CI/CD pipelines,
            GitOps deployments, secrets management, and cloud cost-aware
            validation.
          </p>

          <p className="leading-8 text-slate-300">
            My goal is to join a team where I can contribute to reliable
            platforms, automate delivery workflows, and keep improving toward
            senior DevOps, SRE, and platform engineering responsibilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;