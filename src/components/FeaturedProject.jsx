import { motion } from "motion/react";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  CloudCog,
  Database,
  FileCheck2,
  GitBranch,
  Code2,
  Layers3,
  Server,
  ShieldCheck,
} from "lucide-react";

const stack = [
  "FastAPI",
  "Docker",
  "AWS EKS",
  "Terraform",
  "GitHub Actions",
  "ArgoCD",
  "ALB",
  "RDS PostgreSQL",
  "External Secrets",
];

const highlights = [
  {
    icon: <CloudCog className="h-5 w-5" />,
    title: "Cloud Infrastructure",
    text: "AWS EKS, ALB, RDS PostgreSQL, External Secrets, and Terraform-based infrastructure provisioning.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "CI/CD + GitOps",
    text: "GitHub Actions builds and promotes Docker images, while ArgoCD handles Kubernetes deployment through GitOps.",
  },
  {
    icon: <FileCheck2 className="h-5 w-5" />,
    title: "Proof-Based Delivery",
    text: "Resources were destroyed after validation to control cost, with screenshots and documentation preserved in GitHub.",
  },
];

const flow = [
  { label: "FastAPI", icon: <Server className="h-4 w-4" /> },
  { label: "Docker", icon: <Boxes className="h-4 w-4" /> },
  { label: "GitHub Actions", icon: <GitBranch className="h-4 w-4" /> },
  { label: "EKS", icon: <Layers3 className="h-4 w-4" /> },
  { label: "RDS", icon: <Database className="h-4 w-4" /> },
];

function FeaturedProject() {
  return (
    <section
      id="tradevault"
      className="relative z-10 scroll-mt-28 overflow-hidden border-t border-white/10 px-6 py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">
              Featured Project
            </p>

            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              TradeVault
            </h2>

            <p className="mt-4 text-xl font-semibold text-cyan-200">
              Cloud-native trading journal platform.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              A production-style DevOps project built around a FastAPI backend,
              containerized delivery, AWS infrastructure, Kubernetes deployment,
              GitOps workflow, and proof-based documentation.
            </p>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/[0.06] p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Delivery Story
                </p>
                <h3 className="mt-1 text-2xl font-bold text-white">
                  Build → Ship → Verify → Tear Down
                </h3>
              </div>

              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Cost-Controlled
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <StoryPoint title="Problem" text="Create a real deployable API, not a toy demo." />
              <StoryPoint title="Architecture" text="API, database, secrets, ingress, and cloud infra." />
              <StoryPoint title="Automation" text="GitHub Actions + ArgoCD delivery workflow." />
              <StoryPoint title="Proof" text="Screenshots and docs preserved after teardown." />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-8 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl md:p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <Layers3 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Architecture Flow
              </p>
              <h3 className="text-xl font-bold text-white">
                From source code to cloud deployment
              </h3>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-5">
            {flow.map((item, index) => (
              <div key={item.label} className="relative">
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    {item.icon}
                  </div>
                  <p className="font-semibold text-white">{item.label}</p>
                </div>

                {index < flow.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-cyan-300/60 md:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
        >
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.055]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                {item.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.22 }}
        >
          <a
            href="https://github.com/sagar-dave/tradevault"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            <Code2 className="h-4 w-4" />
            View GitHub Repo
          </a>

          <a
            href="https://github.com/sagar-dave/tradevault/tree/main/docs"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            <ShieldCheck className="h-4 w-4" />
            View Proof Docs
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function StoryPoint({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
      <div className="mb-2 flex items-center gap-2 text-cyan-300">
        <CheckCircle2 className="h-4 w-4" />
        <h4 className="font-semibold text-white">{title}</h4>
      </div>
      <p className="text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}

export default FeaturedProject;