import { useState } from 'react'
import { Label } from './shared'

const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=1800&h=900&fit=crop&auto=format`

const templates = [
  {
    n: '01',
    name: 'yeonlee',
    tag: 'Creative portfolio',
    url: 'https://yeonlee.web.app',
    img: U('1618005182384-a83a8bd57fbe'),
    alt: 'Creative design portfolio showcase',
    copy: 'Persona-style UI, bold poster typography, and case studies that hit like a critical strike.',
  },
  {
    n: '02',
    name: 'Lembanna',
    tag: 'Coastal village',
    url: 'https://lembannaarabahari.github.io/lembannaarabahari',
    img: U('1507525428034-b723cf961d3e'),
    alt: 'Coastal cliffs and turquoise waters',
    copy: 'Turquoise cliff views, sea-cave guides, and route maps for Bulukumba’s coastal edge.',
  },
  {
    n: '03',
    name: 'Purunik',
    tag: 'Woven crafts',
    url: 'https://purunikk-db.web.app/',
    img: U('1590736969955-71cc94801759'),
    alt: 'Handwoven natural purun fiber crafts',
    copy: 'Handmade purun bags, raw woven textures, and direct orders from Tabalong artisans.',
  },
  {
    n: '04',
    name: 'UBM Belajar',
    tag: 'Study repository',
    url: 'https://ubmbelajar.web.app',
    img: U('1522071820081-009f0129c71c'),
    alt: 'Study desk and research materials',
    copy: 'Exam formula sheets, course slide archives, and lecture notes — searchable in two clicks.',
  },
  {
    n: '05',
    name: 'Desa Golo Loni',
    tag: 'Eco-village',
    url: 'http://desagololoni.github.io/gololoni',
    img: U('1500530855697-b586d89ba3ee'),
    alt: 'Highland terraces and river valley',
    copy: 'River tubing spots, coffee harvest dates, and homestay bookings in the Flores hills.',
  },
  {
    n: '06',
    name: 'Dapur Pepaya',
    tag: 'Kitchen & catering',
    url: 'https://dapurpepaya.github.io/dapurpepaya',
    img: U('1555396273-367ea4eb4db5'),
    alt: 'Freshly prepared food on kitchen table',
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
                className={`absolute inset-0 size-full bg-black object-cover transition-transform duration-1000 ${
                  on ? 'scale-100' : 'scale-110'
                }`}
              />
              <div
                className={`absolute inset-0 transition-colors duration-700 ${
                  on
                    ? 'bg-gradient-to-t from-black/90 via-black/30 to-transparent'
                    : 'bg-black/75 group-hover:bg-black/60'
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 text-white md:flex-row md:items-end md:justify-between md:p-10">
                <div className={`flex items-center gap-4 md:gap-8 ${on ? '' : 'mb-1 md:mb-0'}`}>
                  <span className="font-mono text-sm md:text-lg font-bold text-zinc-400">{t.n}</span>
                  <span className="font-serif font-normal italic text-4xl leading-none tracking-tight md:text-7xl text-white">
                    {t.name}
                  </span>
                </div>
                <div className="flex flex-col gap-3 md:items-end">
                  <Label className="w-fit border-2 border-white/40 bg-black/60 px-2.5 py-1 text-white">
                    {t.tag}
                  </Label>
                  <div
                    className={`grid transition-all duration-700 ${
                      on ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-sm text-xs md:text-sm font-bold tracking-wide text-zinc-200 md:text-right font-sans">
                        {t.copy}
                      </p>
                      <a
                        href={t.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 inline-block bg-white px-4 py-2 font-bold text-black transition-colors hover:bg-zinc-200"
                      >
                        Visit site →
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
