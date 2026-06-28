function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-slate-400 md:flex-row">
        <div>
          <p className="font-semibold text-slate-300">
            © {new Date().getFullYear()} Sagar Dave
          </p>
          <p className="mt-1 text-slate-500">
            DevOps • Cloud • Platform Engineering
          </p>
        </div>

        <p className="text-center text-slate-500 md:text-right">
          Built with React, Vite, Tailwind CSS, Motion, and AWS Amplify.
        </p>
      </div>
    </footer>
  );
}

export default Footer;