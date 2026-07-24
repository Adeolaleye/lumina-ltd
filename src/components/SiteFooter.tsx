import { Link } from "@tanstack/react-router";
import logo from "../assets/lumina-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="absolute inset-x-0 top-0 -translate-y-1/2">
        <div className="mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2.5 font-display text-2xl">
            <span className="inline-flex h-10 w-10 items-center justify-center">
              <img src={logo.url} alt="Lumina logo" className="h-10 w-10 object-contain" />
            </span>
            Lumina
          </Link>

          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Cloud-native technology partner helping organizations modernize, secure, and scale - with
            digital transformation delivered across Nigeria and beyond.
          </p>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-widest text-muted-foreground">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-foreground text-muted-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground text-muted-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground text-muted-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:contact@luminalabsltd.com" className="hover:text-foreground">
                contact@luminalabsltd.com
              </a>
            </li>
            <li>Lumina Labs Limited</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Lumina Labs Limited. All rights reserved.</p>
          <p>Illuminating the future of cloud.</p>
        </div>
      </div>
    </footer>
  );
}
