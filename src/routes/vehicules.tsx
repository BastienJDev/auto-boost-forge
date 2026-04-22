import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Fuel, Gauge, Calendar } from "lucide-react";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/vehicules")({
  head: () => ({
    meta: [
      { title: "Nos véhicules — M-Import" },
      {
        name: "description",
        content:
          "Découvrez notre sélection de véhicules neufs et d'occasion : berlines, SUV, coupés, utilitaires. Importation Europe.",
      },
      { property: "og:title", content: "Nos véhicules — M-Import" },
      {
        property: "og:description",
        content: "Une sélection de véhicules premium au meilleur prix.",
      },
    ],
  }),
  component: VehiculesPage,
});

const vehicules = [
  { img: car1, name: "Berline Premium 2.0 TDI", price: "38 900 €", saving: "−7 200 €", year: "2024", km: "0 km", fuel: "Diesel", tag: "Neuf" },
  { img: car2, name: "SUV Familial 7 places", price: "42 500 €", saving: "−6 500 €", year: "2024", km: "0 km", fuel: "Hybride", tag: "Neuf" },
  { img: car3, name: "Coupé Sport V6", price: "56 900 €", saving: "−9 800 €", year: "2023", km: "12 400 km", fuel: "Essence", tag: "Occasion" },
  { img: car1, name: "Berline Executive", price: "44 200 €", saving: "−8 100 €", year: "2024", km: "0 km", fuel: "Hybride", tag: "Neuf" },
  { img: car2, name: "SUV Compact AWD", price: "36 800 €", saving: "−5 200 €", year: "2024", km: "0 km", fuel: "Essence", tag: "Neuf" },
  { img: car3, name: "Cabriolet GT", price: "62 400 €", saving: "−11 500 €", year: "2023", km: "8 900 km", fuel: "Essence", tag: "Occasion" },
];

function VehiculesPage() {
  return (
    <>
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Stock</p>
          <h1 className="mt-3 text-5xl font-bold text-primary md:text-6xl">
            Nos <span className="text-gradient-brand">véhicules</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Une sélection rigoureuse de véhicules neufs et d'occasion, à prix négociés.
            Vous ne trouvez pas ? Demandez-nous une recherche personnalisée.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vehicules.map((v, i) => (
              <article
                key={i}
                className="group overflow-hidden rounded-2xl bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={v.img}
                    alt={v.name}
                    className="h-56 w-full object-cover transition-smooth group-hover:scale-105"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-white">
                    {v.tag}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand backdrop-blur-sm">
                    {v.saving}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-primary">{v.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {v.year}</span>
                    <span className="inline-flex items-center gap-1"><Gauge className="h-3.5 w-3.5" /> {v.km}</span>
                    <span className="inline-flex items-center gap-1"><Fuel className="h-3.5 w-3.5" /> {v.fuel}</span>
                  </div>
                  <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
                    <div>
                      <div className="text-xs text-muted-foreground">À partir de</div>
                      <div className="font-display text-2xl font-bold text-primary">{v.price}</div>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:gap-2 transition-all"
                    >
                      Devis <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-brand p-10 text-center text-white shadow-elegant">
            <h2 className="font-display text-3xl font-bold">Vous cherchez un autre modèle ?</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/90">
              Notre stock évolue chaque jour. Faites-nous part de vos critères et nous trouverons
              le véhicule parfait pour vous.
            </p>
            <Button size="xl" variant="brand" asChild className="mt-6 bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Demander une recherche personnalisée</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}