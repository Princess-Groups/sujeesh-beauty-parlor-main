import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 ${className}`, children: [
    (eyebrow || title || subtitle) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-12 max-w-2xl text-center", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 inline-block rounded-full bg-accent px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-accent-foreground", children: eyebrow }),
      title && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-semibold md:text-5xl", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: subtitle })
    ] }),
    children
  ] });
}
function WaButton({
  href,
  children,
  variant = "primary"
}) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition shadow-soft hover:scale-[1.02]";
  const variants = {
    primary: "bg-gradient-accent text-primary-foreground",
    outline: "border-2 border-primary/30 bg-card text-foreground hover:bg-accent",
    whatsapp: "bg-[var(--whatsapp)] text-white"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, className: `${base} ${variants[variant]}`, children });
}
export {
  Section as S,
  WaButton as W
};
