import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, W as WaButton } from "./Section-BxkKs8Cm.mjs";
import { S as SITE, w as wa } from "./router-n7KBB1tt.mjs";
import { b as MessageCircle, P as Phone, a as MapPin, C as Clock, I as Instagram } from "../_libs/lucide-react.mjs";
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
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-14 text-center md:px-6 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl font-semibold md:text-6xl", children: [
        "Let's ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "connect" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-foreground/75", children: "We reply on WhatsApp within minutes. Walk-ins welcome too." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: [{
        Icon: MessageCircle,
        title: "WhatsApp",
        value: SITE.phones[0],
        href: wa("Hi Sujess Beauty, I'd like to know more.")
      }, {
        Icon: Phone,
        title: "Call us",
        value: SITE.phones.join(" · "),
        href: `tel:+91${SITE.phones[0]}`
      }, {
        Icon: MapPin,
        title: "Visit",
        value: SITE.location,
        href: "https://maps.google.com/?q=Mettupalayam"
      }].map(({
        Icon,
        title,
        value,
        href
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, className: "group rounded-3xl bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-luxe", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-full bg-gradient-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-xl font-semibold", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 inline-block text-sm font-semibold text-primary", children: "Open →" })
      ] }, title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-6 rounded-3xl bg-gradient-soft p-8 md:grid-cols-2 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold md:text-3xl", children: "Studio hours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-primary" }),
              " Mon–Sat: 9:00 AM – 8:00 PM"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-primary" }),
              " Sun: By appointment"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WaButton, { variant: "whatsapp", href: wa("Hi, I want to book an appointment"), children: "Book Appointment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.instagram.com/sujessbeautysalon", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-card px-5 py-3 text-sm font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }),
              " Instagram"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Sujess Beauty location", src: "https://www.google.com/maps?q=Mettupalayam,Tamil+Nadu&output=embed", className: "h-72 w-full md:h-full", loading: "lazy" }) })
      ] })
    ] })
  ] });
}
export {
  ContactPage as component
};
