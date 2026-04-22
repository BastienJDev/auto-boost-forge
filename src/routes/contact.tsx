import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — M-Import" },
      {
        name: "description",
        content:
          "Contactez M-Import pour un devis personnalisé et gratuit. Notre équipe est à votre écoute pour votre projet automobile.",
      },
      { property: "og:title", content: "Contact — M-Import" },
      {
        property: "og:description",
        content: "Demandez votre devis personnalisé et gratuit.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Contact</p>
          <h1 className="mt-3 text-5xl font-bold text-primary md:text-6xl">
            Parlons de votre <span className="text-gradient-brand">projet</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Une question, un devis, une recherche personnalisée ? Notre équipe vous répond
            sous 24 heures.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-5 md:px-8">
          <div className="space-y-6 md:col-span-2">
            {[
              { icon: Phone, t: "Téléphone", d: "06 00 00 00 00", href: "tel:+33000000000" },
              { icon: Mail, t: "Email", d: "contact@m-import.fr", href: "mailto:contact@m-import.fr" },
              { icon: MapPin, t: "Zone d'intervention", d: "France entière, livraison à domicile" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-primary">{c.t}</h3>
                {c.href ? (
                  <a href={c.href} className="mt-1 text-muted-foreground hover:text-brand">
                    {c.d}
                  </a>
                ) : (
                  <p className="mt-1 text-muted-foreground">{c.d}</p>
                )}
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-border bg-card p-8 shadow-elegant md:col-span-3"
          >
            {sent ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-primary">
                  Message envoyé !
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Merci pour votre demande. Nous revenons vers vous sous 24h.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-primary">
                  Demande de devis gratuit
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tous les champs marqués d'un * sont obligatoires.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firstname">Prénom *</Label>
                    <Input id="firstname" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="lastname">Nom *</Label>
                    <Input id="lastname" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" className="mt-1.5" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="vehicle">Véhicule recherché</Label>
                    <Input
                      id="vehicle"
                      placeholder="Ex : Audi A4 Avant, BMW Série 3..."
                      className="mt-1.5"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="message">Votre message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Décrivez-nous votre projet : motorisation, budget, options souhaitées..."
                      className="mt-1.5"
                    />
                  </div>
                </div>

                <Button type="submit" size="xl" variant="hero" className="mt-6 w-full">
                  <Send className="h-5 w-5" /> Envoyer ma demande
                </Button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}