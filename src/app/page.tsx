import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { AnimateIn } from "@/components/AnimateIn";
import { HeroVideo } from "@/components/HeroVideo";
import { TopoLines } from "@/components/TopoLines";
import {
  IconGemeinschaft,
  IconHolzvermarktung,
  IconVerantwortung,
  IconWaldumbau,
} from "@/components/icons";
import {
  aktuellesIntro,
  formatAktuellesDateLong,
  getCategoryLabel,
  getLatestAktuelles,
} from "@/lib/aktuelles";
import { formatAddress, site } from "@/lib/site";

// Titel und Beschreibung erbt die Startseite aus dem Root-Layout.
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

// Die Aktuelles-Sektion zeigt die nächsten anstehenden Termine — siehe
// Kommentar in /aktuelles: einmal täglich neu rendern, damit vergangene
// Termine nicht stehen bleiben.
export const revalidate = 86400;

function HeroSection() {
  return (
    <section className="relative bg-forest-dark overflow-hidden min-h-[85vh] sm:min-h-[92vh] flex items-end">
      <HeroVideo />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 pt-20 pb-28 sm:pt-24 sm:pb-32 lg:pb-36 w-full">
        <div className="max-w-2xl [text-shadow:0_1px_12px_rgba(24,52,42,0.45)]">
          <AnimateIn animation="fade-in" duration={1200}>
            <div className="h-0.5 w-12 bg-earth mb-5" aria-hidden="true" />
            <p className="text-sm font-medium uppercase tracking-widest text-white/90 mb-4">
              Forstbetriebsgemeinschaft in Brandenburg
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Wir vertreten{" "}
              <span className="text-sand">
                Waldbesitzer in ganz Brandenburg.
              </span>
            </h1>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={400} duration={1100}>
            <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl">
              Die FBG Schlaubetal bündelt die Interessen privater Waldbesitzer
              in ganz Brandenburg, anerkannt durch das Land Brandenburg.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-lg bg-earth px-7 py-3.5 text-base font-bold text-forest-dark shadow-lg shadow-forest-dark/20 transition-all duration-300 hover:bg-earth-light hover:shadow-xl hover:shadow-forest-dark/30 hover:-translate-y-0.5"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                href="/mitgliedschaft"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                Mitglied werden
              </Link>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Bottom wave — Talschwung, dem Logo nachempfunden */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0 72V30C260 52 520 62 740 48C980 33 1220 10 1440 26V72H0Z"
            fill="var(--color-sand)"
            opacity="0.5"
          />
          <path
            d="M0 72V38C240 56 480 66 720 54C960 42 1200 20 1440 32V72H0Z"
            fill="var(--color-warmwhite)"
          />
        </svg>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="py-20 lg:py-24 bg-warmwhite">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimateIn animation="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-0.5 w-12 bg-earth mb-6" aria-hidden="true" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-anthracite leading-tight">
            Wer allein Wald besitzt, steht oft allein vor großen Fragen.
          </h2>
          <p className="mt-6 text-lg text-anthracite-light leading-relaxed">
            Wann lohnt sich eine Durchforstung? Wer kauft mein Holz zu fairen
            Preisen? Welche Fördermittel stehen mir zu? Als Forstbetriebsgemeinschaft
            geben wir privaten Waldbesitzern in ganz Brandenburg eine gemeinsame
            Stimme — und ganz praktische Unterstützung.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

const WALDBRAND_URL =
  "https://mleuv.brandenburg.de/mleuv/de/umwelt/forst/waldschutz/waldbrandgefahr-in-brandenburg/waldbrandgefahrenstufen/";

function WaldbrandSection() {
  return (
    <section className="py-20 lg:py-24 bg-earth">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimateIn animation="fade-up" className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-forest-dark/80 mb-3">
            Aktuelles
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-dark leading-tight">
            Waldbrandgefahr steigt – Mitglieder profitieren von zusätzlichem
            Schutz
          </h2>
          <p className="mt-6 text-lg text-forest-dark/90 leading-relaxed">
            Die Sommer werden trockener und das Risiko von Waldbränden nimmt zu.
            Deshalb ist die Brandschutzversicherung ein besonderer Vorteil für
            Mitglieder der FBG Schlaubetal. Wenn Sie Waldbesitzer sind und von
            diesem sowie vielen weiteren Vorteilen profitieren möchten,
            informieren Sie sich gerne über eine Mitgliedschaft.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={WALDBRAND_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-forest-dark px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-forest hover:-translate-y-0.5 hover:shadow-lg shadow-sm"
            >
              Aktuelle Waldbrandgefahrenstufen in Brandenburg
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <Link
              href="/mitgliedschaft"
              className="inline-flex items-center justify-center rounded-lg border border-forest-dark/50 px-7 py-3.5 text-base font-semibold text-forest-dark transition-all duration-300 hover:bg-forest-dark hover:border-forest-dark hover:text-white"
            >
              Mehr zur Mitgliedschaft
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

{/*
  REDAKTIONSHINWEIS: Die folgenden drei Leistungsbereiche basieren auf
  typischen FBG-Aufgaben nach §16 BWaldG. Die konkreten Formulierungen
  müssen vor Go-Live mit der FBG Schlaubetal abgestimmt werden.
*/}
const services = [
  {
    title: "Holz gemeinsam vermarkten",
    description:
      "Einzelne Waldbesitzer haben am Holzmarkt wenig Verhandlungsgewicht. Als Gemeinschaft bündeln wir Mengen und schaffen so Zugang zu Abnehmern, die für Einzelne kaum erreichbar wären.",
    icon: <IconHolzvermarktung className="h-7 w-7" />,
  },
  {
    title: "Beratung vor Ort",
    description:
      "Viele Waldbesitzer haben ihren Wald geerbt und wissen nicht genau, was zu tun ist. Wir helfen bei der Einschätzung des Bestandes, bei Fragen zu Fördermitteln und bei der Planung konkreter Maßnahmen.",
    icon: <IconGemeinschaft className="h-7 w-7" />,
  },
  {
    title: "Wald pflegen und bewirtschaften",
    description:
      "Ob Durchforstung, Wiederbepflanzung oder Schadholzaufarbeitung — wir koordinieren forstliche Maßnahmen, damit auch kleinere Flächen fachgerecht betreut werden können.",
    icon: <IconWaldumbau className="h-7 w-7" />,
  },
  {
    title: "Verkehrssicherheit",
    description:
      "Entlang von Wegen und Straßen müssen Waldbesitzer für Verkehrssicherheit sorgen. Die FBG berät bei behördlichen Auflagen und koordiniert die nötigen Maßnahmen.",
    icon: <IconVerantwortung className="h-7 w-7" />,
  },
];

function ServicesSection() {
  return (
    <section className="py-20 lg:py-24 bg-sand">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimateIn animation="fade-up" className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-forest mb-3">
            Wofür eine FBG da ist
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-anthracite leading-tight">
            Was Waldbesitzer von uns erwarten können
          </h2>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-warmwhite rounded-2xl p-8 shadow-sm border border-sand-dark/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group h-full"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest/10 text-forest mb-6 transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-anthracite mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-anthracite-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn animation="fade-in" delay={300} className="text-center mt-12">
          <Link
            href="/leistungen"
            className="group inline-flex items-center gap-2 text-forest font-semibold transition-colors hover:text-forest-light"
          >
            Mehr zu unseren Leistungen
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

function ForWaldbesitzerSection() {
  return (
    <section className="py-20 lg:py-24 bg-warmwhite">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateIn animation="fade-right">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-forest mb-3">
                Für Waldbesitzer
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-anthracite leading-tight">
                Sie haben Wald in Brandenburg — aber wenig Zeit oder Erfahrung?
              </h2>
              <p className="mt-6 text-lg text-anthracite-light leading-relaxed">
                Das geht vielen Waldbesitzern in Brandenburg so. Vielleicht haben
                Sie eine Fläche geerbt. Vielleicht sind Sie unsicher, was jetzt
                ansteht. Oder Sie wissen genau, was zu tun wäre — aber allein
                fehlt die Verhandlungsposition oder der Zugang zu Dienstleistern.
              </p>
              <p className="mt-4 text-lg text-anthracite-light leading-relaxed">
                Dafür gibt es die FBG. Als Mitglied sind Sie nicht allein.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Gemeinsam verhandeln statt einzeln verkaufen",
                  "Ansprechpartner, die Brandenburgs Wälder kennen",
                  "Hilfe bei Förderanträgen und Behördengängen",
                  "Auch für kleine Waldflächen sinnvoll",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 text-forest mt-0.5 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-anthracite">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/mitgliedschaft"
                  className="inline-flex items-center justify-center rounded-lg bg-forest px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-lg shadow-sm"
                >
                  Mehr zur Mitgliedschaft
                </Link>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-left" delay={150}>
            <div className="relative group">
              <Image
                src={images.sunlightForest}
                alt="Sonnenlicht fällt durch die Kronen eines moosigen Kiefernwaldes"
                width={600}
                height={450}
                className="rounded-2xl object-cover w-full aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="hidden lg:block absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-earth -z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function RegionSection() {
  return (
    <section className="relative py-20 lg:py-24 bg-sand overflow-hidden">
      <TopoLines className="pointer-events-none absolute -right-24 -bottom-32 h-[520px] w-[520px] text-forest/[0.07]" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <AnimateIn animation="fade-up" className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-forest mb-3">
            Unser Gebiet
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-anthracite leading-tight">
            Zu Hause im Schlaubetal, offen für ganz Brandenburg.
          </h2>
          <p className="mt-6 text-lg text-anthracite-light leading-relaxed">
            Brandenburg gehört zu den waldreichsten Bundesländern. Kiefernwälder,
            Mischwaldbestände, sandige Böden und ein Klima, das sich verändert —
            wer hier Wald besitzt, steht vor eigenen Herausforderungen. Die FBG
            Schlaubetal ist in Ragow-Merz ansässig und steht Waldbesitzern im
            ganzen Land offen.
          </p>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={150}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                label: "Anerkannte FBG",
                detail: "Durch das Land Brandenburg offiziell anerkannt nach §16 BWaldG",
              },
              {
                label: "Sitz in Ragow-Merz",
                detail: "Siedlung 18, 15848 Ragow-Merz — Landkreis Oder-Spree",
              },
              {
                label: "Für Privatwaldbesitzer",
                detail: "Offen für Waldbesitzer aus ganz Brandenburg",
              },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-anthracite mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-anthracite-light">{item.detail}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function AktuellesSection() {
  const latest = getLatestAktuelles(3);

  return (
    <section className="py-20 lg:py-24 bg-warmwhite">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimateIn animation="fade-up" className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-forest mb-3">
            Aktuelles
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-anthracite leading-tight">
            Termine, Versammlungen und Themen aus der FBG
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-anthracite-light leading-relaxed">
            {aktuellesIntro}
          </p>
        </AnimateIn>

        <div
          className={`grid grid-cols-1 gap-8 ${
            latest.length >= 3
              ? "md:grid-cols-3"
              : "sm:grid-cols-2 max-w-4xl mx-auto"
          }`}
        >
          {latest.map((item, index) => (
            <AnimateIn key={item.id} animation="fade-up" delay={index * 100}>
              <Link
                href={`/aktuelles#${item.id}`}
                className="group flex h-full flex-col rounded-2xl border border-sand-dark/50 bg-sand/40 p-8 transition-colors hover:border-forest/40 hover:bg-sand/70"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-forest mb-2">
                  {getCategoryLabel(item.category)}
                </p>
                <time
                  dateTime={item.date}
                  className="text-sm text-anthracite-light"
                >
                  {formatAktuellesDateLong(item)}
                  {item.time ? ` · ${item.time}` : ""}
                </time>
                <h3 className="mt-3 font-serif text-xl font-bold text-anthracite">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-anthracite-light leading-relaxed">
                  {item.excerpt}
                </p>
                {item.registration?.deadline && (
                  <p className="mt-4 text-sm font-semibold text-earth-dark">
                    Anmeldung bis{" "}
                    {formatAktuellesDateLong({
                      date: item.registration.deadline,
                    })}
                  </p>
                )}
                <span className="mt-6 text-sm font-semibold text-forest group-hover:underline">
                  Details ansehen
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn animation="fade-in" delay={300} className="text-center mt-12">
          <Link
            href="/aktuelles"
            className="group inline-flex items-center gap-2 text-forest font-semibold transition-colors hover:text-forest-light"
          >
            Alle Meldungen ansehen
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative py-20 lg:py-24 bg-forest-dark overflow-hidden">
      <TopoLines className="pointer-events-none absolute -right-16 -top-24 h-[560px] w-[560px] text-warmwhite/[0.06]" />
      <TopoLines className="pointer-events-none absolute -left-32 -bottom-40 h-[480px] w-[480px] text-warmwhite/[0.04]" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <AnimateIn animation="fade-up">
          <div className="mx-auto h-0.5 w-12 bg-earth mb-6" aria-hidden="true" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
            Fragen? Melden Sie sich bei uns.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Ob Sie über eine Mitgliedschaft nachdenken, eine konkrete Frage zu
            Ihrem Wald haben oder einfach wissen möchten, was die FBG für Sie
            tun kann — schreiben Sie uns.
          </p>

          <div className="mt-8 space-y-2 text-white/60">
            <p className="font-medium text-white">{site.name}</p>
            <p>{formatAddress()}</p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="text-moss-light hover:text-white transition-colors duration-300"
              >
                {site.email}
              </a>
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-earth px-8 py-4 text-base font-bold text-forest-dark transition-all duration-300 hover:bg-earth-light hover:shadow-xl hover:shadow-forest-dark/30 hover:-translate-y-0.5 shadow-lg shadow-forest-dark/20"
            >
              Nachricht schreiben
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <WaldbrandSection />
      <ServicesSection />
      <ForWaldbesitzerSection />
      <RegionSection />
      <AktuellesSection />
      <CtaSection />
    </>
  );
}
