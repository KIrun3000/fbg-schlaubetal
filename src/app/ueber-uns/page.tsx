import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { AnimateIn } from "@/components/AnimateIn";
import {
  IconGemeinschaft,
  IconHolzvermarktung,
  IconVerantwortung,
} from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns — FBG Schlaubetal",
  description:
    "Die FBG Schlaubetal ist eine vom Land Brandenburg anerkannte Forstbetriebsgemeinschaft. Wir bündeln die Interessen privater Waldbesitzer in ganz Brandenburg.",
};

export default function UeberUnsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-forest-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.forestPath}
            alt="Waldweg zwischen Kiefernwald und Feld im Schlaubetal"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-moss-light mb-3">
            Über die FBG
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            Eine Gemeinschaft für den Privatwald in Brandenburg.
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl leading-relaxed">
            Anerkannte Forstbetriebsgemeinschaft mit Sitz in Ragow-Merz — offen
            für Waldbesitzer aus ganz Brandenburg.
          </p>
        </div>
      </section>

      {/* Was ist die FBG */}
      <section className="py-20 lg:py-24 bg-warmwhite">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn animation="fade-right">
              <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight">
                Warum es die FBG Schlaubetal gibt
              </h2>
              <div className="mt-6 space-y-4 text-lg text-anthracite-light leading-relaxed">
                <p>
                  In Brandenburg besitzen viele Menschen Wald — oft
                  kleinere Flächen, oft geerbt, oft ohne
                  forstliche Ausbildung. Einzeln ist es schwer, Holz zu guten
                  Preisen zu verkaufen, den Überblick über Fördermöglichkeiten zu
                  behalten oder Forstarbeiten wirtschaftlich zu organisieren.
                </p>
                <p>
                  Die FBG Schlaubetal bündelt diese einzelnen Waldbesitzer zu einer
                  Gemeinschaft. Als anerkannte Forstbetriebsgemeinschaft nach
                  §16 Bundeswaldgesetz sind wir offiziell durch das Land
                  Brandenburg anerkannt.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn animation="fade-left" delay={200}>
              <div className="relative group">
                <Image
                  src={images.sunlightForest}
                  alt="Sonnenlicht fällt durch die Kronen eines moosigen Kiefernwaldes"
                  width={600}
                  height={450}
                  className="rounded-2xl object-cover w-full aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-forest/10 -z-10 transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Zusammenarbeit mit Waldform */}
      <section className="py-20 lg:py-24 bg-sand">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <div className="max-w-3xl mx-auto rounded-2xl border border-sand-dark/50 bg-warmwhite p-8 lg:p-10">
              <p className="text-sm font-medium uppercase tracking-widest text-forest mb-3">
                Unser Standort
              </p>
              <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight">
                FBG und Waldform unter einem Dach
              </h2>
              <p className="mt-6 text-lg text-anthracite-light leading-relaxed">
                {site.partner.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6 border-t border-sand-dark/50 pt-8">
                <a
                  href={site.partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-opacity duration-300 hover:opacity-80"
                >
                  <Image
                    src={images.waldformLogo}
                    alt="Logo der Waldform GmbH — Forstbetrieb Mark Brandenburg"
                    width={263}
                    height={213}
                    className="h-24 w-auto"
                  />
                  <span className="sr-only">
                    Zur Website der Waldform GmbH (öffnet in neuem Tab)
                  </span>
                </a>
                <p className="text-base text-anthracite-light leading-relaxed">
                  Mehr über den Forstbetrieb erfahren Sie auf{" "}
                  <a
                    href={site.partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest font-medium hover:underline"
                  >
                    waldform.de
                  </a>
                  .
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Was ist eine FBG allgemein */}
      <section className="py-20 lg:py-24 bg-sand">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <AnimateIn animation="fade-up" className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight text-center">
              Was ist eine Forstbetriebsgemeinschaft?
            </h2>
            <p className="mt-6 text-lg text-anthracite-light leading-relaxed text-center">
              Eine FBG ist ein freiwilliger Zusammenschluss von Waldbesitzern,
              geregelt durch das Bundeswaldgesetz. Die Idee ist einfach: Was
              einzeln schwer geht, wird gemeinsam möglich.
            </p>
          </AnimateIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Flächen bündeln",
                text: "Kleine Parzellen werden zusammengefasst — das macht Bewirtschaftung und Vermarktung erst wirtschaftlich.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
              },
              {
                title: "Gemeinsam verkaufen",
                text: "Größere Holzmengen bedeuten bessere Preise. Allein hat man am Markt kaum Verhandlungsgewicht.",
                icon: <IconHolzvermarktung className="h-7 w-7" />,
              },
              {
                title: "Wissen teilen",
                text: "Nicht jeder Waldbesitzer ist vom Fach. In der Gemeinschaft gibt es Erfahrung, Beratung und Austausch.",
                icon: <IconGemeinschaft className="h-7 w-7" />,
              },
              {
                title: "Interessen vertreten",
                text: "Gegenüber Behörden, Forstämtern und am Markt hat eine organisierte Gemeinschaft mehr Gewicht als ein Einzelner.",
                icon: <IconVerantwortung className="h-7 w-7" />,
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} animation="fade-up" delay={i * 120}>
              <div className="text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-forest/10 text-forest mb-5">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-anthracite mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-anthracite-light leading-relaxed">
                  {item.text}
                </p>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Unsere Region */}
      <section className="py-20 lg:py-24 bg-warmwhite">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src={images.aerialForest}
                alt="Luftaufnahme eines Mischwaldes in Brandenburg"
                width={600}
                height={450}
                className="rounded-2xl object-cover w-full aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-earth -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium uppercase tracking-widest text-forest mb-3">
                Unsere Region
              </p>
              <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight">
                Wald im Landkreis Oder-Spree
              </h2>
              <div className="mt-6 space-y-4 text-lg text-anthracite-light leading-relaxed">
                <p>
                  Das Schlaubetal liegt im östlichen Brandenburg, im Landkreis
                  Oder-Spree. Die Landschaft ist geprägt von Kiefernbeständen,
                  Mischwald, sandigen Böden und einer Seenlandschaft entlang der
                  Schlaube. Waldbesitz ist hier häufig kleinteilig — viele
                  Eigentümer, oft verstreute Flächen.
                </p>
                <p>
                  Die FBG Schlaubetal hat ihren Sitz in Ragow-Merz und ist in
                  dieser Region verwurzelt. Wir kennen die Böden, die
                  Baumartenzusammensetzung und die Herausforderungen, die
                  Trockenheit und Borkenkäfer in den letzten Jahren gebracht
                  haben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ansprechpartner */}
      <section className="py-20 lg:py-24 bg-sand">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-forest mb-3">
              Ansprechpartner
            </p>
            <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight">
              Wer hinter der FBG steht
            </h2>
            <p className="mt-6 text-lg text-anthracite-light leading-relaxed">
              Die FBG Schlaubetal wird ehrenamtlich geführt. Die Ansprechpartner
              und ihre Kontaktdaten werden hier nach Abstimmung ergänzt.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { role: "Vorsitzende/r", note: "Name wird ergänzt" },
              { role: "Stellvertretung", note: "Name wird ergänzt" },
              { role: "Geschäftsführung", note: "Name wird ergänzt" },
            ].map((person) => (
              <div
                key={person.role}
                className="bg-warmwhite rounded-2xl p-8 text-center border border-sand-dark/50"
              >
                <div className="mx-auto h-20 w-20 rounded-full bg-forest/10 flex items-center justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-forest/40"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-anthracite">
                  {person.role}
                </h3>
                <p className="mt-1 text-sm text-anthracite-light italic">
                  {person.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fakten */}
      <section className="py-20 lg:py-24 bg-forest-dark text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center leading-tight mb-16">
            Auf einen Blick
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "—", label: "Mitglieder", note: "wird ergänzt" },
              { value: "—", label: "Hektar Waldfläche", note: "wird ergänzt" },
              {
                value: "§16 BWaldG",
                label: "Anerkannt in Brandenburg",
                note: "gesichert",
              },
              {
                value: "Ragow-Merz",
                label: "Sitz im Landkreis Oder-Spree",
                note: "gesichert",
              },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-moss-light">
                  {stat.value}
                </p>
                <p className="mt-2 text-base font-medium text-white/80">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-white/40 italic">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-warmwhite">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight">
            Sie möchten mehr erfahren?
          </h2>
          <p className="mt-4 text-lg text-anthracite-light">
            Schreiben Sie uns — wir erklären Ihnen gerne, wie die FBG
            funktioniert und ob eine Mitgliedschaft für Sie sinnvoll ist.
          </p>
          <div className="mt-8">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-forest px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-forest-light shadow-sm"
            >
              Nachricht schreiben
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
