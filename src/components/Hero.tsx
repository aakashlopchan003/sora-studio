function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pb-12 pt-4 md:px-6 md:pb-20 md:pt-8 lg:pb-24 lg:pt-0 xl:pb-28 xl:pt-2">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16 lg:gap-20 xl:gap-24">
        <div className="relative">
          <span
            aria-hidden="true"
            className="hidden -top-6 -left-2 font-heading text-sm italic text-muted md:absolute md:block md:-left-4"
          >
            est. moments worth keeping
          </span>

          <h1 className="font-heading text-3xl uppercase leading-[1.1] text-charcoal md:text-5xl md:leading-[1.05]">
            Good photos,
            <br />
            good company.
          </h1>

          <p className="mt-5 max-w-md font-sans text-base text-muted lg:max-w-lg">
            We bring a DSLR photo booth to celebrations across Kathmandu Valley. Bring your friends, strike a pose, and take the photo home.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-lg border border-charcoal/10 bg-pastel-blue shadow-md md:aspect-[3/4]">
            <img
              src="/images/img1.jpeg"
              alt="Four SORA STUDIO photo booth strips laid out on a wooden table, showing friends and family from recent events"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 hidden h-16 w-16 rotate-6 items-center justify-center rounded-md bg-warm-white shadow-sm md:flex"
          >
            <span className="font-heading text-xl italic text-charcoal">
              S
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero