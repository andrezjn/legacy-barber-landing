import { Scissors, Crown, Sparkles, Droplet } from "lucide-react";

const services = [
  {
    icon: Scissors,
    name: "Premium Haircut",
    desc: "Precision cut tailored to your face structure and lifestyle.",
    price: "R$ 90",
    duration: "45 min",
  },
  {
    icon: Sparkles,
    name: "Beard Experience",
    desc: "Hot towel ritual, sculpted beard, and signature finishing oils.",
    price: "R$ 70",
    duration: "40 min",
  },
  {
    icon: Crown,
    name: "Executive Combo",
    desc: "Haircut, beard, eyebrow design, and premium scalp treatment.",
    price: "R$ 180",
    duration: "1h 30",
    featured: true,
  },
  {
    icon: Droplet,
    name: "Hair Pigmentation",
    desc: "Discreet color correction for a sharper, fuller signature look.",
    price: "R$ 120",
    duration: "1h",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="text-[10px] uppercase tracking-luxury text-gold">
            01 — Services
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl lg:text-6xl">
            Crafted for the modern <span className="text-gradient-gold italic">gentleman.</span>
          </h2>
          <div className="hairline mt-8 w-24" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1 ${
                s.featured
                  ? "border-gold/40 bg-card shadow-gold"
                  : "border-border bg-card/40 hover:border-gold/30 hover:bg-card"
              }`}
            >
              {s.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-gold/15 px-3 py-1 text-[9px] uppercase tracking-luxury text-gold">
                  Signature
                </span>
              )}
              <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                <s.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl text-foreground">{s.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <div className="mt-8 flex items-end justify-between border-t border-border pt-5">
                <span className="text-2xl font-display text-gold">{s.price}</span>
                <span className="text-[10px] uppercase tracking-luxury text-muted-foreground">
                  {s.duration}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}