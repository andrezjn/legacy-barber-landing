import aboutImg from "@/assets/about.jpg";

const stats = [
  { value: "12k+", label: "Cuts crafted" },
  { value: "8 yrs", label: "Of mastery" },
  { value: "4.9", label: "Average rating" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl border border-gold/20" />
          <img
            src={aboutImg}
            alt="Legacy Barber atelier"
            loading="lazy"
            width={1200}
            height={1400}
            className="relative h-[560px] w-full rounded-2xl object-cover shadow-luxury"
          />
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-luxury text-gold">
            03 — The House
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Where craftsmanship meets <span className="text-gradient-gold italic">presence.</span>
          </h2>
          <div className="hairline mt-8 w-24" />
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            Legacy Barber was born from an obsession with detail. Every cut is a private
            ritual — the textures, the lighting, the conversation. We don't follow trends;
            we craft signatures that men carry for years.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From the moment you sit down, the world quiets. What leaves the chair is
            sharper, more refined, and unmistakably yours.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl text-gradient-gold md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-luxury text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}