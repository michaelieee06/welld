import { useState } from 'react'
import { Label } from './shared'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

const templates = [
  {
    n: '01',
    name: 'yeonlee',
    tag: 'Creative portfolio',
    url: 'https://yeonlee.web.app',
    img: '/projects/yeonlee.jpg',
    alt: 'yeonlee website screenshot',
    copy: 'Persona-style UI, bold poster typography, and case studies that hit like a critical strike.',
  },
  {
    n: '02',
    name: 'Lembanna',
    tag: 'Coastal village',
    url: 'https://lembannaarabahari.github.io/lembannaarabahari',
    img: '/projects/lembanna.jpg',
    alt: 'Desa Wisata Lembanna website screenshot',
    copy: 'Turquoise cliff views, sea-cave guides, and route maps for Bulukumba’s coastal edge.',
  },
  {
    n: '03',
    name: 'Purunik',
    tag: 'Woven crafts',
    url: 'https://purunikk-db.web.app/',
    img: '/projects/purunik.jpg',
    alt: 'Purunik Kerajinan website screenshot',
    copy: 'Handmade purun bags, raw woven textures, and direct orders from Tabalong artisans.',
  },
  {
    n: '04',
    name: 'UBM Belajar',
    tag: 'Study repository',
    url: 'https://ubmbelajar.web.app',
    img: '/projects/ubmbelajar.jpg',
    alt: 'UBM Belajar website screenshot',
    copy: 'Exam formula sheets, course slide archives, and lecture notes — searchable in two clicks.',
  },
  {
    n: '05',
    name: 'Desa Golo Loni',
    tag: 'Eco-village',
    url: 'http://desagololoni.github.io/gololoni',
    img: '/projects/gololoni.jpg',
    alt: 'Desa Golo Loni website screenshot',
    copy: 'River tubing spots, coffee harvest dates, and homestay bookings in the Flores hills.',
  },
  {
    n: '06',
    name: 'Dapur Pepaya',
    tag: 'Kitchen & catering',
    url: 'https://dapurpepaya.github.io/dapurpepaya',
    img: '/projects/dapurpepaya.jpg',
    alt: 'Dapur Pepaya website screenshot',
    copy: 'Daily catering menus, boxed lunch drops, and family recipes made from scratch.',
  },
]

export function Templates() {
  const [active, setActive] = useState(0)

  return (
    <section id="templates" className="bg-black text-white">
      {/* Header section */}
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 px-6 py-14 md:flex-row md:items-end md:px-12 md:py-20">
        <div>
          <Label>Frame 02 · Project reel</Label>
          <h2 className="mt-4 font-cinzel text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[0.92] tracking-tight text-white">
            Pick a strip.
            <br />
            <span className="font-serif font-normal italic text-zinc-300">Make it yours.</span>
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-400 font-sans leading-relaxed">
          Every site is a stack of bands built to measure. Tap one to open it up.
        </p>
      </div>

      {/* Accordion Reel */}
      <div className="border-t border-white/10">
        {templates.map((t, i) => {
          const on = i === active
          return (
            <div
              key={t.n}
              onClick={() => setActive(i)}
              onMouseEnter={() => window.matchMedia('(hover:hover)').matches && setActive(i)}
              aria-expanded={on}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActive(i)
                }
              }}
              className={`group relative block w-full cursor-pointer overflow-hidden border-b border-white/10 text-left transition-[height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none ${
                on ? 'h-[520px] md:h-[640px]' : 'h-[105px] md:h-[125px]'
              }`}
            >
              {/* Screenshot background */}
              <img
                src={t.img}
                alt={t.alt}
                loading="lazy"
                className={`absolute inset-0 size-full bg-black object-cover object-top transition-all duration-1000 ${
                  on ? 'scale-100 opacity-100' : 'scale-105 opacity-50 group-hover:opacity-70'
                }`}
              />

              {/* Shading Vignette */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  on
                    ? 'bg-gradient-to-t from-black via-black/45 to-black/25'
                    : 'bg-black/70 group-hover:bg-black/55 backdrop-blur-[1px]'
                }`}
              />

              {/* Collapsed State Bar (visible when inactive) */}
              <div
                className={`absolute inset-x-0 top-0 flex h-[105px] md:h-[125px] items-center justify-between px-6 md:px-12 transition-opacity duration-300 ${
                  on ? 'pointer-events-none opacity-0' : 'opacity-100'
                }`}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="w-8 md:w-10 font-mono text-xs md:text-sm font-bold tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    {t.n}
                  </span>
                  <span className="font-serif font-normal italic text-3xl md:text-5xl text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] group-hover:text-zinc-100 transition-colors">
                    {t.name}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden sm:inline-flex rounded-full border border-white/15 bg-black/60 px-3.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-300 backdrop-blur-md">
                    {t.tag}
                  </span>
                  <div className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-zinc-400 backdrop-blur-md transition-transform duration-300 group-hover:border-white/30 group-hover:text-white">
                    <ChevronDown className="size-4" />
                  </div>
                </div>
              </div>

              {/* Expanded State HUD Dock (visible when active) */}
              <div
                className={`absolute inset-x-0 bottom-0 p-5 md:p-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  on ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
                }`}
              >
                <div className="mx-auto max-w-[1400px] rounded-2xl border border-white/15 bg-black/85 p-6 md:p-8 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.9)] flex flex-col md:flex-row md:items-end justify-between gap-6">
                  {/* Left Metadata Block */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-zinc-400 tracking-wider">
                        {t.n}
                      </span>
                      <span className="inline-block size-1 rounded-full bg-zinc-600"></span>
                      <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-0.5 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-300">
                        {t.tag}
                      </span>
                    </div>

                    <h3 className="font-serif font-normal italic text-4xl sm:text-5xl md:text-6xl text-white leading-none tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                      {t.name}
                    </h3>

                    <p className="max-w-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-300 font-sans leading-relaxed">
                      {t.copy}
                    </p>
                  </div>

                  {/* Right Action Button */}
                  <div className="shrink-0">
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-bold text-black transition-all duration-300 hover:bg-zinc-200 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] font-sans"
                    >
                      <span>Visit site</span>
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
