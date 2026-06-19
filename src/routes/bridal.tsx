import { createFileRoute } from "@tanstack/react-router";
import { Section, WaButton } from "@/components/Section";
import { wa } from "@/lib/site";
import { Crown, Sparkles } from "lucide-react";
import bridal from "@/assets/bridal.jpg";
import bridalHero from "@/assets/bridal-hero.jpg";
import real1 from "@/assets/bridal-1.jpeg";
import real2 from "@/assets/bridal-2.jpeg";
import real3 from "@/assets/bridal-3.jpeg";
import real4 from "@/assets/bridal-4.jpeg";
import real5 from "@/assets/bridal-5.jpeg";
import real6 from "@/assets/bridal-6.png";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "Bridal Makeup in Mettupalayam — Sujess Bridal Studio" },
      { name: "description", content: "HD, airbrush, glass-skin & reception bridal makeup in Mettupalayam. Bridal packages starting ₹5000. Book a consultation on WhatsApp." },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/bridal" }],
  }),
  component: BridalPage,
});

function BridalPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-card/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <Crown className="h-3.5 w-3.5" /> Sujess Bridal Studio
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Make Your <span className="text-gradient">Big Day</span> Perfect
            </h1>
            <p className="mt-5 text-foreground/75 md:text-lg">
              Signature bridal looks crafted by international makeup artist Sujatha — for every
              ritual, every emotion, every photograph.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <WaButton variant="whatsapp" href={wa("Hi, I want to book a bridal makeup consultation at Sujess")}>
                Book Bridal Consultation
              </WaButton>
            </div>
          </div>
          <img src={bridal} alt="Sujess bridal makeup — south Indian bride" width={1024} height={1280} className="rounded-3xl object-cover shadow-luxe" />
        </div>
      </section>

      {/* PACKAGE */}
      <section className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="-mt-2 rounded-3xl bg-gradient-accent p-8 text-center text-primary-foreground shadow-luxe md:p-12">
          <Sparkles className="mx-auto h-8 w-8" />
          <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">Bridal Makeup Packages</h2>
          <p className="mt-2 text-primary-foreground/90">Starting from</p>
          <div className="mt-1 font-display text-5xl font-bold md:text-6xl">₹5,000</div>
          <div className="mt-5">
            <a href={wa("Hi, I want to know about Sujess bridal packages")} className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-soft">
              Get full package details
            </a>
          </div>
        </div>
      </section>

      {/* BRIDAL LOOK */}
      <Section eyebrow="Bridal look" title="Our Signature Bridal Makeup">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-card shadow-luxe">
          <img
            src={bridalHero}
            alt="Sujess signature bridal makeup"
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
      </Section>

      {/* REAL BRIDES GALLERY */}
      <Section eyebrow="Real brides" title="Crafted at Sujess Bridal Studio" subtitle="Real brides, real moments — straight from our studio in Mettupalayam.">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {[real1, real3, real2, real4, real5, real6].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-luxe">
              <img
                src={src}
                alt={`Sujess real bride look ${i + 1} — bridal makeup in Mettupalayam`}
                loading="lazy"
                className="w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
