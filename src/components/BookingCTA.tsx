const WHATSAPP_URL = "https://wa.me/9779704556401?text=Hi%20SORA%20STUDIO!%20I%27d%20like%20to%20book%20a%20photo%20booth%20for%20my%20event."

function BookingCTA() {
  return (
    <section id="book" className="relative border-t border-charcoal/10 bg-pastel-blue/30 px-5 py-14 text-center md:px-6 md:py-32">
      <span aria-hidden="true" className="hidden left-1/2 top-8 -translate-x-1/2 font-heading text-xl italic text-muted md:absolute md:block">✦</span>

      <h2 className="mx-auto max-w-xl font-heading text-3xl leading-[1.15] text-charcoal md:text-5xl md:leading-[1.1] lg:max-w-2xl">
        Got something to celebrate?
      </h2>

      <p className="mx-auto mt-4 max-w-sm font-sans text-base text-muted md:mt-5 lg:max-w-md">
        Tell us about your celebration and we'll take it from there.
      </p>

      <div className="mt-7 flex flex-col items-center justify-center gap-3 md:mt-8 md:flex-row md:gap-4 lg:mt-10">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full max-w-xs rounded-md bg-charcoal px-8 py-3 font-sans text-sm text-white transition-opacity hover:opacity-90 sm:w-auto">
          Book Us
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="border-b border-charcoal pb-1 font-sans text-sm text-charcoal transition-opacity hover:opacity-70">
          Let's talk
        </a>
      </div>
    </section>
  )
}

export default BookingCTA