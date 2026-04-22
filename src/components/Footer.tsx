import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-m-import.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3 rounded-lg bg-white p-3">
            <img src={logo} alt="M-Import" className="h-12 w-auto" />
          </div>
          <p className="text-sm text-primary-foreground/70">
            L'automobile autrement. Importation de véhicules sur mesure, rapide et sécurisée
            partout en France.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-primary-foreground/70 hover:text-brand-glow">Accueil</Link></li>
            <li><Link to="/a-propos" className="text-primary-foreground/70 hover:text-brand-glow">À propos</Link></li>
            <li><Link to="/prestations" className="text-primary-foreground/70 hover:text-brand-glow">Prestations</Link></li>
            <li><Link to="/vehicules" className="text-primary-foreground/70 hover:text-brand-glow">Véhicules</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/70 hover:text-brand-glow">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Importation Europe</li>
            <li>Recherche sur mesure</li>
            <li>Financement & leasing</li>
            <li>Reprise véhicule</li>
            <li>Livraison à domicile</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-glow" />
              <span>France, livraison nationale</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-glow" />
              <a href="tel:+33000000000" className="hover:text-brand-glow">06 00 00 00 00</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-glow" />
              <a href="mailto:contact@m-import.fr" className="hover:text-brand-glow">contact@m-import.fr</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-primary-foreground/60 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} M-Import — L'automobile autrement. Tous droits réservés.</p>
          <p>Mandataire automobile agréé</p>
        </div>
      </div>
    </footer>
  );
}