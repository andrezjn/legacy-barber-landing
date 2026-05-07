import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold transition-transform hover:scale-110"
    >
      <MessageCircle size={22} />
    </a>
  );
}