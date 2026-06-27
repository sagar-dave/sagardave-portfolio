function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight text-white">
          Sagar Dave
        </a>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#tradevault" className="transition hover:text-cyan-300">
            TradeVault
          </a>
          <a href="#skills" className="transition hover:text-cyan-300">
            Skills
          </a>
          <a href="#about" className="transition hover:text-cyan-300">
            About
          </a>
          <a href="#contact" className="transition hover:text-cyan-300">
            Contact
          </a>
        </div>

        <a
          href="/Sagar_Dave_Resume.pdf"
          className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;