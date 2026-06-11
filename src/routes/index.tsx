import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, WaButton } from "@/components/Section";
import { wa } from "@/lib/site";
import { Award, Globe2, GraduationCap, Sparkles, Scissors, Crown, ArrowRight, Star, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import trainerImg from "@/assets/trainer-new.jpg";
import academyImg from "@/assets/academy.jpg";
import bridalImg from "@/assets/bridal-front.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sujess Beauty Salon & Academy — Premium Beauty in Mettupalayam" },
      { name: "description", content: "Premium beauty salon, academy & bridal studio in Mettupalayam. International trainer Sujatha. Book on WhatsApp or join a free trial class." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.92_0.10_60_/_0.6),_transparent_60%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:px-6 md:py-24">
          <div className="animate-fade-up">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
                <MapPin className="h-3.5 w-3.5" /> Mettupalayam, Tamil Nadu
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-foreground shadow-soft">
                <Sparkles className="h-3.5 w-3.5" /> Exclusive for Women
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
                Since 1996
              </div>
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              Premium <span className="text-gradient">Beauty Academy</span> in Mettupalayam
            </h1>
            <p className="mt-5 text-base text-foreground/75 md:text-lg">
              Beauty Salon · Academy · Bridal Studio — crafted by international makeup artist Sujatha.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <WaButton variant="whatsapp" href={wa("Hi, I want to book an appointment at Sujess Beauty Salon")}>
                Book Now on WhatsApp
              </WaButton>
              <WaButton variant="outline" href={wa("Hi, I want to join a free trial class for beautician course")}>
                Join Free Trial Class <ArrowRight className="h-4 w-4" />
              </WaButton>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-foreground/70">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
                <span className="ml-2 font-medium">500+ happy clients</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-30 blur-2xl" />
            <img
              src={heroImg}
              width={1536}
              height={1024}
              alt="Premium Sujess beauty salon interior in pista green and peach tones, Mettupalayam"
              className="relative w-full rounded-[2rem] object-cover shadow-luxe"
            />
          </div>
        </div>
      </section>

      {/* TRUST HIGHLIGHT */}
      <section className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative -mt-2 overflow-hidden rounded-3xl bg-gradient-accent p-8 text-center shadow-luxe md:p-12">
          <Award className="mx-auto h-10 w-10 text-primary-foreground" />
          <h2 className="mt-4 font-display text-2xl font-semibold text-primary-foreground md:text-3xl">
            The Only Beauty Academy with a Separate Professional Training Institute in Mettupalayam
          </h2>
          <p className="mt-3 text-sm text-primary-foreground/90 md:text-base">
            A dedicated learning environment — not a corner of the salon. That's the Sujess difference.
          </p>
        </div>
      </section>

      {/* ABOUT TRAINER */}
      <Section eyebrow="Meet your trainer" title="Sujatha Krishnan" subtitle="Certified International Makeup Artist & Trainer · Since 1996">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-accent opacity-40 blur-xl" />
            <img
              src={trainerImg}
              width={896}
              height={1152}
              loading="lazy"
              alt="Sujatha Krishnan — Certified International Makeup Artist & Trainer, founder of Sujess Beauty Academy"
              className="relative w-full rounded-3xl object-cover shadow-luxe"
            />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-foreground/80">
              Certified Professional Trainer trained in <span className="font-semibold text-foreground">Sri Lanka and Malaysia</span>.
              Successfully completed international Makeup Artist courses with advanced expertise in
              bridal and beauty services — bringing world-class technique and personal mentorship to
              every student and bride.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: Globe2, text: "Served clients in Sri Lanka, Malaysia & more" },
                { icon: Award, text: "Lakme International Trainer" },
                { icon: GraduationCap, text: "Mentor to 200+ certified beauticians" },
                { icon: Sparkles, text: "Specialist in HD, Airbrush & Glass-skin bridal" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-accent">
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="pt-1 text-foreground/80">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section eyebrow="What we offer" title="Three studios. One signature." subtitle="From everyday glam to once-in-a-lifetime moments.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { to: "/salon", title: "Beauty Salon", desc: "Hair, skin, nails — premium treatments.", img: heroImg, Icon: Scissors },
            { to: "/academy", title: "Beauty Academy", desc: "Become a certified professional.", img: academyImg, Icon: GraduationCap },
            { to: "/bridal", title: "Bridal Studio", desc: "HD, airbrush & glass-skin bridal.", img: bridalImg, Icon: Crown },
          ].map(({ to, title, desc, img, Icon }) => (
            <Link
              key={to}
              to={to}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-luxe"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent p-6 text-primary-foreground">
                <Icon className="h-6 w-6" />
                <h3 className="mt-2 font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-primary-foreground/85">{desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium">
                  Explore more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <div className="rounded-3xl bg-gradient-soft p-8 text-center md:p-14">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Ready to glow?</h2>
          <p className="mt-2 text-muted-foreground">Message us on WhatsApp — we usually reply within minutes.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <WaButton variant="whatsapp" href={wa("Hi Sujess Beauty, I'd like to book an appointment")}>Book Now on WhatsApp</WaButton>
            <Link to="/academy" className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-card px-6 py-3 text-sm font-semibold">
              See Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
