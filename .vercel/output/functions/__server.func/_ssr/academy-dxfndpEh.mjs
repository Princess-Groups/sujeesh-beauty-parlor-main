import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, W as WaButton } from "./Section-BxkKs8Cm.mjs";
import { w as wa } from "./router-G-XU69qc.mjs";
import { a as academyImg } from "./academy-a1-0x1zR.mjs";
import { G as GraduationCap, d as Sparkles, A as Award, B as BookOpen, C as Clock, e as CircleCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const beauticianCourses = [{
  title: "Basic Beautician",
  duration: "1 Month",
  color: "from-[oklch(0.90_0.07_145)] to-[oklch(0.95_0.05_60)]",
  points: ["Threading, waxing, facials", "Hair care basics", "Hands-on practical training"]
}, {
  title: "Advanced Beautician",
  duration: "3 Months",
  color: "from-[oklch(0.92_0.08_60)] to-[oklch(0.88_0.10_80)]",
  points: ["Advanced facials & skin care", "Hair colour & styling", "Party & casual makeup"]
}, {
  title: "Master Diploma",
  duration: "6 Months",
  color: "from-[oklch(0.88_0.10_80)] to-[oklch(0.85_0.09_145)]",
  points: ["Complete bridal training", "HD, airbrush & glass-skin", "Salon management"]
}];
const makeupCourses = [{
  title: "Basic Makeup Artist",
  duration: "Short Course",
  color: "from-[oklch(0.92_0.08_60)] to-[oklch(0.90_0.07_145)]",
  points: ["Foundation & base makeup", "Day & party looks", "Tools & hygiene essentials"]
}, {
  title: "Professional Makeup Artist",
  duration: "Advanced",
  color: "from-[oklch(0.88_0.10_80)] to-[oklch(0.85_0.09_145)]",
  points: ["HD, airbrush & glass-skin", "Bridal & reception looks", "Portfolio building"]
}];
const extraCourses = [{
  title: "Saree Draping Classes",
  duration: "2 Days Class",
  color: "from-[oklch(0.92_0.08_60)] to-[oklch(0.90_0.07_145)]",
  points: ["15+ draping styles", "Bridal saree art", "Quick express class"]
}];
function CourseGrid({
  items
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: items.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-3xl bg-gradient-to-br ${c.color} p-1 shadow-soft`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col rounded-[1.4rem] bg-card p-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold md:text-3xl", children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
        " ",
        c.duration
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 flex-1 space-y-2.5", children: c.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-foreground/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
      " ",
      p
    ] }, p)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WaButton, { variant: "whatsapp", href: wa(`Hi, I want to join a free trial class for ${c.title}`), children: "Join Free Trial on WhatsApp" }) })
  ] }) }, c.title)) });
}
function AcademyPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-card/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-3.5 w-3.5" }),
          " Sujess Beauty Academy"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl", children: [
          "Become a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Certified Professional Beautician" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-foreground/75 md:text-lg", children: "Learn from international trainer Sujatha in Mettupalayam's only dedicated professional training institute." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
          " FREE TRIAL AVAILABLE FOR ALL COURSES"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: academyImg, alt: "Sujess Beauty Academy training class in Mettupalayam", width: 1280, height: 896, className: "rounded-3xl object-cover shadow-luxe" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "Beautician Course", title: "3 Beautician Courses", subtitle: "Basic · Advanced · Master Diploma — every course includes a free trial.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CourseGrid, { items: beauticianCourses }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "Makeup Artist Course", title: "2 Makeup Artist Courses", subtitle: "Basic & Professional — learn from an international makeup artist.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CourseGrid, { items: makeupCourses }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "Special Class", title: "Saree Draping Classes", subtitle: "Apart from our diploma courses, we also handle saree draping classes.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CourseGrid, { items: extraCourses }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "Why Sujess Academy", title: "A real institute. Real outcomes.", className: "bg-gradient-soft rounded-t-[3rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-4", children: [{
      Icon: Award,
      title: "International Trainer",
      desc: "Certified, global experience"
    }, {
      Icon: BookOpen,
      title: "Practical Training",
      desc: "Hands-on from day one"
    }, {
      Icon: GraduationCap,
      title: "Certification",
      desc: "Industry recognised certificate"
    }, {
      Icon: Sparkles,
      title: "Separate Academy Setup",
      desc: "Dedicated learning space"
    }].map(({
      Icon,
      title,
      desc
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-6 text-center shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 font-display text-lg font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: desc })
    ] }, title)) }) })
  ] });
}
export {
  AcademyPage as component
};
