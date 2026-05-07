import { Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 md:items-center">
        <a href="#top" className="font-display text-2xl">
          <span className="text-foreground">Legacy</span>{" "}
          <span className="text-gradient-gold italic">Barber</span>
        </a>
        <nav className="flex justify-center gap-8">
          {[
            { label: "Serviços", href: "services" },
            { label: "Galeria", href: "gallery" },
            { label: "Sobre", href: "about" },
            { label: "Contato", href: "contact" },
          ].map((l) => (
            <a
              key={l.href}
              href={`#${l.href}`}
              className="text-[10px] uppercase tracking-luxury text-muted-foreground hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex justify-start gap-3 md:justify-end">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-6">
        <div className="hairline" />
        <p className="mt-6 text-center text-[10px] uppercase tracking-luxury text-muted-foreground">
          © {new Date().getFullYear()} Legacy Barber · São Paulo · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}