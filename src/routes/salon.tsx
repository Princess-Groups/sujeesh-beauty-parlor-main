import { createFileRoute } from "@tanstack/react-router";
import { Section, WaButton } from "@/components/Section";
import { wa } from "@/lib/site";
import hair from "@/assets/salon-hair-treatment.jpg";
import cut from "@/assets/salon-haircut.jpg";
import pedi from "@/assets/salon-pedicure.jpg";
import facial from "@/assets/salon-facial.jpg";
import thread from "@/assets/salon-threading.jpg";
import wax from "@/assets/salon-waxing.jpg";

export const Route = createFileRoute("/salon")({
  head: () => ({
    meta: [
      { title: "Beauty Parlour in Mettupalayam — Sujess Beauty Salon" },
      { name: "description", content: "Premium beauty salon in Mettupalayam offering hair treatments, hair cuts, pedicure, manicure, facial, threading & waxing. Book on WhatsApp." },
    ],
    links: [{ rel: "canonical", href: "/salon" }],
  }),
  component: SalonPage,
});

const services = [
  { title: "Hair Treatments", price: "₹1,500", desc: "Spa, smoothening, keratin, hair botox.", img: hair },
  { title: "Hair Cuts & Styling", price: "₹450", desc: "Trims, layered, fringe, advanced cuts.", img: cut },
  { title: "Pedicure & Manicure", price: "₹450", desc: "Classic, spa, gel & luxury treatments.", img: pedi },
  { title: "Facial Service", price: "₹800", desc: "Classic, de-tan, gold, bridal & advanced facials.", img: facial },
  { title: "Threading", price: "₹50", desc: "Eyebrow, upper lip, forehead & full-face threading.", img: thread },
  { title: "Waxing", price: "₹300", desc: "Full body, arms, legs, underarm & bikini waxing.", img: wax },
];

function SalonPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:px-6 md:py-24">
          <h1 className="font-display text-4xl font-semibold md:text-6xl">
            Professional <span className="text-gradient">Beauty Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/75 md:text-lg">
            Premium salon experiences in Mettupalayam — from everyday refresh to head-turning glam.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group overflow-hidden rounded-3xl bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-luxe">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    From {s.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-5">
                  <WaButton variant="whatsapp" href={wa(`Hi, I want to book ${s.title} at Sujess Beauty Salon`)}>
                    Book Now on WhatsApp
                  </WaButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
