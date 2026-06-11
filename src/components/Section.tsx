import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && (
            <div className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-accent-foreground">
              {eyebrow}
            </div>
          )}
          {title && <h2 className="font-display text-3xl font-semibold md:text-5xl">{title}</h2>}
          {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export function WaButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "whatsapp";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition shadow-soft hover:scale-[1.02]";
  const variants = {
    primary: "bg-gradient-accent text-primary-foreground",
    outline: "border-2 border-primary/30 bg-card text-foreground hover:bg-accent",
    whatsapp: "bg-[var(--whatsapp)] text-white",
  };
  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
}
