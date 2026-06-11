import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/academy", label: "Academy" },
  { to: "/salon", label: "Salon" },
  { to: "/bridal", label: "Bridal" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-gradient-accent p-1 shadow-soft ring-1 ring-primary/20">
            <img src={logo} alt="Sujess logo" className="h-full w-full object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold">Sujess</div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Bridal Studio · Beauty Salon · Academy</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-primary bg-accent/60" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary" }}
                className="rounded-lg px-3 py-3 text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
