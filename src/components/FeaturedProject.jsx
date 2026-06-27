import { motion } from "motion/react";

function FeaturedProject() {
  return (
    <section
      id="tradevault"
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
            Featured Project
          </p>

          <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            TradeVault
          </h2>

          <p className="text-lg leading-8 text-slate-300">
            A cloud-native FastAPI trade journal API built with a
            production-style DevOps workflow using Docker, AWS EKS, Terraform,
            GitHub Actions, ArgoCD, AWS ALB, RDS PostgreSQL, and External
            Secrets.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://github.com/sagar-dave/tradevault"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View GitHub Repo
            </a>

            <a
              href="https://github.com/sagar-dave/tradevault/tree/main/docs"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              View Proof Docs
            </a>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <h3 className="mb-3 text-xl font-semibold text-white">
              Cloud Infrastructure
            </h3>
            <p className="text-sm leading-7 text-slate-300">
              AWS EKS, ALB, RDS PostgreSQL, External Secrets, and
              Terraform-based infrastructure provisioning.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <h3 className="mb-3 text-xl font-semibold text-white">
              CI/CD + GitOps
            </h3>
            <p className="text-sm leading-7 text-slate-300">
              GitHub Actions image build/promotion pipeline connected with
              ArgoCD for Kubernetes deployment.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <h3 className="mb-3 text-xl font-semibold text-white">
              Proof-Based Delivery
            </h3>
            <p className="text-sm leading-7 text-slate-300">
              AWS resources were destroyed after validation to control cost,
              with screenshots and documentation preserved in GitHub.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedProject;