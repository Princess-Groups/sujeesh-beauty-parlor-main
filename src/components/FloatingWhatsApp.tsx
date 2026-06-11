import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { wa } from "@/lib/site";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-50 w-[280px] rounded-2xl border border-border bg-card p-4 shadow-luxe animate-fade-up">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-display text-base font-semibold">Hi there! 👋</div>
              <p className="mt-1 text-xs text-muted-foreground">
                How can Sujess Beauty help you today?
              </p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
          <div className="mt-3 space-y-2">
            <a
              href={wa("Hi, I want to book a salon appointment")}
              className="block rounded-lg bg-accent px-3 py-2 text-xs font-medium text-accent-foreground hover:opacity-90"
            >
              💇‍♀️ Book salon service
            </a>
            <a
              href={wa("Hi, I want to join a free trial class for beautician course")}
              className="block rounded-lg bg-accent px-3 py-2 text-xs font-medium text-accent-foreground hover:opacity-90"
            >
              🎓 Free academy trial
            </a>
            <a
              href={wa("Hi, I want to book bridal makeup consultation")}
              className="block rounded-lg bg-accent px-3 py-2 text-xs font-medium text-accent-foreground hover:opacity-90"
            >
              👰 Bridal consultation
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="WhatsApp chat"
        className="fixed bottom-5 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[var(--whatsapp)] text-white shadow-luxe transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-[var(--whatsapp)]/70" />
      </button>
    </>
  );
}
