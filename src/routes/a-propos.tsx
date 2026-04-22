import { createFileRoute } from "@tanstack/react-router";
import { Award, Globe2, Heart, Users } from "lucide-react";
import showroom from "@/assets/showroom.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — M-Import" },
      {
        name: "description",
        content:
          "Découvrez M-Import, mandataire automobile passionné. Notre histoire, nos valeurs et notre engagement envers la satisfaction client.",
      },
      { property: "og:title", content: "À propos — M-Import" },
      {
        property: "og:description",
        content: "Mandataire automobile passionné, à votre service depuis plus de 15 ans.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">À propos</p>
          <h1 className="mt-3 text-5xl font-bold text-primary md:text-6xl">
            Notre passion, <span className="text-gradient-brand">votre satisfaction</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            M-Import est né d'une conviction : tout le monde mérite de rouler dans le véhicule de
            ses rêves, sans compromis sur le prix ou la qualité du service.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
          <img
            src={showroom}
            alt="Notre showroom"
            className="rounded-2xl shadow-elegant"
            loading="lazy"
            width={1280}
            height={800}
          />
          <div>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Notre histoire</h2>
            <p className="mt-4 text-muted-foreground">
              Depuis plus de 15 ans, M-Import accompagne particuliers et professionnels dans
              l'acquisition de leur véhicule idéal. Forts d'un réseau solide en Allemagne, en
              Belgique, en Espagne et en Italie, nous sourçons pour vous les meilleures offres
              du marché européen.
            </p>
            <p className="mt-4 text-muted-foreground">
              Notre mission est simple : rendre l'achat automobile transparent, agréable et
              avantageux. Chaque dossier est suivi personnellement, parce qu'un projet auto, c'est
              avant tout une histoire humaine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">Nos valeurs</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { icon: Heart, t: "Passion", d: "L'automobile dans l'ADN, depuis toujours." },
              { icon: Award, t: "Excellence", d: "Des standards élevés à chaque étape." },
              { icon: Users, t: "Proximité", d: "Un interlocuteur unique, à votre écoute." },
              { icon: Globe2, t: "Réseau", d: "Présents dans toute l'Europe pour vous." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl bg-card p-6 text-center shadow-card">
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-primary">{v.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}