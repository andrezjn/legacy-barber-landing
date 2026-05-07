import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/legacy/Nav";
import { Hero } from "@/components/legacy/Hero";
import { Services } from "@/components/legacy/Services";
import { Gallery } from "@/components/legacy/Gallery";
import { About } from "@/components/legacy/About";
import { Testimonials } from "@/components/legacy/Testimonials";
import { Location } from "@/components/legacy/Location";
import { FinalCta } from "@/components/legacy/FinalCta";
import { Footer } from "@/components/legacy/Footer";
import { WhatsAppFab } from "@/components/legacy/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Legacy Barber — Premium Barbershop in Minas Gerais" },
      {
        name: "description",
        content:
          "Legacy Barber: premium cuts, refined experience, and modern masculine identity in São Paulo. Book your private chair today.",
      },
      { property: "og:title", content: "Legacy Barber — Premium Barbershop in São Paulo" },
      {
        property: "og:description",
        content:
          "Premium cuts, refined experience, and modern masculine identity. Book via WhatsApp.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Location />
      <FinalCta />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
