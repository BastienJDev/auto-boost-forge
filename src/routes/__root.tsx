import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <div className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-24">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-gradient-brand">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cette page n'existe pas ou a été déplacée.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-elegant transition-smooth hover:shadow-glow"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "M-Import — L'automobile autrement" },
      {
        name: "description",
        content:
          "Mandataire automobile : importation de véhicules neufs et d'occasion sur mesure, rapide et sécurisée. Économisez sur votre prochain véhicule avec M-Import.",
      },
      { name: "author", content: "M-Import" },
      { property: "og:title", content: "M-Import — L'automobile autrement" },
      {
        property: "og:description",
        content:
          "Mandataire automobile : importation sur mesure de véhicules neufs et d'occasion partout en France.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
