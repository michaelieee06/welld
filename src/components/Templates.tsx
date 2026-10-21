import { useState } from 'react'
import { Label } from './shared'
import { Eye, ArrowUpRight } from 'lucide-react'
import { LivePreviewModal } from './LivePreviewModal'

const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=1800&h=900&fit=crop&auto=format`

export interface ProjectTemplate {
  n: string
  name: string
  tag: string
  url: string
  img: string
  alt: string
  copy: string
}

const templates: ProjectTemplate[] = [
  {
    n: '01',
    name: 'yeonlee',
    tag: 'Creative Portfolio · Art Direction',
    url: 'https://yeonlee.web.app',
    img: U('1618005182384-a83a8bd57fbe'), // Avant-garde modern graphic/editorial aesthetic
    alt: 'Avant-garde creative editorial designer portfolio',
    copy: 'Persona-inspired creative portfolio featuring bold brutalist typography, fluid interactive transitions, and avant-garde art direction.',
  },
  {
    n: '02',
    name: 'Desa Lembanna',
    tag: 'Coastal Eco-Tourism · Bulukumba',
    url: 'https://lembannaarabahari.github.io/lembannaarabahari',
    img: U('1507525428034-b723cf961d3e'), // Turquoise coastal ocean & cliff sanctuary
    alt: 'Bulukumba turquoise waters and coastal cliffs',
    copy: 'Destination portal highlighting pristine beaches, dramatic limestone cliffs, and historic seafaring maritime expeditions.',
  },
  {
    n: '03',
    name: 'Purunik Kerajinan',
    tag: 'Artisan Purun Crafts · Tabalong',
    url: 'https://purunikk-db.web.app/',
    img: U('1590736969955-71cc94801759'), // Natural woven fibers & artisanal craft goods
    alt: 'Handmade woven purun and rattan crafts',
    copy: 'Heritage artisan commerce empowering South Kalimantan craftswomen with eco-friendly woven Purun, Rotan, and fiber goods.',
  },
  {
    n: '04',
    name: 'UBM Belajar',
    tag: 'Academic Hub · Digital Repository',
    url: 'https://ubmbelajar.web.app',
    img: U('1522071820081-009f0129c71c'), // Modern architecture, digital workspace & knowledge hub
    alt: 'Collaborative modern study and digital library repository',
    copy: 'Centralized university knowledge engine providing structured formula sheets, study materials, and unified curriculum archives.',
  },
  {
    n: '05',
    name: 'Desa Golo Loni',
    tag: 'Eco-Village · Flores Agrotourism',
    url: 'http://desagololoni.github.io/gololoni',
    img: U('1500530855697-b586d89ba3ee'), // Verdant green agricultural terraces & mountain mist
    alt: 'Verdant terraces and mountain rivers in Flores eco-village',
    copy: 'Integrated nature sanctuary gateway highlighting agro-tourism, serene river trekking, and indigenous Manggarai Timur folklore.',
  },
  {
    n: '06',
    name: 'Dapur Pepaya',
    tag: 'Artisanal Kitchen · Gourmet Dining',
    url: 'https://dapurpepaya.github.io/dapurpepaya',
    img: U('1555396273-367ea4eb4db5'), // Dark moody culinary dining & kitchen craft
    alt: 'Chef plated gourmet culinary dish in moody lighting',
    copy: 'Artisanal culinary dining portal offering authentic heritage comfort recipes, custom catering reservations, and curated menus.',
  },
]

export function Templates() {
  const [active, setActive] = useState(0)
  const [modalProject, setModalProject] = useState<ProjectTemplate | null>(null)

  return (
    <>
      <section id="templates" className="border-b-[4px] md:border-b-[6px] border-white/20 bg-black text-white">
        {/* Section Header */}
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-6 px-5 py-12 md:flex-row md:items-end md:px-10 md:py-16">
          <div>
            <Label className="text-zinc-400">FRAME 02 · ARCHITECTURAL REEL</Label>
            <h2 className="mt-3 text-4xl font-extrabold leading-[0.95] tracking-tight font-cinzel md:text-8xl text-white">
              Pick a strip.
              <br />
              <span className="font-serif font-normal italic text-zinc-300">Make it yours.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-2 max-w-md">
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-zinc-400 leading-relaxed font-sans">
              Every deployment is a bespoke digital architecture. Engineered with precision, welded with passion. Expand any strip to inspect the live craftsmanship.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-block size-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                6 PRODUCTION DEPLOYMENTS ONLINE
              </span>
            </div>
          </div>
        </div>

        {/* Strips Accordion */}
        <div className="border-t-[4px] md:border-t-[6px] border-white/20">
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
                className={`group relative block w-full cursor-pointer overflow-hidden border-b-[4px] md:border-b-[6px] border-white/20 text-left transition-[height] duration-700 ease-[cubic-bezier(.7,0,.2,1)] last:border-b-0 focus:outline-none ${
                  on ? 'h-[460px] md:h-[600px]' : 'h-[120px] md:h-[140px]'
                }`}
              >
                {/* Background Hero Image */}
                <img
                  src={t.img}
                  alt={t.alt}
                  loading="lazy"
                  className={`absolute inset-0 size-full bg-black object-cover transition-transform duration-1000 ${
                    on ? 'scale-100' : 'scale-110'
                  }`}
                />

                {/* Dark Luxury Tone Overlays */}
                <div
                  className={`absolute inset-0 transition-colors duration-700 ${
                    on
                      ? 'bg-gradient-to-t from-black via-black/60 to-black/20'
                      : 'bg-black/75 group-hover:bg-black/60 backdrop-grayscale'
                  }`}
                />

                {/* Top Strip Accent for Active State */}
                {on && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                )}

                {/* Strip Content */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 text-white md:flex-row md:items-end md:justify-between md:p-10">
                  {/* Left: Project Number & Artistic Title */}
                  <div className={`flex items-baseline gap-4 md:gap-8 ${on ? '' : 'mb-1 md:mb-0'}`}>
                    <span className="font-mono text-sm md:text-xl font-bold tracking-widest text-zinc-400">
                      {t.n}
                    </span>
                    <h3 className="font-cinzel text-3xl font-extrabold leading-none tracking-wider text-white md:text-6xl lg:text-7xl group-hover:text-zinc-100 transition-colors">
                      {t.name}
                    </h3>
                  </div>

                  {/* Right: Tag & Bold Description & Action Buttons */}
                  <div className="flex flex-col gap-3 md:items-end">
                    <Label className="w-fit border border-white/40 bg-black/60 px-3 py-1 text-white backdrop-blur-sm">
                      {t.tag}
                    </Label>

                    <div
                      className={`grid transition-all duration-700 ${
                        on ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="max-w-md text-xs md:text-sm font-bold uppercase tracking-wider text-zinc-200 md:text-right font-sans leading-relaxed">
                          {t.copy}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-3 md:justify-end">
                          {/* Live Frame Modal Viewer */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setModalProject(t)
                            }}
                            className="inline-flex items-center gap-2 border border-white/40 bg-zinc-900/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black font-mono shadow-sm"
                          >
                            <Eye className="size-3.5" />
                            <span>Quick Preview</span>
                          </button>

                          {/* Direct Live Website Launch */}
                          <a
                            href={t.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 bg-white px-5 py-2 text-xs font-extrabold uppercase tracking-widest text-black transition-all duration-300 hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] font-mono group/btn"
                          >
                            <span>Launch Live Site</span>
                            <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Live Iframe Preview Modal */}
      <LivePreviewModal
        isOpen={!!modalProject}
        onClose={() => setModalProject(null)}
        project={modalProject}
      />
    </>
  )
}
