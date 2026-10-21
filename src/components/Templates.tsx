import { useState } from 'react'
import { Label } from './shared'

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
    <section id="templates" className="border-b-[6px] border-white/20 bg-black text-white">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 px-5 py-12 md:flex-row md:items-end md:px-10 md:py-16">
        <div>
          <Label className="text-zinc-400">Frame 02 · Project reel</Label>
          <h2 className="mt-3 text-5xl font-extrabold leading-[0.9] tracking-tight font-cinzel md:text-8xl text-white">
            Pick a strip.
            <br />
            <span className="font-serif font-normal italic text-zinc-300">Make it yours.</span>
          </h2>
        </div>
        <p className="max-w-sm text-base md:text-lg text-zinc-300 font-bold">
          Every site is a stack of bands built to measure. Tap one to open it up.
        </p>
      </div>

      <div className="border-t-[6px] border-white/20">
        {templates.map((t, i) => {
          const on = i === active
          return (
            <button
              key={t.n}
              onClick={() => setActive(i)}
              onMouseEnter={() => window.matchMedia('(hover:hover)').matches && setActive(i)}
              aria-expanded={on}
              className={`group relative block w-full overflow-hidden border-b-[6px] border-white/20 text-left transition-[height] duration-700 ease-[cubic-bezier(.7,0,.2,1)] last:border-b-0 cursor-pointer ${
                on ? 'h-[430px] md:h-[560px]' : 'h-[120px] md:h-[140px]'
              }`}
            >
              <img
                src={t.img}
                alt={t.alt}
                loading="lazy"
                className={`absolute inset-0 size-full bg-black object-cover object-top transition-transform duration-1000 ${
                  on ? 'scale-100' : 'scale-105'
                }`}
              />
              <div
                className={`absolute inset-0 transition-colors duration-700 ${
                  on
                    ? 'bg-gradient-to-t from-black via-black/75 to-black/25'
                    : 'bg-black/80 group-hover:bg-black/65'
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 text-white md:flex-row md:items-end md:justify-between md:p-10 lg:p-12">
                <div className={`flex items-baseline gap-4 md:gap-8 ${on ? '' : 'mb-1 md:mb-0'}`}>
                  <span className="font-mono text-sm md:text-xl font-bold text-zinc-400">{t.n}</span>
                  <span className="font-serif font-normal italic text-4xl leading-none tracking-tight md:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    {t.name}
                  </span>
                </div>
                <div className="flex flex-col gap-3 items-start md:items-end">
                  <Label className="w-fit border border-white/40 bg-black/80 px-3 py-1 text-white backdrop-blur-md">
                    {t.tag}
                  </Label>
                  <div
                    className={`grid transition-all duration-700 ${
                      on ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden flex flex-col items-start md:items-end">
                      <p className="max-w-md text-xs md:text-sm font-bold tracking-wide text-zinc-200 text-left md:text-right font-sans leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        {t.copy}
                      </p>
                      <a
                        href={t.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-4 inline-flex items-center gap-2 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200 self-start md:self-end shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer"
                      >
                        <span>Visit site</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
