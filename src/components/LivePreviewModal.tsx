import { X, ExternalLink, RefreshCw, ShieldCheck, Globe } from 'lucide-react'
import { useState } from 'react'

interface LivePreviewModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    name: string
    url: string
    tag: string
    copy: string
  } | null
}

export function LivePreviewModal({ isOpen, onClose, project }: LivePreviewModalProps) {
  const [iframeKey, setIframeKey] = useState(0)

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative flex h-full max-h-[92vh] w-full max-w-[1300px] flex-col overflow-hidden rounded-none border-2 border-white/30 bg-black shadow-[0_0_50px_rgba(255,255,255,0.1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Browser Top Chrome */}
        <div className="flex items-center justify-between border-b-2 border-white/20 bg-zinc-950 px-4 py-3 text-white">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="size-3 rounded-full bg-red-500/80 inline-block border border-red-700/50"></span>
              <span className="size-3 rounded-full bg-yellow-500/80 inline-block border border-yellow-700/50"></span>
              <span className="size-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-700/50"></span>
            </div>

            <div className="hidden sm:flex items-center gap-2 border border-white/20 bg-black px-3 py-1 font-mono text-xs text-zinc-300">
              <Globe className="size-3.5 text-zinc-400" />
              <span className="font-bold tracking-wider">{project.url.replace(/^https?:\/\//, '')}</span>
              <ShieldCheck className="size-3.5 text-emerald-400 ml-1" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-cinzel text-sm font-bold tracking-widest text-white hidden md:inline-block">
              {project.name}
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 border border-white/10 px-2 py-0.5">
              {project.tag}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIframeKey((prev) => prev + 1)}
              title="Refresh frame"
              className="p-1.5 text-zinc-400 hover:text-white transition-colors border border-white/10 hover:border-white/30"
            >
              <RefreshCw className="size-4" />
            </button>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-black transition hover:bg-zinc-200"
            >
              <span>Open Tab</span>
              <ExternalLink className="size-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white transition-colors border border-white/10 hover:border-white/30"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Live Frame Container */}
        <div className="relative flex-1 w-full bg-zinc-900">
          <iframe
            key={iframeKey}
            src={project.url}
            title={`${project.name} Live Frame`}
            className="size-full border-0 bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            loading="lazy"
          />

          {/* Fallback Notice Overlay (if framed site restricts embedding) */}
          <div className="pointer-events-none absolute bottom-4 right-4 max-w-sm border border-white/20 bg-black/90 p-3 backdrop-blur-md">
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
              Notice: If this preview appears blank due to third-party host security headers, click <span className="text-white underline font-bold">Open Tab</span> to view the live site directly.
            </p>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t-2 border-white/20 bg-black px-4 py-2.5">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-sans">
            {project.copy}
          </p>
          <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest shrink-0">
            WELL'D ARCHITECTURE · LIVE CLIENT DEPLOYMENT
          </span>
        </div>
      </div>
    </div>
  )
}
