function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Sagar Dave. All rights reserved.</p>

        <p className="text-slate-500">
          Built with React, Vite, Tailwind CSS, and Motion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;