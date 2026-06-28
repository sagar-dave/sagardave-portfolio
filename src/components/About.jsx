import { motion } from "motion/react";
import { BriefcaseBusiness, CloudCog, Rocket, ShieldCheck } from "lucide-react";

const storyPoints = [
  {
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    title: "Software engineering base",
    text: "I bring a software engineering background and understand how applications are built, maintained, and delivered beyond local development.",
  },
  {
    icon: <CloudCog className="h-5 w-5" />,
    title: "DevOps direction",
    text: "I am focused on AWS, Docker, Kubernetes, Terraform, GitHub Actions, ArgoCD, and production-style delivery workflows.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Proof-first mindset",
    text: "I document deployments, architecture decisions, screenshots, and teardown notes so projects can be verified instead of just claimed.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Platform growth path",
    text: "My goal is to grow into DevOps, SRE, and platform engineering roles where reliability, automation, and clear ownership matter.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-32 overflow-hidden border-t border-white/10 px-6 py-28"
    >
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-5xl">
            From software engineering to cloud delivery ownership.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            I am building toward DevOps, cloud infrastructure, and platform
            engineering by combining my software engineering foundation with
            hands-on infrastructure, automation, and deployment practice.
          </p>

          <div className="mt-8 rounded-[2rem] border border-cyan-400/20 bg-cyan-400/[0.06] p-6 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Current focus
            </p>
            <p className="mt-3 text-lg font-bold text-white">
              DevOps Engineer → SRE → Platform Engineer
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              The goal is not to memorize tools. The goal is to build systems
              that can be deployed, verified, explained, and improved.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="space-y-5">
            <p className="leading-8 text-slate-300">
              My recent work includes <span className="font-semibold text-white">TradeVault</span>, 
              a cloud-native FastAPI trade journal API designed around a
              production-style DevOps workflow: Docker, AWS, Kubernetes,
              Terraform, GitHub Actions, ArgoCD, RDS PostgreSQL, ALB, and
              External Secrets.
            </p>

            <p className="leading-8 text-slate-300">
              I care about the complete delivery path: how code moves from a
              repository into a running environment, how configuration is
              managed, how infrastructure is provisioned, how deployments are
              validated, and how the work is documented clearly enough for
              another engineer or recruiter to verify.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {storyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: 0.12 + index * 0.06,
                }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
                  {point.icon}
                </div>

                <h3 className="font-bold text-white">{point.title}</h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;