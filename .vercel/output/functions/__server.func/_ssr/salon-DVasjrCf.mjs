import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, W as WaButton } from "./Section-BxkKs8Cm.mjs";
import { w as wa } from "./router-n7KBB1tt.mjs";
import { h as hair, c as cut, p as pedi, f as facial, t as thread, w as wax } from "./salon-waxing-BR3DcATk.mjs";
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
import "../_libs/lucide-react.mjs";
const services = [{
  title: "Hair Treatments",
  price: "₹1,500",
  desc: "Spa, smoothening, keratin, hair botox.",
  img: hair
}, {
  title: "Hair Cuts & Styling",
  price: "₹450",
  desc: "Trims, layered, fringe, advanced cuts.",
  img: cut
}, {
  title: "Pedicure & Manicure",
  price: "₹450",
  desc: "Classic, spa, gel & luxury treatments.",
  img: pedi
}, {
  title: "Facial Service",
  price: "₹800",
  desc: "Classic, de-tan, gold, bridal & advanced facials.",
  img: facial
}, {
  title: "Threading",
  price: "₹50",
  desc: "Eyebrow, upper lip, forehead & full-face threading.",
  img: thread
}, {
  title: "Waxing",
  price: "₹300",
  desc: "Full body, arms, legs, underarm & bikini waxing.",
  img: wax
}];
function SalonPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 text-center md:px-6 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl font-semibold md:text-6xl", children: [
        "Professional ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Beauty Services" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-foreground/75 md:text-lg", children: "Premium salon experiences in Mettupalayam — from everyday refresh to head-turning glam." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group overflow-hidden rounded-3xl bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, loading: "lazy", className: "h-full w-full object-cover transition duration-700 group-hover:scale-110" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground", children: [
            "From ",
            s.price
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WaButton, { variant: "whatsapp", href: wa(`Hi, I want to book ${s.title} at Sujess Beauty Salon`), children: "Book Now on WhatsApp" }) })
      ] })
    ] }, s.title)) }) })
  ] });
}
export {
  SalonPage as component
};
