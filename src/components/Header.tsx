import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-m-import.png";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/prestations", label: "Prestations" },
  { to: "/vehicules", label: "Véhicules" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="M-Import" className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-smooth hover:bg-accent hover:text-primary"
              activeProps={{ className: "text-primary bg-accent" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+33000000000"
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 transition-smooth hover:text-brand"
          >
            <Phone className="h-4 w-4" />
            <span>06 00 00 00 00</span>
          </a>
          <Button variant="hero" asChild>
            <Link to="/contact">Demander un devis</Link>
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-accent"
                activeProps={{ className: "text-primary bg-accent" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Button variant="hero" asChild className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Demander un devis
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}