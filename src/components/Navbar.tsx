export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-6 py-4 md:px-12">
        {/* Strictly the logo and the company name Well'D */}
        <div className="relative size-12 md:size-14 shrink-0 overflow-hidden rounded-full border border-white/25 bg-black p-0.5 shadow-[0_0_20px_rgba(255,255,255,0.06)] transition-transform duration-300 hover:scale-105">
          <img
            src="/logo.png"
            alt="Well'D"
            className="size-full rounded-full object-cover"
          />
        </div>
        <span className="font-cinzel text-2xl md:text-3xl font-bold tracking-[0.25em] text-white">
          Well'D
        </span>
      </div>
    </header>
  )
}
