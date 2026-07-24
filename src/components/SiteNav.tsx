import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/lumina-logo.png.asset.json";
import { ThemeToggle } from "./ThemeToggle";


const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-border/60 bg-background/60 px-5 py-3 backdrop-blur-xl md:mt-6">
        <Link to="/" className="flex items-center gap-3 font-display text-xl">
          <span className="relative inline-flex h-20 w-20 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
            <img src={logo.url} alt="Lumina logo" className="relative h-20 w-20 object-contain" />
          </span>

          <span className="tracking-tight">Lumina</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link
            to="/contact"
            className="rounded-xl gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-glow"
          >
            Start a project
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((s) => !s)}
            className="rounded-lg p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-border/60 bg-background/90 p-3 backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                activeProps={{ className: "text-foreground bg-muted" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg gradient-brand px-3 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
