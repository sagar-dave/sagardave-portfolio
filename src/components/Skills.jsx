import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "EKS", "ALB", "RDS", "Terraform", "External Secrets"],
  },
  {
    title: "Containers & Kubernetes",
    skills: ["Docker", "Kubernetes", "Helm", "ArgoCD", "GitOps"],
  },
  {
    title: "CI/CD & DevOps",
    skills: ["GitHub Actions", "CI/CD Pipelines", "Linux", "Git", "Automation"],
  },
  {
    title: "Backend & Data",
    skills: ["FastAPI", "Python", "PostgreSQL", "REST APIs"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 scroll-mt-24 border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            DevOps toolkit I work with
          </h2>

          <p className="text-lg leading-8 text-slate-300">
            Tools and technologies used across cloud infrastructure,
            containerized deployments, CI/CD pipelines, GitOps workflows, and
            backend API delivery.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;