import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { X, M as Menu, P as Phone, a as MapPin, I as Instagram, b as MessageCircle } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-Qnf8dYww.css";
const logo = "/assets/logo-CKvPEIe8.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/academy", label: "Academy" },
  { to: "/salon", label: "Salon" },
  { to: "/bridal", label: "Bridal" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", onClick: () => setOpen(false), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-gradient-accent p-1 shadow-soft ring-1 ring-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Sujess logo", className: "h-full w-full object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-semibold", children: "Sujess" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.16em] text-muted-foreground", children: "Bridal Studio · Beauty Salon · Academy" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 lg:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          activeProps: { className: "text-primary bg-accent/60" },
          className: "rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary",
          children: l.label
        },
        l.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen((v) => !v),
          "aria-label": "Toggle menu",
          className: "grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "border-t border-border bg-background lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-7xl flex-col px-4 py-2", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: l.to,
        onClick: () => setOpen(false),
        activeProps: { className: "text-primary" },
        className: "rounded-lg px-3 py-3 text-sm font-medium",
        children: l.label
      },
      l.to
    )) }) })
  ] });
}
const SITE = {
  name: "Sujess Beauty Salon & Academy",
  phones: ["9842554248", "9942947289", "9842055611"],
  whatsapp: "919842554248",
  location: "Mettupalayam, Karamadai & Velankanni"
};
const wa = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-20 bg-gradient-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-gradient-accent p-1 ring-1 ring-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Sujess logo", className: "h-full w-full object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-semibold", children: "Sujess" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Premium salon, academy & bridal studio in Mettupalayam, Karamadai & Velankanni." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/academy", className: "hover:text-primary", children: "Academy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/salon", className: "hover:text-primary", children: "Salon" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/bridal", className: "hover:text-primary", children: "Bridal Studio" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "hover:text-primary", children: "Gallery" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
          SITE.phones.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:+91${p}`, className: "hover:text-primary", children: p })
          ] }, p)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
            " ",
            SITE.location
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: "Follow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://www.instagram.com/sujessbeautysalon",
            target: "_blank",
            rel: "noreferrer",
            className: "mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-4 py-2 text-sm font-medium text-primary-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }),
              " Instagram Reels"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: wa("Hi Sujess Beauty, I'd like to know more."),
            className: "mt-3 block text-sm text-muted-foreground hover:text-primary",
            children: "Chat on WhatsApp →"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 py-5 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      SITE.name,
      ". All rights reserved."
    ] })
  ] });
}
function FloatingWhatsApp() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-24 right-4 z-50 w-[280px] rounded-2xl border border-border bg-card p-4 shadow-luxe animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-semibold", children: "Hi there! 👋" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "How can Sujess Beauty help you today?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), "aria-label": "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 text-muted-foreground" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: wa("Hi, I want to book a salon appointment"),
            className: "block rounded-lg bg-accent px-3 py-2 text-xs font-medium text-accent-foreground hover:opacity-90",
            children: "💇‍♀️ Book salon service"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: wa("Hi, I want to join a free trial class for beautician course"),
            className: "block rounded-lg bg-accent px-3 py-2 text-xs font-medium text-accent-foreground hover:opacity-90",
            children: "🎓 Free academy trial"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: wa("Hi, I want to book bridal makeup consultation"),
            className: "block rounded-lg bg-accent px-3 py-2 text-xs font-medium text-accent-foreground hover:opacity-90",
            children: "👰 Bridal consultation"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        "aria-label": "WhatsApp chat",
        className: "fixed bottom-5 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[var(--whatsapp)] text-white shadow-luxe transition hover:scale-105",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-7 w-7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-[var(--whatsapp)]/70" })
        ]
      }
    )
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sujess Beauty Salon & Academy — Mettupalayam" },
      { name: "description", content: "Premium beauty salon, professional beautician academy and bridal studio in Mettupalayam. International trainer, certified courses, bridal makeup. Book on WhatsApp." },
      { name: "keywords", content: "beauty parlour in Mettupalayam, beautician course in Mettupalayam, bridal makeup Mettupalayam, beauty academy Mettupalayam, Sujess Beauty" },
      { property: "og:title", content: "Sujess Beauty Salon & Academy — Mettupalayam" },
      { property: "og:description", content: "Premium beauty salon, professional beautician academy and bridal studio in Mettupalayam. International trainer, certified courses, bridal makeup. Book on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sujess Beauty Salon & Academy — Mettupalayam" },
      { name: "twitter:description", content: "Premium beauty salon, professional beautician academy and bridal studio in Mettupalayam. International trainer, certified courses, bridal makeup. Book on WhatsApp." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/93a9f15a-0926-4394-a14d-dc89471ca00c/id-preview-e53d8447--e6b97ec1-5f29-4b9b-8a14-20c8b05ec0ab.lovable.app-1778924710006.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/93a9f15a-0926-4394-a14d-dc89471ca00c/id-preview-e53d8447--e6b97ec1-5f29-4b9b-8a14-20c8b05ec0ab.lovable.app-1778924710006.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./salon-AJ9VKwbJ.mjs");
const Route$6 = createFileRoute("/salon")({
  head: () => ({
    meta: [{
      title: "Beauty Parlour in Mettupalayam — Sujess Beauty Salon"
    }, {
      name: "description",
      content: "Premium beauty salon in Mettupalayam offering hair treatments, hair cuts, pedicure, manicure, facial, threading & waxing. Book on WhatsApp."
    }],
    links: [{
      rel: "canonical",
      href: "/salon"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./reviews-Bp0Oqji9.mjs");
const Route$5 = createFileRoute("/reviews")({
  head: () => ({
    meta: [{
      title: "Client Reviews — Sujess Beauty Salon & Academy"
    }, {
      name: "description",
      content: "Read what students and clients say about Sujess Beauty Salon & Academy in Mettupalayam."
    }],
    links: [{
      rel: "canonical",
      href: "/reviews"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./gallery-Bd8hM6IL.mjs");
const Route$4 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Sujess Beauty Salon & Academy"
    }, {
      name: "description",
      content: "Real work from Sujess: salon transformations, bridal looks and academy training sessions."
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact--5btjHxo.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Sujess Beauty Salon & Academy, Mettupalayam"
    }, {
      name: "description",
      content: "Visit, call or WhatsApp Sujess Beauty Salon & Academy in Mettupalayam, Karamadai & Velankanni."
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./bridal-Bgb-phOc.mjs");
const Route$2 = createFileRoute("/bridal")({
  head: () => ({
    meta: [{
      title: "Bridal Makeup in Mettupalayam — Sujess Bridal Studio"
    }, {
      name: "description",
      content: "HD, airbrush, glass-skin & reception bridal makeup in Mettupalayam. Bridal packages starting ₹5000. Book a consultation on WhatsApp."
    }, {
      property: "og:type",
      content: "product"
    }],
    links: [{
      rel: "canonical",
      href: "/bridal"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./academy-dxfndpEh.mjs");
const Route$1 = createFileRoute("/academy")({
  head: () => ({
    meta: [{
      title: "Beautician Course in Mettupalayam — Sujess Beauty Academy"
    }, {
      name: "description",
      content: "Become a certified professional beautician. Basic, Advanced & Master Diploma courses. Free trial available. International trainer in Mettupalayam."
    }, {
      property: "og:title",
      content: "Sujess Beauty Academy — Beautician Courses in Mettupalayam"
    }, {
      property: "og:description",
      content: "Certified beautician courses with international trainer. Free trial class for all courses."
    }],
    links: [{
      rel: "canonical",
      href: "/academy"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Dk2Cp3q8.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Sujess Beauty Salon & Academy — Premium Beauty in Mettupalayam"
    }, {
      name: "description",
      content: "Premium beauty salon, academy & bridal studio in Mettupalayam. International trainer Sujatha. Book on WhatsApp or join a free trial class."
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SalonRoute = Route$6.update({
  id: "/salon",
  path: "/salon",
  getParentRoute: () => Route$7
});
const ReviewsRoute = Route$5.update({
  id: "/reviews",
  path: "/reviews",
  getParentRoute: () => Route$7
});
const GalleryRoute = Route$4.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const BridalRoute = Route$2.update({
  id: "/bridal",
  path: "/bridal",
  getParentRoute: () => Route$7
});
const AcademyRoute = Route$1.update({
  id: "/academy",
  path: "/academy",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AcademyRoute,
  BridalRoute,
  ContactRoute,
  GalleryRoute,
  ReviewsRoute,
  SalonRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  SITE as S,
  router as r,
  wa as w
};
