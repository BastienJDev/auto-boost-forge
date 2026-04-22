import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  User,
  Car,
  SlidersHorizontal,
  Truck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & devis sur mesure — M-Import" },
      {
        name: "description",
        content:
          "Demandez votre devis personnalisé Pack Premium en quelques étapes. Notre équipe vous répond sous 24 heures.",
      },
      { property: "og:title", content: "Contact & devis sur mesure — M-Import" },
      {
        property: "og:description",
        content: "Devis personnalisé en 4 étapes simples. Réponse sous 24h.",
      },
    ],
  }),
  component: ContactPage,
});

/* -------------------- Validation -------------------- */

const colors = ["Tous", "Argenté", "Beige", "Blanc", "Bleu", "Gris", "Jaune", "Marron", "Noir", "Rouge", "Vert"] as const;
const fuels = ["Diesel", "Essence", "Hybride", "Electrique"] as const;
const transmissions = ["Automatique", "Manuelle"] as const;

const departments = [
  "01 — Ain", "13 — Bouches-du-Rhône", "31 — Haute-Garonne", "33 — Gironde",
  "44 — Loire-Atlantique", "59 — Nord", "67 — Bas-Rhin", "69 — Rhône",
  "75 — Paris", "76 — Seine-Maritime", "77 — Seine-et-Marne", "78 — Yvelines",
  "83 — Var", "92 — Hauts-de-Seine", "93 — Seine-Saint-Denis", "94 — Val-de-Marne",
  "Autre département",
];

const purchaseTimeline = [
  "Dès que possible",
  "Sous 1 mois",
  "Sous 3 mois",
  "Sous 6 mois",
  "Pas encore décidé",
];

const budgetRanges = [
  "Moins de 20 000 €",
  "20 000 € — 30 000 €",
  "30 000 € — 40 000 €",
  "40 000 € — 55 000 €",
  "Plus de 55 000 €",
];

const stepOneSchema = z.object({
  lastname: z.string().trim().min(1, "Nom requis").max(80),
  firstname: z.string().trim().min(1, "Prénom requis").max(80),
  phone: z.string().trim().min(8, "Téléphone invalide").max(25),
  email: z.string().trim().email("Email invalide").max(255),
});

const stepTwoSchema = z.object({
  vehicle: z.string().trim().min(2, "Précisez le véhicule recherché").max(120),
  finition: z.string().trim().max(120).optional().or(z.literal("")),
  colors: z.array(z.string()).max(11),
});

const stepThreeSchema = z.object({
  doors: z.string().min(1, "Sélectionnez le nombre de portes"),
  budget: z.string().min(1, "Sélectionnez votre budget"),
  budgetCustom: z.string().max(20).optional().or(z.literal("")),
  fundsAvailable: z.enum(["Oui", "Non"], { message: "Indiquez si les fonds sont disponibles" }),
  needFinancing: z.enum(["Oui", "Non"], { message: "Précisez votre besoin de financement" }),
  yearMin: z.string().max(4).optional().or(z.literal("")),
  kmMax: z.string().max(8).optional().or(z.literal("")),
  transmission: z.array(z.string()).max(2),
  fuel: z.array(z.string()).max(4),
});

const stepFourSchema = z.object({
  homeDelivery: z.enum(["Oui", "Non"], { message: "Indiquez si vous souhaitez la livraison" }),
  department: z.string().min(1, "Sélectionnez votre département"),
  city: z.string().trim().min(1, "Commune requise").max(80),
  timeline: z.string().min(1, "Précisez votre échéance"),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormState = {
  lastname: string;
  firstname: string;
  phone: string;
  email: string;
  vehicle: string;
  finition: string;
  colors: string[];
  doors: string;
  budget: string;
  budgetCustom: string;
  fundsAvailable: "Oui" | "Non" | "";
  needFinancing: "Oui" | "Non" | "";
  yearMin: string;
  kmMax: string;
  transmission: string[];
  fuel: string[];
  homeDelivery: "Oui" | "Non" | "";
  department: string;
  city: string;
  timeline: string;
  notes: string;
};

const initialState: FormState = {
  lastname: "", firstname: "", phone: "", email: "",
  vehicle: "", finition: "", colors: [],
  doors: "", budget: "", budgetCustom: "",
  fundsAvailable: "", needFinancing: "",
  yearMin: "", kmMax: "",
  transmission: [], fuel: [],
  homeDelivery: "", department: "", city: "", timeline: "", notes: "",
};

const steps = [
  { id: 1, label: "Vos informations", icon: User },
  { id: 2, label: "Véhicule recherché", icon: Car },
  { id: 3, label: "Critères & budget", icon: SlidersHorizontal },
  { id: 4, label: "Livraison & projet", icon: Truck },
] as const;

/* -------------------- Component -------------------- */

function ContactPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const toggleArray = (key: "colors" | "transmission" | "fuel", value: string) => {
    setData((d) => {
      const arr = d[key];
      return {
        ...d,
        [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const validate = (s: number) => {
    const schemaMap = {
      1: stepOneSchema,
      2: stepTwoSchema,
      3: stepThreeSchema,
      4: stepFourSchema,
    } as const;
    const result = (schemaMap[s as 1 | 2 | 3 | 4] as z.ZodTypeAny).safeParse(data);
    if (!result.success) {
      const e: Record<string, string> = {};
      for (const issue of result.error.issues) {
        e[issue.path.join(".")] = issue.message;
      }
      setErrors(e);
      return false;
    }
    setErrors({});
    return true;
  };

  const next = () => {
    if (validate(step)) setStep((s) => Math.min(4, s + 1));
  };
  const back = () => {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(4)) setSent(true);
  };

  return (
    <>
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand">
            <Sparkles className="h-3.5 w-3.5" /> Pack Premium
          </p>
          <h1 className="mt-3 text-5xl font-bold text-primary md:text-6xl">
            Demande de <span className="text-gradient-brand">devis personnalisé</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Décrivez votre projet en 4 étapes simples. Notre équipe vous répond sous 24 heures
            avec une proposition sur mesure.
          </p>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[1fr_2fr]">
          {/* Sidebar contact */}
          <aside className="space-y-4">
            {[
              { icon: Phone, t: "Téléphone", d: "06 00 00 00 00", href: "tel:+33000000000" },
              { icon: Mail, t: "Email", d: "contact@m-import.fr", href: "mailto:contact@m-import.fr" },
              { icon: MapPin, t: "Zone d'intervention", d: "France entière, livraison à domicile" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-semibold text-primary">{c.t}</h3>
                {c.href ? (
                  <a href={c.href} className="mt-1 block text-sm text-muted-foreground hover:text-brand">
                    {c.d}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                )}
              </div>
            ))}

            <div className="rounded-2xl border border-border bg-secondary p-5">
              <h3 className="font-semibold text-primary">Pourquoi un Pack Premium ?</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Recherche dédiée et prioritaire</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Suivi personnalisé par un conseiller</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Livraison clé en main à domicile</li>
              </ul>
            </div>
          </aside>

          {/* Form card */}
          <div className="rounded-2xl border border-border bg-card shadow-elegant">
            {sent ? (
              <SuccessView />
            ) : (
              <form onSubmit={submit} className="p-6 md:p-10">
                <Stepper current={step} />

                <div className="mt-10">
                  {step === 1 && (
                    <StepOne data={data} update={update} errors={errors} />
                  )}
                  {step === 2 && (
                    <StepTwo data={data} update={update} toggle={toggleArray} errors={errors} />
                  )}
                  {step === 3 && (
                    <StepThree data={data} update={update} toggle={toggleArray} errors={errors} />
                  )}
                  {step === 4 && (
                    <StepFour data={data} update={update} errors={errors} />
                  )}
                </div>

                <div className="mt-10 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={back}
                    disabled={step === 1}
                    className={step === 1 ? "invisible" : ""}
                  >
                    <ArrowLeft className="h-4 w-4" /> Précédent
                  </Button>

                  {step < 4 ? (
                    <Button type="button" variant="hero" size="lg" onClick={next}>
                      Continuer <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button type="submit" variant="hero" size="lg">
                      <Send className="h-4 w-4" /> Envoyer ma demande
                    </Button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------- Stepper -------------------- */

function Stepper({ current }: { current: number }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const completed = current > s.id;
          const active = current === s.id;
          return (
            <div key={s.id} className="flex flex-1 items-center">
              <div className="flex flex-col items-center text-center">
                <div
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full border-2 transition-smooth",
                    completed && "border-brand bg-gradient-brand text-white shadow-glow",
                    active && "border-brand bg-card text-brand shadow-card",
                    !completed && !active && "border-border bg-card text-muted-foreground",
                  )}
                >
                  {completed ? <CheckCircle2 className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                </div>
                <span
                  className={cn(
                    "mt-2 hidden text-xs font-medium md:block",
                    (active || completed) ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    "mx-2 h-[2px] flex-1 transition-smooth",
                    completed ? "bg-gradient-brand" : "bg-border",
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand md:hidden">
        Étape {current} / 4 — {steps[current - 1].label}
      </p>
    </div>
  );
}

/* -------------------- Steps -------------------- */

type StepProps = {
  data: FormState;
  update: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  errors: Record<string, string>;
};

type StepArrProps = StepProps & {
  toggle: (key: "colors" | "transmission" | "fuel", value: string) => void;
};

function FieldError({ name, errors }: { name: string; errors: Record<string, string> }) {
  if (!errors[name]) return null;
  return <p className="mt-1 text-xs text-destructive">{errors[name]}</p>;
}

function StepOne({ data, update, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-primary">Vos informations</h2>
        <p className="mt-1 text-sm text-muted-foreground">Pour vous recontacter rapidement.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="lastname">Nom *</Label>
          <Input id="lastname" value={data.lastname} onChange={(e) => update("lastname", e.target.value)} className="mt-1.5" maxLength={80} />
          <FieldError name="lastname" errors={errors} />
        </div>
        <div>
          <Label htmlFor="firstname">Prénom *</Label>
          <Input id="firstname" value={data.firstname} onChange={(e) => update("firstname", e.target.value)} className="mt-1.5" maxLength={80} />
          <FieldError name="firstname" errors={errors} />
        </div>
        <div>
          <Label htmlFor="phone">Téléphone *</Label>
          <Input id="phone" type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} className="mt-1.5" maxLength={25} />
          <FieldError name="phone" errors={errors} />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} className="mt-1.5" maxLength={255} />
          <FieldError name="email" errors={errors} />
        </div>
      </div>
    </div>
  );
}

function StepTwo({ data, update, toggle, errors }: StepArrProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-primary">Véhicule recherché</h2>
        <p className="mt-1 text-sm text-muted-foreground">Quel modèle vous fait rêver ?</p>
      </div>

      <div>
        <Label htmlFor="vehicle">Marque & modèle *</Label>
        <Input
          id="vehicle"
          value={data.vehicle}
          onChange={(e) => update("vehicle", e.target.value)}
          placeholder="ex : BMW Série 1 118d"
          className="mt-1.5"
          maxLength={120}
        />
        <FieldError name="vehicle" errors={errors} />
      </div>

      <div>
        <Label htmlFor="finition">Finition</Label>
        <Input
          id="finition"
          value={data.finition}
          onChange={(e) => update("finition", e.target.value)}
          placeholder="ex : M-Sport"
          className="mt-1.5"
          maxLength={120}
        />
      </div>

      <div>
        <Label>Couleur extérieure</Label>
        <p className="text-xs text-muted-foreground">Sélectionnez une ou plusieurs options.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {colors.map((c) => {
            const active = data.colors.includes(c);
            return (
              <button
                type="button"
                key={c}
                onClick={() => toggle("colors", c)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-smooth",
                  active
                    ? "border-brand bg-gradient-brand text-white shadow-card"
                    : "border-border bg-background text-foreground hover:border-brand/40 hover:text-brand",
                )}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StepThree({ data, update, toggle, errors }: StepArrProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-primary">Critères & budget</h2>
        <p className="mt-1 text-sm text-muted-foreground">Pour affiner notre recherche.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <Label>Nombre de portes *</Label>
          <Select value={data.doors} onValueChange={(v) => update("doors", v)}>
            <SelectTrigger className="mt-1.5"><SelectValue placeholder="Choisir" /></SelectTrigger>
            <SelectContent>
              {["3 portes", "5 portes", "Indifférent"].map((o) => (
                <SelectItem key={o} value={o}>{o}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError name="doors" errors={errors} />
        </div>

        <div>
          <Label>Budget *</Label>
          <Select value={data.budget} onValueChange={(v) => update("budget", v)}>
            <SelectTrigger className="mt-1.5"><SelectValue placeholder="Choisir" /></SelectTrigger>
            <SelectContent>
              {budgetRanges.map((o) => (
                <SelectItem key={o} value={o}>{o}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError name="budget" errors={errors} />
        </div>

        <div>
          <Label htmlFor="budgetCustom">Précisez au-delà de 40 000 €</Label>
          <Input id="budgetCustom" value={data.budgetCustom} onChange={(e) => update("budgetCustom", e.target.value)} placeholder="ex : 55 500 €" className="mt-1.5" maxLength={20} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <YesNo
          label="Les fonds sont-ils disponibles ?"
          value={data.fundsAvailable}
          onChange={(v) => update("fundsAvailable", v)}
          error={errors.fundsAvailable}
        />
        <YesNo
          label="Avez-vous besoin d'un financement ?"
          value={data.needFinancing}
          onChange={(v) => update("needFinancing", v)}
          error={errors.needFinancing}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="yearMin">Année minimum (2015 minimum)</Label>
          <Input id="yearMin" inputMode="numeric" value={data.yearMin} onChange={(e) => update("yearMin", e.target.value)} placeholder="ex : 2018" className="mt-1.5" maxLength={4} />
        </div>
        <div>
          <Label htmlFor="kmMax">KM max (100 000 km maximum)</Label>
          <Input id="kmMax" inputMode="numeric" value={data.kmMax} onChange={(e) => update("kmMax", e.target.value)} placeholder="max : 100 000 km" className="mt-1.5" maxLength={8} />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <CheckboxGroup
          label="Boîte de vitesse"
          options={transmissions}
          values={data.transmission}
          onToggle={(v) => toggle("transmission", v)}
        />
        <CheckboxGroup
          label="Carburant"
          options={fuels}
          values={data.fuel}
          onToggle={(v) => toggle("fuel", v)}
        />
      </div>
    </div>
  );
}

function StepFour({ data, update, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-primary">Livraison & projet</h2>
        <p className="mt-1 text-sm text-muted-foreground">Dernières précisions pour finaliser.</p>
      </div>

      <div>
        <Label>Livraison à domicile *</Label>
        <RadioGroup
          value={data.homeDelivery}
          onValueChange={(v) => update("homeDelivery", v as "Oui" | "Non")}
          className="mt-2 flex gap-6"
        >
          {(["Oui", "Non"] as const).map((opt) => (
            <label key={opt} className="flex cursor-pointer items-center gap-2 text-sm">
              <RadioGroupItem value={opt} className="border-brand text-brand" />
              {opt}
            </label>
          ))}
        </RadioGroup>
        <FieldError name="homeDelivery" errors={errors} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label>Votre département *</Label>
          <Select value={data.department} onValueChange={(v) => update("department", v)}>
            <SelectTrigger className="mt-1.5"><SelectValue placeholder="Choisir un département" /></SelectTrigger>
            <SelectContent className="max-h-72">
              {departments.map((d) => (
                <SelectItem key={d} value={d}>{d}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError name="department" errors={errors} />
        </div>
        <div>
          <Label htmlFor="city">Commune *</Label>
          <Input id="city" value={data.city} onChange={(e) => update("city", e.target.value)} className="mt-1.5" maxLength={80} />
          <FieldError name="city" errors={errors} />
        </div>
      </div>

      <div>
        <Label>Quand avez-vous prévu votre achat ? *</Label>
        <Select value={data.timeline} onValueChange={(v) => update("timeline", v)}>
          <SelectTrigger className="mt-1.5"><SelectValue placeholder="Choisir une échéance" /></SelectTrigger>
          <SelectContent>
            {purchaseTimeline.map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FieldError name="timeline" errors={errors} />
      </div>

      <div>
        <Label htmlFor="notes">Informations complémentaires</Label>
        <Textarea
          id="notes"
          rows={5}
          value={data.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Donnez plus d'informations : couleurs, options nécessaires (toit ouvrant, GPS...)"
          className="mt-1.5"
          maxLength={1000}
        />
        <p className="mt-1 text-right text-xs text-muted-foreground">{data.notes.length} / 1000</p>
      </div>
    </div>
  );
}

/* -------------------- Reusable bits -------------------- */

function YesNo({
  label, value, onChange, error,
}: {
  label: string;
  value: "Oui" | "Non" | "";
  onChange: (v: "Oui" | "Non") => void;
  error?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <RadioGroup value={value} onValueChange={(v) => onChange(v as "Oui" | "Non")} className="mt-2 flex gap-6">
        {(["Oui", "Non"] as const).map((opt) => (
          <label key={opt} className="flex cursor-pointer items-center gap-2 text-sm">
            <RadioGroupItem value={opt} className="border-brand text-brand" />
            {opt}
          </label>
        ))}
      </RadioGroup>
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function CheckboxGroup({
  label, options, values, onToggle,
}: {
  label: string;
  options: readonly string[];
  values: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-3">
        {options.map((opt) => (
          <label key={opt} className="flex cursor-pointer items-center gap-2 text-sm">
            <Checkbox
              checked={values.includes(opt)}
              onCheckedChange={() => onToggle(opt)}
              className="border-brand data-[state=checked]:bg-gradient-brand data-[state=checked]:border-brand"
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

function SuccessView() {
  return (
    <div className="flex flex-col items-center px-6 py-20 text-center md:px-12">
      <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow">
        <CheckCircle2 className="h-10 w-10" />
      </div>
      <h3 className="mt-6 font-display text-3xl font-bold text-primary">Demande envoyée !</h3>
      <p className="mt-3 max-w-md text-muted-foreground">
        Merci pour votre confiance. Un conseiller M-Import revient vers vous sous 24 heures avec
        une proposition personnalisée.
      </p>
    </div>
  );
}