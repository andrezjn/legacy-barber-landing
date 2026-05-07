import aboutImg from "@/assets/about.jpg";

const stats = [
  { value: "12k+", label: "Cortes realizados" },
  { value: "8 anos", label: "De maestria" },
  { value: "4.9", label: "Avaliação média" },
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
            03 — A Casa
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Onde o ofício encontra a <span className="text-gradient-gold italic">presença.</span>
          </h2>
          <div className="hairline mt-8 w-24" />
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            A Legacy Barber nasceu de uma obsessão pelo detalhe. Cada corte é um ritual
            privado — as texturas, a iluminação, a conversa. Não seguimos tendências;
            criamos assinaturas que os homens carregam por anos.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A partir do momento em que você senta, o mundo silencia. O que deixa a
            cadeira é mais afiado, mais refinado e inconfundivelmente seu.
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