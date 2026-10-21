const words = ['Drag', 'Snap', 'Weld', 'Launch', 'Repeat']

export function Marquee() {
  const row = [...words, ...words, ...words, ...words]
  return (
    <div className="overflow-hidden border-b border-white/10 bg-black py-4 md:py-5 text-white select-none" aria-hidden="true">
      <div className="flex w-max animate-marquee-smooth">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((w, i) => (
              <span key={i} className="flex items-center">
                <span
                  className={`px-6 md:px-8 text-2xl font-extrabold uppercase tracking-tight md:text-5xl transition-colors duration-300 ${
                    i % 2
                      ? 'font-serif font-normal normal-case italic text-zinc-400'
                      : 'font-cinzel tracking-wider text-white'
                  }`}
                >
                  {w}
                </span>
                <span className="text-base md:text-lg text-zinc-600">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
