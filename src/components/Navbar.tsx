export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-[3px] border-white/20 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-5 py-3 md:px-10 md:py-4">
        <div className="size-11 md:size-13 overflow-hidden rounded-full border border-white/30 bg-black p-0.5">
          <img
            src="/logo.png"
            alt="Well'D logo"
            className="size-full rounded-full object-cover"
          />
        </div>
        <span className="font-cinzel text-2xl md:text-3xl font-bold tracking-[0.2em] text-white">
          Well'D
        </span>
      </div>
    </header>
  )
}
