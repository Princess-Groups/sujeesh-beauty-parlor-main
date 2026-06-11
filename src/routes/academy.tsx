import { createFileRoute } from "@tanstack/react-router";
import { Section, WaButton } from "@/components/Section";
import { wa } from "@/lib/site";
import { Award, BookOpen, GraduationCap, Sparkles, CheckCircle2, Clock } from "lucide-react";
import academyImg from "@/assets/academy.jpg";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Beautician Course in Mettupalayam — Sujess Beauty Academy" },
      { name: "description", content: "Become a certified professional beautician. Basic, Advanced & Master Diploma courses. Free trial available. International trainer in Mettupalayam." },
      { property: "og:title", content: "Sujess Beauty Academy — Beautician Courses in Mettupalayam" },
      { property: "og:description", content: "Certified beautician courses with international trainer. Free trial class for all courses." },
    ],
    links: [{ rel: "canonical", href: "/academy" }],
  }),
  component: AcademyPage,
});

const beauticianCourses = [
  {
    title: "Basic Beautician",
    duration: "1 Month",
    color: "from-[oklch(0.90_0.07_145)] to-[oklch(0.95_0.05_60)]",
    points: ["Threading, waxing, facials", "Hair care basics", "Hands-on practical training"],
  },
  {
    title: "Advanced Beautician",
    duration: "3 Months",
    color: "from-[oklch(0.92_0.08_60)] to-[oklch(0.88_0.10_80)]",
    points: ["Advanced facials & skin care", "Hair colour & styling", "Party & casual makeup"],
  },
  {
    title: "Master Diploma",
    duration: "6 Months",
    color: "from-[oklch(0.88_0.10_80)] to-[oklch(0.85_0.09_145)]",
    points: ["Complete bridal training", "HD, airbrush & glass-skin", "Salon management"],
  },
];

const makeupCourses = [
  {
    title: "Basic Makeup Artist",
    duration: "Short Course",
    color: "from-[oklch(0.92_0.08_60)] to-[oklch(0.90_0.07_145)]",
    points: ["Foundation & base makeup", "Day & party looks", "Tools & hygiene essentials"],
  },
  {
    title: "Professional Makeup Artist",
    duration: "Advanced",
    color: "from-[oklch(0.88_0.10_80)] to-[oklch(0.85_0.09_145)]",
    points: ["HD, airbrush & glass-skin", "Bridal & reception looks", "Portfolio building"],
  },
];

const extraCourses = [
  {
    title: "Saree Draping Classes",
    duration: "2 Days Class",
    color: "from-[oklch(0.92_0.08_60)] to-[oklch(0.90_0.07_145)]",
    points: ["15+ draping styles", "Bridal saree art", "Quick express class"],
  },
];

function CourseGrid({ items }: { items: typeof beauticianCourses }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((c) => (
        <div key={c.title} className={`rounded-3xl bg-gradient-to-br ${c.color} p-1 shadow-soft`}>
          <div className="flex h-full flex-col rounded-[1.4rem] bg-card p-7">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-semibold md:text-3xl">{c.title}</h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                <Clock className="h-3 w-3" /> {c.duration}
              </span>
            </div>
            <ul className="mt-5 flex-1 space-y-2.5">
              {c.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <WaButton
                variant="whatsapp"
                href={wa(`Hi, I want to join a free trial class for ${c.title}`)}
              >
                Join Free Trial on WhatsApp
              </WaButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AcademyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-card/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <GraduationCap className="h-3.5 w-3.5" /> Sujess Beauty Academy
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Become a <span className="text-gradient">Certified Professional Beautician</span>
            </h1>
            <p className="mt-5 text-foreground/75 md:text-lg">
              Learn from Lakme international trainer Sujatha in Mettupalayam's only dedicated
              professional training institute.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft">
              <Sparkles className="h-4 w-4" /> FREE TRIAL AVAILABLE FOR ALL COURSES
            </div>
          </div>
          <img src={academyImg} alt="Sujess Beauty Academy training class in Mettupalayam" width={1280} height={896} className="rounded-3xl object-cover shadow-luxe" />
        </div>
      </section>

      {/* COURSES */}
      <Section eyebrow="Beautician Course" title="3 Beautician Courses" subtitle="Basic · Advanced · Master Diploma — every course includes a free trial.">
        <CourseGrid items={beauticianCourses} />
      </Section>

      <Section eyebrow="Makeup Artist Course" title="2 Makeup Artist Courses" subtitle="Basic & Professional — learn from an international makeup artist.">
        <CourseGrid items={makeupCourses} />
      </Section>

      <Section eyebrow="Special Class" title="Saree Draping Classes" subtitle="Apart from our diploma courses, we also handle saree draping classes.">
        <CourseGrid items={extraCourses} />
      </Section>

      {/* WHY CHOOSE US */}
      <Section eyebrow="Why Sujess Academy" title="A real institute. Real outcomes." className="bg-gradient-soft rounded-t-[3rem]">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            { Icon: Award, title: "International Trainer", desc: "Lakme certified, global experience" },
            { Icon: BookOpen, title: "Practical Training", desc: "Hands-on from day one" },
            { Icon: GraduationCap, title: "Certification", desc: "Industry recognised certificate" },
            { Icon: Sparkles, title: "Separate Academy Setup", desc: "Dedicated learning space" },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-card p-6 text-center shadow-soft">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-accent">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h4 className="mt-4 font-display text-lg font-semibold">{title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
