import { Star, Quote } from "lucide-react";

const items = [
  {
    quote:
      "The most refined barbershop experience in São Paulo. Every visit feels intentional — from the welcome to the final mirror.",
    name: "Rafael Andrade",
    role: "Creative Director",
  },
  {
    quote:
      "I've been getting cuts for 20 years. Nothing compares to the precision and atmosphere Legacy delivers. It changed how I show up.",
    name: "Lucas Mendes",
    role: "Entrepreneur",
  },
  {
    quote:
      "It's not just a haircut — it's a private ritual. The team treats your image like an investment. Worth every minute.",
    name: "Felipe Ribeiro",
    role: "Investment Partner",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="text-[10px] uppercase tracking-luxury text-gold">
            04 — Voices
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl lg:text-6xl">
            Trusted by men who <span className="text-gradient-gold italic">choose better.</span>
          </h2>
          <div className="hairline mt-8 w-24" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <article
              key={t.name}
              className="glass relative flex flex-col rounded-2xl p-8 transition-transform duration-500 hover:-translate-y-1"
            >
              <Quote size={28} className="text-gold/40" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-6 flex-1 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </p>
              <div className="mt-8 border-t border-border pt-5">
                <div className="font-display text-lg text-foreground">{t.name}</div>
                <div className="text-[10px] uppercase tracking-luxury text-muted-foreground">
                  {t.role}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}