type GalleryItem = {
  id: number
  src: string
  alt: string
  objectPosition: string
  className: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, src: '/images/img7.jpeg', alt: "A couple posing together with a heart-shaped hand gesture and a silver balloon in the SORA STUDIO photo booth", objectPosition: 'object-top', className: 'md:col-start-1 md:col-span-4 md:row-start-1 md:row-span-3' },
  { id: 2, src: '/images/img4.jpeg', alt: 'Three friends posing together in a black and white SORA STUDIO photo booth strip', objectPosition: 'object-top', className: 'md:col-start-4 md:col-span-3 md:row-start-1 md:row-span-2 md:-ml-6 md:mt-8 md:-rotate-2 md:relative md:z-10' },
  { id: 3, src: '/images/img9.jpeg', alt: 'A large group of friends laughing and posing together in the SORA STUDIO photo booth', objectPosition: 'object-top', className: 'md:col-start-8 md:col-span-3 md:row-start-1 md:row-span-2' },
  { id: 4, src: '/images/img6.jpeg', alt: 'A family of three posing together with playful props in the SORA STUDIO photo booth', objectPosition: 'object-top', className: 'md:col-start-1 md:col-span-3 md:row-start-4 md:row-span-2' },
  { id: 5, src: '/images/img5.jpeg', alt: "Four generations of a family celebrating a birthday together in the SORA STUDIO photo booth", objectPosition: 'object-center', className: 'md:col-start-4 md:col-span-4 md:row-start-3 md:row-span-3 md:mt-6 md:relative md:z-10 md:rotate-1' },
  { id: 6, src: '/images/img8.jpeg', alt: 'Handmade birthday decorations and a SORA STUDIO photo strip prop displayed on a table', objectPosition: 'object-center', className: 'md:col-start-8 md:col-span-3 md:row-start-3 md:row-span-3' },
]

function Gallery() {
  return (
    <section id="gallery" className="relative mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-28 lg:py-32 xl:py-36">
      <span aria-hidden="true" className="hidden left-0 top-8 font-heading text-xl italic text-muted md:absolute md:block">
        ✦
      </span>

      <div className="max-w-lg">
        <h2 className="font-heading text-2xl leading-[1.15] text-charcoal md:text-4xl md:leading-[1.1]">
          A few moments, unscripted.
        </h2>
        <p className="mt-3 font-sans text-base text-muted md:mt-4">
          A few of the moments we've been part of. Real, warm, and a little unexpected.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-10 md:grid-rows-5 md:gap-0 lg:mt-24">
        {GALLERY_ITEMS.map((item) => (
          <div key={item.id} className={`group relative aspect-[4/5] w-full overflow-hidden rounded-md border border-charcoal/15 bg-pastel-blue shadow-sm md:aspect-auto md:h-full ${item.className}`}>
            <img
              src={item.src}
              alt={item.alt}
              className={`h-full w-full border border-white/40 object-cover transition-transform duration-300 group-hover:scale-105 ${item.objectPosition}`}
            />
          </div>
        ))}
      </div>

      <span aria-hidden="true" className="mt-8 block text-right font-heading text-sm italic text-muted md:mt-16">
        est. Kathmandu Valley
      </span>
    </section>
  )
}

export default Gallery