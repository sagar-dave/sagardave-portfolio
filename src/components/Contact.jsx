import { motion } from "motion/react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-24 border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-8 backdrop-blur-xl md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            Let&apos;s connect
          </h2>

          <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
            I&apos;m open to DevOps, Cloud, Platform Engineering, and SRE-focused
            opportunities where I can help build reliable infrastructure,
            automate delivery workflows, and support cloud-native systems.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:sagarsdave@gmail.com"
              className="rounded-full bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/dave-sagar/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/sagar-dave"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;