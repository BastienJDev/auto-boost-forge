import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Truck,
  Wallet,
  Sparkles,
  Star,
  CheckCircle2,
} from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import showroom from "@/assets/showroom.jpg";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M-Import — L'automobile autrement | Mandataire auto" },
      {
        name: "description",
        content:
          "Importation de véhicules neufs et d'occasion sur mesure. Économisez jusqu'à 30% avec M-Import, votre mandataire automobile de confiance.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-primary">
        <img
          src={heroCar}
          alt="Voiture de luxe sur la route au coucher du soleil"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/95" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-32 md:px-8 md:py-44">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-glow" />
            Mandataire automobile
          </span>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl">
            L'automobile <span className="italic text-brand-glow">autrement</span>
          </h1>
          <p className="max-w-2xl text-lg text-white/85 md:text-xl">
            Importation de véhicules sur mesure — neufs ou d'occasion. Rapide, sécurisé,
            et jusqu'à 30% d'économies sur le prix catalogue.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button size="xl" variant="hero" asChild>
              <Link to="/vehicules">
                <Search className="h-5 w-5" />
                Trouver mon véhicule
              </Link>
            </Button>
            <Button size="xl" variant="outlineLight" asChild>
              <Link to="/contact">
                Nous contacter
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid w-full max-w-3xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            <div>
              <div className="font-display text-3xl font-bold text-white md:text-4xl">+1500</div>
              <div className="text-sm text-white/70">Clients satisfaits</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-white md:text-4xl">-30%</div>
              <div className="text-sm text-white/70">D'économies moyennes</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-white md:text-4xl">15j</div>
              <div className="text-sm text-white/70">Délai moyen de livraison</div>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-gradient-soft py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Pourquoi M-Import
            </p>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Une expérience d'achat repensée
            </h2>
            <p className="mt-4 text-muted-foreground">
              Nous mettons notre savoir-faire et notre réseau européen à votre service
              pour vous offrir le véhicule de vos rêves au meilleur prix.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Wallet,
                title: "Tarifs imbattables",
                desc: "Des économies réelles grâce à notre réseau de concessionnaires européens partenaires.",
              },
              {
                icon: ShieldCheck,
                title: "Achat sécurisé",
                desc: "Garantie constructeur, démarches administratives prises en charge de A à Z.",
              },
              {
                icon: Truck,
                title: "Livraison à domicile",
                desc: "Votre véhicule livré chez vous, partout en France, dans les meilleurs délais.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-8 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 md:grid-cols-2 md:px-8">
          <div className="relative">
            <img
              src={showroom}
              alt="Showroom moderne avec un véhicule premium"
              className="rounded-2xl shadow-elegant"
              loading="lazy"
              width={1280}
              height={800}
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gradient-brand p-6 text-white shadow-glow md:block">
              <div className="font-display text-3xl font-bold">15 ans</div>
              <div className="text-sm text-white/80">d'expérience</div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Notre méthode
            </p>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Un parcours simple et transparent
            </h2>
            <p className="mt-4 text-muted-foreground">
              De la recherche du véhicule à la livraison, nous vous accompagnons à chaque étape.
            </p>

            <ol className="mt-10 space-y-6">
              {[
                { n: "01", t: "Définition du besoin", d: "Échange personnalisé pour cerner vos critères et votre budget." },
                { n: "02", t: "Recherche & négociation", d: "Nous sourçons votre véhicule auprès de notre réseau européen." },
                { n: "03", t: "Validation & commande", d: "Devis transparent, validation, et signature sécurisée." },
                { n: "04", t: "Livraison clé en main", d: "Immatriculation, transport, livraison à votre domicile." },
              ].map((s) => (
                <li key={s.n} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-brand">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{s.t}</h3>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* VEHICULES */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">
                Sélection
              </p>
              <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
                Quelques véhicules disponibles
              </h2>
            </div>
            <Button variant="outline" size="lg" asChild>
              <Link to="/vehicules">
                Voir tout le stock <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { img: car1, name: "Berline Premium", price: "À partir de 38 900 €", tag: "Neuf" },
              { img: car2, name: "SUV Familial", price: "À partir de 42 500 €", tag: "Neuf" },
              { img: car3, name: "Coupé Sport", price: "À partir de 56 900 €", tag: "Occasion" },
            ].map((c) => (
              <article
                key={c.name}
                className="group overflow-hidden rounded-2xl bg-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="h-64 w-full object-cover transition-smooth group-hover:scale-105"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-white">
                    {c.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-primary">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.price}</p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand hover:gap-2 transition-all"
                  >
                    Demander un devis <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Témoignages
            </p>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Ce que nos clients disent
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { name: "Julien M.", text: "Service au top, véhicule livré dans les délais et belle économie réalisée. Je recommande !" },
              { name: "Sophie L.", text: "Accompagnement très professionnel du début à la fin. Une équipe à l'écoute et réactive." },
              { name: "Karim B.", text: "J'ai trouvé exactement le SUV que je cherchais à un prix imbattable. Merci M-Import !" },
            ].map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-border bg-card p-8 shadow-card"
              >
                <div className="flex gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-foreground/80">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand font-semibold text-white">
                    {t.name[0]}
                  </div>
                  <span className="font-medium text-primary">{t.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-primary py-24">
        <div className="absolute inset-0 bg-gradient-brand opacity-90" />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Prêt à concrétiser votre projet auto ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="xl" variant="brand" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                <CheckCircle2 className="h-5 w-5" /> Obtenir mon devis
              </Link>
            </Button>
            <Button size="xl" variant="outlineLight" asChild>
              <Link to="/vehicules">Parcourir le stock</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
