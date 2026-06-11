import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section } from "./Section-BxkKs8Cm.mjs";
import { S as Star, Q as Quote } from "../_libs/lucide-react.mjs";
const reviews = [{
  name: "Priya R.",
  role: "Master Diploma Student",
  text: "I joined for 3 months but gained advanced knowledge. Trainer support is amazing!"
}, {
  name: "Divya K.",
  role: "Academy Graduate",
  text: "Best academy in Mettupalayam with real professional training. The separate institute makes a huge difference."
}, {
  name: "Anitha S.",
  role: "Bride",
  text: "Bridal makeup was flawless and long-lasting. I felt like a queen on my wedding day!"
}, {
  name: "Lakshmi M.",
  role: "Salon Client",
  text: "Hair treatment results lasted months. The pista green ambience is so calming."
}, {
  name: "Meena V.",
  role: "Bride",
  text: "Glass skin makeup looked stunning in photos. Sujatha ma'am is truly an international artist."
}, {
  name: "Kavitha P.",
  role: "Basic Course Student",
  text: "Free trial convinced me instantly. Practical from day one — exactly what I needed."
}];
function ReviewsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-14 text-center md:px-6 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl font-semibold md:text-6xl", children: [
        "Loved by our ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "clients & students" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 inline-flex items-center gap-2 rounded-full bg-card/70 px-4 py-2 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "4.9 / 5 from 500+ reviews" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: reviews.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-6 w-6 text-primary/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-foreground/85", children: [
        '"',
        r.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-full bg-gradient-accent font-semibold text-primary-foreground", children: r.name.charAt(0) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: r.role })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" }, i)) })
    ] }, r.name)) }) })
  ] });
}
export {
  ReviewsPage as component
};
