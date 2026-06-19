import { createFileRoute } from "@tanstack/react-router";
import { Section, WaButton } from "@/components/Section";
import { SITE, wa } from "@/lib/site";
import { Phone, MapPin, Clock, MessageCircle, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sujess Beauty Salon & Academy, Mettupalayam" },
      { name: "description", content: "Visit, call or WhatsApp Sujess Beauty Salon & Academy in Mettupalayam, Karamadai & Velankanni." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center md:px-6 md:py-20">
          <h1 className="font-display text-4xl font-semibold md:text-6xl">
            Let's <span className="text-gradient">connect</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-foreground/75">
            We reply on WhatsApp within minutes. Walk-ins welcome too.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { Icon: MessageCircle, title: "WhatsApp", value: SITE.phones[0], href: wa("Hi Sujess Beauty, I'd like to know more.") },
            { Icon: Phone, title: "Call us", value: SITE.phones.join(" · "), href: `tel:+91${SITE.phones[0]}` },
            { Icon: MapPin, title: "Visit", value: SITE.location, href: "https://maps.google.com/?q=Mettupalayam" },
          ].map(({ Icon, title, value, href }) => (
            <a key={title} href={href} className="group rounded-3xl bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-luxe">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-accent">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-1 text-muted-foreground">{value}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-primary">Open →</span>
            </a>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-3xl bg-gradient-soft p-8 md:grid-cols-2 md:p-12">
          <div>
            <h3 className="font-display text-2xl font-semibold md:text-3xl">Studio hours</h3>
            <ul className="mt-4 space-y-2 text-foreground/80">
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Mon–Sat: 9:00 AM – 8:00 PM</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Sun: By appointment</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <WaButton variant="whatsapp" href={wa("Hi, I want to book an appointment")}>Book Appointment</WaButton>
              <a href="https://www.instagram.com/sujessbeautysalon" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-card px-5 py-3 text-sm font-semibold">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <iframe
              title="Sujess Beauty location"
              src="https://www.google.com/maps?q=Mettupalayam,Tamil+Nadu&output=embed"
              className="h-72 w-full md:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
