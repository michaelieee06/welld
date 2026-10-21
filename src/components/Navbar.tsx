export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/15 bg-black/90 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-3 md:px-10 md:py-4">
        {/* Brand identity: strictly logo and company name Well'D */}
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="size-11 md:size-13 overflow-hidden rounded-full border border-white/30 bg-black p-0.5 shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-transform duration-500 group-hover:scale-105 group-hover:border-white">
              <img
                src="/logo.png"
                alt="Well'D Logo"
                className="size-full rounded-full object-cover grayscale contrast-125"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.28em] text-white">
              WELL'D
            </span>
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 font-mono">
              WEBSITE SERVICE BUILDER
            </span>
          </div>
        </div>

        {/* Subtle atelier status badge */}
        <div className="hidden sm:flex items-center gap-2 border border-white/15 bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-300">
            SHOWCASE · LIVE PROJECTS
          </span>
        </div>
      </div>
    </header>
  )
}
