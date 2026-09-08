function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-28 lg:py-32 xl:py-36">
      <div className="grid gap-8 md:grid-cols-2 md:gap-16 md:items-center lg:gap-20 xl:gap-24">
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-charcoal/10 bg-pastel-blue">
            <img
              src="/images/img2.jpeg"
              alt="A SORA STUDIO photo strip and print tucked into a shirt pocket, a keepsake from a recent event"
              className="h-full w-full object-cover object-[center_65%]"
            />
          </div>
          <span aria-hidden="true" className="hidden -top-5 -right-2 font-heading text-sm italic text-muted md:absolute md:block md:-right-4">
            based in Kathmandu Valley
          </span>
        </div>

        <div>
          <h2 className="font-heading text-2xl leading-[1.15] text-charcoal md:text-4xl md:leading-[1.1]">
            A little photo booth,<br />
            made for good times.
          </h2>
          <p className="mt-4 max-w-md font-sans text-base text-muted md:mt-5 lg:max-w-lg">
            We show up for weddings, birthdays, corporate events, and everything in between. No stiff poses, no plastic props, just real photography with a bit of vintage charm, made for you and your friends.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About