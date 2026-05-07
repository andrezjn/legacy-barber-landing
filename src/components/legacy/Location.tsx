import { MapPin, Clock, Instagram, MessageCircle } from "lucide-react";

const hours = [
  { day: "Segunda — Sexta", time: "10:00 — 21:00" },
  { day: "Sábado", time: "09:00 — 19:00" },
  { day: "Domingo", time: "Fechado" },
];

export function Location() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="text-[10px] uppercase tracking-luxury text-gold">
            05 — Visite
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl lg:text-6xl">
            Encontre-nos em <span className="text-gradient-gold italic">São Paulo.</span>
          </h2>
          <div className="hairline mt-8 w-24" />
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="relative col-span-3 overflow-hidden rounded-2xl border border-border bg-card h-[480px]">
            <iframe
              title="Legacy Barber Location"
              src="https://www.google.com/maps?q=Rua+Oscar+Freire,+S%C3%A3o+Paulo&output=embed"
              className="h-full w-full grayscale contrast-125"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-background/20 mix-blend-multiply" />
          </div>

          <div className="col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 text-gold">
                <MapPin size={18} />
                <span className="text-[10px] uppercase tracking-luxury">Endereço</span>
              </div>
              <p className="mt-4 font-display text-2xl text-foreground">
                Rua Oscar Freire, 1200
              </p>
              <p className="text-sm text-muted-foreground">Jardins · São Paulo · SP</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 text-gold">
                <Clock size={18} />
                <span className="text-[10px] uppercase tracking-luxury">Horários</span>
              </div>
              <ul className="mt-4 space-y-3">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between border-b border-border/50 pb-3 text-sm last:border-0 last:pb-0"
                  >
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-gold px-5 py-4 text-xs font-semibold uppercase tracking-luxury text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border px-5 py-4 text-xs font-semibold uppercase tracking-luxury text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}