type Service = {
  id: number
  category: string
  description: string
  detail: string
}

const SERVICES: Service[] = [
  { id: 1, category: 'Weddings & Engagements', description: 'For weddings, receptions, engagement parties, and the celebrations that lead up to them. A calm presence, there when you need it.', detail: 'For two becoming one' },
  { id: 2, category: 'Birthdays & Celebrations', description: 'For birthdays, parties, graduations, and the personal milestones worth marking. Fun and easy, with plenty of character.', detail: 'For the ones you love' },
  { id: 3, category: 'Brand & Corporate Events', description: 'For launches, company events, activations, and anything that could use a bit more personality.', detail: 'For the whole team' },
]

function Services() {
  return (
    <section id="services" className="border-t border-charcoal/10 px-5 py-12 md:px-6 md:py-28 lg:py-32 xl:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-lg">
          <h2 className="font-heading text-2xl leading-[1.15] text-charcoal md:text-4xl md:leading-[1.1]">
            Something for every occasion.
          </h2>
          <p className="mt-3 font-sans text-base text-muted md:mt-4">
            We show up differently depending on the occasion, but it always feels the same: real photography, easy to enjoy, with a bit of vintage charm.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-6 lg:mt-20 lg:gap-10 xl:gap-12">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col border-t border-charcoal/15 pt-6 md:pt-8 ${index === 1 ? 'md:border-x md:border-t-0 md:border-charcoal/15 md:px-8 lg:px-10' : ''}`}>
              <span className="font-heading text-sm italic text-muted">
                {String(index + 1).padStart(2, '0')} — {service.detail}
              </span>
              <h3 className="mt-3 font-heading text-xl text-charcoal md:text-2xl">
                {service.category}
              </h3>
              <p className="mt-3 max-w-sm font-sans text-sm text-muted">
                {service.description}
              </p>
              <div className="mt-6 h-px w-12 bg-pastel-blue" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services