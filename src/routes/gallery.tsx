import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import hero from "@/assets/hero-salon.jpg";
import bridal from "@/assets/bridal.jpg";
import academy from "@/assets/academy.jpg";
import airbrush from "@/assets/makeup-airbrush.jpg";
import glass from "@/assets/makeup-glass.jpg";
import hd from "@/assets/makeup-hd.jpg";
import reception from "@/assets/makeup-reception.jpg";
import hair from "@/assets/salon-hair-treatment.jpg";
import cut from "@/assets/salon-haircut.jpg";
import pedi from "@/assets/salon-pedicure.jpg";
import facial from "@/assets/salon-facial.jpg";
import thread from "@/assets/salon-threading.jpg";
import wax from "@/assets/salon-waxing.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sujess Beauty Salon & Academy" },
      { name: "description", content: "Real work from Sujess: salon transformations, bridal looks and academy training sessions." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { img: hair, label: "Hair Treatment" },
  { img: cut, label: "Hair Cut" },
  { img: pedi, label: "Pedicure" },
  { img: facial, label: "Facial" },
  { img: thread, label: "Threading" },
  { img: wax, label: "Waxing" },
  { img: bridal, label: "Bridal" },
  { img: hd, label: "Bridal" },
  { img: academy, label: "Academy" },
  { img: airbrush, label: "Bridal" },
  { img: glass, label: "Bridal" },
  { img: reception, label: "Bridal" },
  { img: hero, label: "Studio" },
];

function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center md:px-6 md:py-20">
          <h1 className="font-display text-4xl font-semibold md:text-6xl">
            Our <span className="text-gradient">Gallery</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-foreground/75">
            Salon work, bridal transformations and student training moments.
          </p>
        </div>
      </section>
      <Section>
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {items.map((it, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-soft break-inside-avoid">
              <img src={it.img} alt={`Sujess ${it.label} work ${i + 1}`} loading="lazy" className="w-full transition duration-700 group-hover:scale-105" />
              <span className="absolute left-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur">
                {it.label}
              </span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
