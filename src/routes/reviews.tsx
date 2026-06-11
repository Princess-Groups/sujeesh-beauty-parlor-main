import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Sujess Beauty Salon & Academy" },
      { name: "description", content: "Read what students and clients say about Sujess Beauty Salon & Academy in Mettupalayam." },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Priya R.", role: "Master Diploma Student", text: "I joined for 3 months but gained advanced knowledge. Trainer support is amazing!" },
  { name: "Divya K.", role: "Academy Graduate", text: "Best academy in Mettupalayam with real professional training. The separate institute makes a huge difference." },
  { name: "Anitha S.", role: "Bride", text: "Bridal makeup was flawless and long-lasting. I felt like a queen on my wedding day!" },
  { name: "Lakshmi M.", role: "Salon Client", text: "Hair treatment results lasted months. The pista green ambience is so calming." },
  { name: "Meena V.", role: "Bride", text: "Glass skin makeup looked stunning in photos. Sujatha ma'am is truly an international artist." },
  { name: "Kavitha P.", role: "Basic Course Student", text: "Free trial convinced me instantly. Practical from day one — exactly what I needed." },
];

function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center md:px-6 md:py-20">
          <h1 className="font-display text-4xl font-semibold md:text-6xl">
            Loved by our <span className="text-gradient">clients & students</span>
          </h1>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-card/70 px-4 py-2 backdrop-blur">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
              ))}
            </div>
            <span className="text-sm font-medium">4.9 / 5 from 500+ reviews</span>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-3xl bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-luxe">
              <Quote className="h-6 w-6 text-primary/40" />
              <p className="mt-3 text-foreground/85">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-accent font-semibold text-primary-foreground">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
              <div className="mt-3 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
