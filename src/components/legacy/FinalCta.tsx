import { MessageCircle } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

export function FinalCta() {
  return (
    <section id="book" className="relative overflow-hidden py-32">
      <img
        src={aboutImg}
        alt=""
        aria-hidden
        loading="lazy"
        width={1200}
        height={1400}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="text-[10px] uppercase tracking-luxury text-gold">
          O Legado
        </span>
        <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
          Eleve seu visual
          <br />
          <span className="text-gradient-gold italic">para outro nível.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          Reserve sua cadeira privativa hoje. Alguns minutos — uma assinatura para anos.
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-10 py-5 text-xs font-semibold uppercase tracking-luxury text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
          >
            <MessageCircle size={18} />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}