export function Footer() {
  return (
    <footer className="border-t-[4px] md:border-t-[6px] border-white/20 bg-black text-white">
      <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 px-5 py-12 md:flex-row md:items-center md:px-10 md:py-16">
        <div className="flex items-center gap-4">
          <div className="size-12 overflow-hidden rounded-full border border-white/20 bg-black p-0.5">
            <img
              src="/logo.png"
              alt="Well'D Emblem"
              className="size-full rounded-full object-cover grayscale"
            />
          </div>
          <div>
            <h4 className="font-cinzel text-lg font-bold tracking-[0.25em] text-white">
              WELL'D
            </h4>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              CRAFTING DIGITAL MASTERPIECES · SINCE 2026
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6 font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
          <span className="text-zinc-500">
            ALL PROJECTS ARCHITECTED WITH WELL'D ENGINE
          </span>
          <div className="hidden sm:block size-1 bg-zinc-700 rounded-full"></div>
          <span className="text-white">
            © 2026 WELL'D ATELIER. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  )
}
