import { motion } from "motion/react";
import { Code2, Mail, FileText, Send } from "lucide-react";

const contactLinks = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "sagarsdave@gmail.com",
    href: "mailto:sagarsdave@gmail.com",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/dave-sagar/",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    label: "GitHub",
    value: "View project work",
    href: "https://github.com/sagar-dave",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-32 overflow-hidden border-t border-white/10 px-6 py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="grid overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-cyan-400/[0.06] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="p-8 md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
              Contact
            </p>

            <h2 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-5xl">
              Let&apos;s connect and talk cloud delivery.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              I&apos;m open to DevOps, Cloud, Platform Engineering, and
              SRE-focused opportunities where I can help build reliable
              infrastructure, automate delivery workflows, and support
              cloud-native systems.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:sagarsdave@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300"
              >
                <Send className="h-4 w-4" />
                Email Me
              </a>

              <a
                href="/Sagar_Dave_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 bg-slate-950/30 p-8 md:p-12 lg:border-l lg:border-t-0">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Direct links
            </p>

            <div className="mt-6 space-y-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: 0.1 + index * 0.06,
                  }}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20 transition group-hover:bg-cyan-400/20">
                    {link.icon}
                  </div>

                  <div>
                    <p className="font-bold text-white">{link.label}</p>
                    <p className="mt-1 text-sm text-slate-400">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm font-semibold text-white">
                Best fit roles
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                DevOps Engineer, Cloud Engineer, SRE, Platform Engineer, or
                software engineering roles with strong infrastructure ownership.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;