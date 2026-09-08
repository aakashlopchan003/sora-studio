const FEATURES = [
  { title: 'DSLR Quality', description: 'Real DSLR cameras, not a webcam in a box, for photos that actually look professional.' },
  { title: 'Effortlessly Fun', description: 'An easy, lively setup that gets everyone involved, no instructions needed.' },
  { title: 'Made for Your Event', description: 'From weddings to corporate parties, the setup fits right into the room.' },
  { title: 'Memories to Keep', description: 'Everyone leaves with a photo to print, share, or keep.' },
]

function Experience() {
  return (
    <section id="experience" className="border-t border-charcoal/10 bg-pastel-blue/30 px-6 py-16 md:py-28 lg:py-32 xl:py-36">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-lg font-heading text-3xl leading-[1.1] text-charcoal md:text-4xl">
          What you can expect.
        </h2>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-x-12 md:gap-y-14 lg:mt-20 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-0">
          {FEATURES.map((feature, index) => (
            <div key={feature.title} className="border-b border-charcoal/10 pb-8 md:border-none md:pb-0">
              <span className="font-heading text-sm italic text-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-heading text-xl text-charcoal">
                {feature.title}
              </h3>
              <p className="mt-2 max-w-xs font-sans text-sm text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience