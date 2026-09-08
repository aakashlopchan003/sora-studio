import { useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
]

const WHATSAPP_URL = "https://wa.me/9779704556401?text=Hi%20SORA%20STUDIO!%20I%27d%20like%20to%20book%20a%20photo%20booth%20for%20my%20event."

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-warm-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6 lg:py-5">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="SORA STUDIO logo" className="h-12 w-12 rounded-lg object-contain md:h-14 md:w-14" />
          <span className="font-heading text-xl tracking-wide text-charcoal md:text-2xl">
            SORA STUDIO
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex lg:gap-10 xl:gap-12">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="font-sans text-sm text-muted transition-colors hover:text-charcoal">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden rounded-md bg-charcoal px-5 py-2 font-sans text-sm text-white transition-opacity hover:opacity-90 md:inline-block lg:px-6">
            Book Us
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-charcoal/15 md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {isOpen ? (
                <path d="M2 2L16 16M16 2L2 16" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M1 4H17" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M1 9H17" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M1 14H17" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="flex flex-col gap-1 border-t border-charcoal/10 bg-warm-white px-5 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="py-3 font-sans text-sm text-muted transition-colors hover:text-charcoal">
              {link.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="mt-2 rounded-md bg-charcoal px-5 py-3 text-center font-sans text-sm text-white">
            Book Us
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar