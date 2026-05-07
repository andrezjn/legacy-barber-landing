import heroImg from "@/assets/hero.jpg";
import { ArrowRight, Scissors } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Legacy Barber luxury interior"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.08_0.004_60/0.7)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <div className="reveal max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <Scissors size={14} className="text-gold" />
            <span className="text-[10px] uppercase tracking-luxury text-gold">
              São Paulo · Est. 2018
            </span>
          </div>
          <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Your style starts in
            <br />
            the <span className="text-gradient-gold italic">right chair.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Premium cuts, refined experience, and modern masculine identity —
            crafted by master barbers in the heart of São Paulo.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-xs font-semibold uppercase tracking-luxury text-primary-foreground shadow-gold transition-all hover:scale-[1.02]"
            >
              Book Your Appointment
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-xs font-semibold uppercase tracking-luxury text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-luxury text-muted-foreground">
            Scroll
          </span>
          <div className="relative h-12 w-px overflow-hidden bg-border">
            <div className="absolute left-0 top-0 h-6 w-px animate-shimmer-down bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}