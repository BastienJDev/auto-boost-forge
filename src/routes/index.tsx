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
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }),
  );

  const reviews = [
    {
      name: "Julien Martin",
      initials: "JM",
      rating: 5,
      date: "Il y a 2 semaines",
      text: "Service au top ! Véhicule livré dans les délais annoncés et belle économie réalisée par rapport au prix concessionnaire français. L'équipe est très réactive et professionnelle. Je recommande vivement M-Import.",
    },
    {
      name: "Sophie Lefèvre",
      initials: "SL",
      rating: 5,
      date: "Il y a 1 mois",
      text: "Accompagnement très professionnel du début à la fin. Une équipe à l'écoute, transparente sur les délais et les démarches. Mon SUV est arrivé impeccable, comme neuf. Merci pour ce travail de qualité !",
    },
    {
      name: "Karim Benali",
      initials: "KB",
      rating: 5,
      date: "Il y a 1 mois",
      text: "J'ai trouvé exactement le SUV que je cherchais à un prix imbattable. Plus de 6 000 € d'économies réalisées. Le suivi a été irréproachable, je recommande à 100%.",
    },
    {
      name: "Camille Dubois",
      initials: "CD",
      rating: 5,
      date: "Il y a 2 mois",
      text: "Première expérience avec un mandataire et je ne suis pas déçue. Communication fluide, devis clair, livraison à domicile sans aucun souci. Je referai appel à eux pour mon prochain achat.",
    },
    {
      name: "Nicolas Roussel",
      initials: "NR",
      rating: 5,
      date: "Il y a 2 mois",
      text: "Très satisfait de ma berline allemande importée. L'équipe a su me conseiller sur la finition la plus adaptée à mes besoins. Économie réelle et service haut de gamme.",
    },
    {
      name: "Émilie Garnier",
      initials: "EG",
      rating: 5,
      date: "Il y a 3 mois",
      text: "Une équipe humaine et compétente. Ils ont géré toutes les formalités administratives, je n'ai eu qu'à récupérer les clés. Bravo pour le professionnalisme !",
    },
    {
      name: "Thomas Petit",
      initials: "TP",
      rating: 5,
      date: "Il y a 3 mois",
      text: "Excellent rapport qualité/prix, conseils avisés et délais respectés. M-Import a su me trouver le coupé sport de mes rêves avec toutes les options souhaitées. Merci !",
    },
    {
      name: "Laura Vasseur",
      initials: "LV",
      rating: 5,
      date: "Il y a 4 mois",
      text: "Je recommande sans hésiter. L'équipe est disponible, à l'écoute et propose un vrai service sur mesure. Mon véhicule est parfait, livré comme convenu.",
    },
  ];

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

      {/* AVIS GOOGLE */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Avis Google
            </div>
            <h2 className="mt-4 text-4xl font-bold text-primary md:text-5xl">
              Ce que nos clients disent
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="font-display text-5xl font-bold text-primary">4,9</span>
              <div>
                <div className="flex gap-0.5 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Basé sur plus de 200 avis Google
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-14">
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[autoplay.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {reviews.map((r) => (
                  <CarouselItem
                    key={r.name}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-card transition-smooth hover:shadow-elegant">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-0.5 text-yellow-500">
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                      </div>
                      <blockquote className="mt-4 flex-1 text-foreground/80">
                        "{r.text}"
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand font-semibold text-white">
                          {r.initials}
                        </div>
                        <div>
                          <div className="font-medium text-primary">{r.name}</div>
                          <div className="text-xs text-muted-foreground">{r.date}</div>
                        </div>
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:-left-4 md:flex" />
              <CarouselNext className="hidden md:-right-4 md:flex" />
            </Carousel>
          </div>

          <div className="mt-10 flex justify-center">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.google.com/search?q=m-import+avis"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir tous les avis Google <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
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
