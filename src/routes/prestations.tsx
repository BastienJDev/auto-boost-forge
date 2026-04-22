import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, FileCheck, Truck, CreditCard, Repeat, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/prestations")({
  head: () => ({
    meta: [
      { title: "Nos prestations — M-Import" },
      {
        name: "description",
        content:
          "Importation, financement, reprise, livraison : découvrez toutes les prestations M-Import pour un achat automobile clé en main.",
      },
      { property: "og:title", content: "Nos prestations — M-Import" },
      {
        property: "og:description",
        content: "Un service complet pour l'achat de votre véhicule en toute sérénité.",
      },
    ],
  }),
  component: PrestationsPage,
});

const services = [
  { icon: Search, t: "Recherche sur mesure", d: "Vous nous décrivez votre véhicule idéal, nous le trouvons dans notre réseau européen." },
  { icon: FileCheck, t: "Démarches administratives", d: "Carte grise, immatriculation, quitus fiscal : nous nous occupons de tout." },
  { icon: Truck, t: "Livraison à domicile", d: "Votre véhicule livré directement chez vous, partout en France métropolitaine." },
  { icon: CreditCard, t: "Solutions de financement", d: "Crédit classique, ballon, LOA ou LLD : la formule qui correspond à votre projet." },
  { icon: Repeat, t: "Reprise de votre ancien véhicule", d: "Estimation gratuite et reprise de votre véhicule actuel à un prix juste." },
  { icon: ShieldCheck, t: "Garantie & SAV", d: "Garantie constructeur conservée et accompagnement après livraison." },
];

function PrestationsPage() {
  return (
    <>
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Prestations</p>
          <h1 className="mt-3 text-5xl font-bold text-primary md:text-6xl">
            Un service <span className="text-gradient-brand">clé en main</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            De la recherche du véhicule à sa livraison, nous prenons en charge l'intégralité de
            votre projet automobile.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.t}
              className="group rounded-2xl border border-border bg-card p-8 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-brand transition-smooth group-hover:bg-gradient-brand group-hover:text-white">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-primary">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Une question sur nos prestations ?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Notre équipe se tient à votre disposition pour étudier votre projet.
          </p>
          <Button size="xl" variant="hero" asChild className="mt-8">
            <Link to="/contact">Nous contacter <ArrowRight className="h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}