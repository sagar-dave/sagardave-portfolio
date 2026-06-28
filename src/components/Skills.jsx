import { motion } from "motion/react";
import {
  Boxes,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  ServerCog,
  ShieldCheck,
  Terminal,
} from "lucide-react";

const skillGroups = [
  {
    icon: <CloudCog className="h-5 w-5" />,
    title: "Cloud & Infrastructure",
    description:
      "Designing deployable cloud environments with networking, compute, databases, secrets, and infrastructure-as-code.",
    skills: ["AWS", "EKS", "ALB", "RDS", "Terraform", "External Secrets"],
  },
  {
    icon: <Boxes className="h-5 w-5" />,
    title: "Containers & Kubernetes",
    description:
      "Packaging services into containers and deploying them through Kubernetes-based runtime environments.",
    skills: ["Docker", "Kubernetes", "Helm", "ArgoCD", "GitOps"],
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "CI/CD & GitOps",
    description:
      "Building source-controlled delivery workflows that move code from commit to deployment with clear promotion steps.",
    skills: ["GitHub Actions", "CI/CD Pipelines", "Git", "Automation", "ArgoCD"],
  },
  {
    icon: <Terminal className="h-5 w-5" />,
    title: "Linux & Operations",
    description:
      "Working with Linux systems, shell commands, logs, processes, ports, permissions, and troubleshooting workflows.",
    skills: ["Linux", "Shell", "Logs", "Processes", "Networking", "Troubleshooting"],
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Backend & APIs",
    description:
      "Building API services that can be containerized, deployed, monitored, and connected to cloud data systems.",
    skills: ["FastAPI", "Python", "REST APIs", "PostgreSQL"],
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Security & Reliability Basics",
    description:
      "Applying basic production practices around secrets, access boundaries, repeatable deployments, and proof-based validation.",
    skills: ["Secrets", "IAM Basics", "Validation", "Cost Control", "Documentation"],
  },
];

const capabilityStats = [
  { label: "Primary Focus", value: "DevOps" },
  { label: "Delivery Style", value: "GitOps" },
  { label: "Cloud Target", value: "AWS" },
  { label: "Project Proof", value: "Documented" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 scroll-mt-24 overflow-hidden border-t border-white/10 px-6 py-24"
    >
      <div className="pointer-events-none absolute left-10 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">
              Skills
            </p>

            <h2 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-5xl">
              DevOps capabilities, not just tool names.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              A practical toolkit built around cloud infrastructure,
              containerized delivery, CI/CD automation, GitOps workflows,
              backend APIs, and operational troubleshooting.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilityStats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-bold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.055]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.06,
              }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
                {group.icon}
              </div>

              <h3 className="text-xl font-bold text-white">{group.title}</h3>

              <p className="mt-3 min-h-24 text-sm leading-7 text-slate-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-2 text-xs font-semibold text-cyan-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-white/10 bg-slate-950/50 p-6 backdrop-blur-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
                <ServerCog className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Current direction
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400">
                  Focused on DevOps, cloud infrastructure, Kubernetes,
                  automation, and production-style project delivery with
                  recruiter-verifiable proof.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex justify-center rounded-full border border-cyan-400/30 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              Let’s connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;