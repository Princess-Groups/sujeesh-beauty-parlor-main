import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section } from "./Section-BxkKs8Cm.mjs";
import { h as heroImg } from "./hero-salon-OiVVmgKh.mjs";
import { b as bridal } from "./bridal-BX3Du8Hi.mjs";
import { a as academyImg } from "./academy-a1-0x1zR.mjs";
import { h as hair, c as cut, p as pedi, f as facial, t as thread, w as wax } from "./salon-waxing-BR3DcATk.mjs";
const airbrush = "/assets/bridal-hero-BQe3YNnx.jpg";
const glass = "/assets/bridal-D0EyuHCh.jpg";
const hd = "/assets/bridal-3-Dj2xnRv6.jpeg";
const reception = "/assets/bridal-2-nX7sKBeF.jpeg";
const items = [{
  img: hair,
  label: "Hair Treatment"
}, {
  img: cut,
  label: "Hair Cut"
}, {
  img: pedi,
  label: "Pedicure"
}, {
  img: facial,
  label: "Facial"
}, {
  img: thread,
  label: "Threading"
}, {
  img: wax,
  label: "Waxing"
}, {
  img: bridal,
  label: "Bridal"
}, {
  img: hd,
  label: "Bridal"
}, {
  img: academyImg,
  label: "Academy"
}, {
  img: airbrush,
  label: "Bridal"
}, {
  img: glass,
  label: "Bridal"
}, {
  img: reception,
  label: "Bridal"
}, {
  img: heroImg,
  label: "Studio"
}];
function GalleryPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-14 text-center md:px-6 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl font-semibold md:text-6xl", children: [
        "Our ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Gallery" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-foreground/75", children: "Salon work, bridal transformations and student training moments." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-2xl shadow-soft break-inside-avoid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.img, alt: `Sujess ${it.label} work ${i + 1}`, loading: "lazy", className: "w-full transition duration-700 group-hover:scale-105" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur", children: it.label })
    ] }, i)) }) })
  ] });
}
export {
  GalleryPage as component
};
