import { motion } from "framer-motion";
import { ArrowRight, Cloud, Code2, ShieldCheck, Server } from "lucide-react";

const techStack = [
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
  "ArgoCD",
];

function Hero() {
  return (
    <section id="home" className="relative z-10 flex min-h-[calc(100vh-72px)] items-center overflow-hidden px-6 pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-12 top-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
            DevOps • Cloud • Platform Engineering
          </motion.div>

          <motion.h1
            className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            Sagar Dave
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-white bg-clip-text text-transparent">
              builds production-style cloud systems.
            </span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
          >
            I design and ship cloud-native DevOps workflows using AWS, Docker,
            Kubernetes, Terraform, GitHub Actions, ArgoCD, and real deployment
            practices recruiters can actually verify.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58 }}
          >
            <a
              href="#tradevault"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-bold text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300"
            >
              View TradeVault
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>

            <a
              href="/Sagar_Dave_Resume.pdf"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 font-bold text-slate-100 backdrop-blur transition hover:border-cyan-400/60 hover:text-cyan-300"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72 }}
          >
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                  Live Portfolio
                </p>
                <h2 className="mt-1 text-xl font-bold text-white">
                  Cloud Delivery Console
                </h2>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Online
              </div>
            </div>

            <div className="space-y-4">
              <StatusCard
                icon={<Cloud className="h-5 w-5" />}
                title="AWS Amplify Hosting"
                text="Connected to GitHub main branch with automatic deployment."
              />
              <StatusCard
                icon={<Code2 className="h-5 w-5" />}
                title="GitHub CI-ready Workflow"
                text="Code changes push cleanly through source control."
              />
              <StatusCard
                icon={<Server className="h-5 w-5" />}
                title="TradeVault Infrastructure"
                text="EKS, RDS, ALB, Terraform, ArgoCD, and External Secrets."
              />
              <StatusCard
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Proof-Based Delivery"
                text="Screenshots and docs preserved after cost-controlled teardown."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatusCard({ icon, title, text }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]">
      <div className="flex gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;