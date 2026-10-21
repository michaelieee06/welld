const words = ['Drag', 'Snap', 'Weld', 'Launch', 'Repeat']

export function Marquee() {
  const row = [...words, ...words, ...words, ...words]
  return (
    <div className="overflow-hidden border-b-[4px] md:border-b-[6px] border-white/20 bg-black py-4 md:py-6 text-white" aria-hidden="true">
      <div className="flex w-max animate-marquee-smooth">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((w, i) => (
              <span key={i} className="flex items-center">
                <span
                  className={`px-6 text-3xl font-extrabold uppercase tracking-tight [font-stretch:75%] md:text-6xl transition-colors duration-300 ${
                    i % 2
                      ? 'font-serif font-normal normal-case italic text-zinc-300 tracking-wide'
                      : 'font-cinzel tracking-wider text-white'
                  }`}
                >
                  {w}
                </span>
                <span className="text-xl md:text-2xl text-white/80 animate-pulse">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
