const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
]

const INSTAGRAM_URL = "https://www.instagram.com/sora.studio.np/"
const TIKTOK_URL = "https://www.tiktok.com/@sora.studio.np"
const WHATSAPP_URL = "https://wa.me/9779704556401"

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-charcoal/10 bg-warm-white px-5 pb-8 pt-12 md:px-6 md:pt-20 lg:pt-24 xl:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-12">
          <div className="max-w-xs">
            <span className="font-heading text-2xl text-charcoal">SORA STUDIO</span>
            <p className="mt-3 font-sans text-sm text-muted">
              A DSLR photo booth experience for celebrations across Kathmandu Valley.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 md:gap-16 lg:gap-20 xl:gap-24">
            <nav className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="py-1 font-sans text-sm text-muted transition-colors hover:text-charcoal">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2">
              <span className="font-sans text-xs uppercase tracking-widest text-muted">Follow</span>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="py-1 font-sans text-sm text-muted transition-colors hover:text-charcoal">Instagram</a>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="py-1 font-sans text-sm text-muted transition-colors hover:text-charcoal">TikTok</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="py-1 font-sans text-sm text-muted transition-colors hover:text-charcoal">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-charcoal/10 pt-6 md:flex-row md:items-center lg:mt-10 lg:pt-8">
          <span className="font-sans text-xs text-muted">© 2026 SORA STUDIO. All rights reserved.</span>
          <span className="font-heading text-sm italic text-muted"><span aria-hidden="true">✦</span> made with a little vintage soul</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer