import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="text-[10px] uppercase tracking-luxury text-gold">
            02 — Gallery
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl lg:text-6xl">
            An <span className="text-gradient-gold italic">editorial</span> of precision.
          </h2>
          <div className="hairline mt-8 w-24" />
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <figure className="group relative col-span-12 overflow-hidden rounded-2xl md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto md:h-[640px]">
            <img src={g1} alt="Premium haircut" loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <figcaption className="absolute bottom-6 left-6 text-xs uppercase tracking-luxury text-foreground">Signature Cut</figcaption>
          </figure>
          <figure className="group relative col-span-6 overflow-hidden rounded-2xl md:col-span-5 aspect-square">
            <img src={g2} alt="Premium tools" loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
          </figure>
          <figure className="group relative col-span-6 overflow-hidden rounded-2xl md:col-span-3 aspect-square">
            <img src={g4} alt="Fade detail" loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
          </figure>
          <figure className="group relative col-span-12 overflow-hidden rounded-2xl md:col-span-2 aspect-square md:aspect-auto">
            <img src={g3} alt="Modern gentleman" loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
          </figure>
        </div>
      </div>
    </section>
  );
}