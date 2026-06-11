import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin } from "lucide-react";
import { SITE, wa } from "@/lib/site";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-20 bg-gradient-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-gradient-accent p-1 ring-1 ring-primary/20">
              <img src={logo} alt="Sujess logo" className="h-full w-full object-contain" />
            </div>
            <span className="font-display text-lg font-semibold">Sujess</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Premium salon, academy & bridal studio in Mettupalayam.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/academy" className="hover:text-primary">Academy</Link></li>
            <li><Link to="/salon" className="hover:text-primary">Salon</Link></li>
            <li><Link to="/bridal" className="hover:text-primary">Bridal Studio</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {SITE.phones.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:+91${p}`} className="hover:text-primary">{p}</a>
              </li>
            ))}
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {SITE.location}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Follow</h4>
          <a
            href="https://www.instagram.com/sujessbeautysalon"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            <Instagram className="h-4 w-4" /> Instagram Reels
          </a>
          <a
            href={wa("Hi Sujess Beauty, I'd like to know more.")}
            className="mt-3 block text-sm text-muted-foreground hover:text-primary"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
