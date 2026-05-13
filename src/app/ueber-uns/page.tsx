import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Über uns — FBG Schlaubetal",
  description:
    "Die FBG Schlaubetal ist eine anerkannte Forstbetriebsgemeinschaft im Landkreis Oder-Spree. Wir bündeln die Interessen privater Waldbesitzer in der Region.",
};

export default function UeberUnsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-forest-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.forestPath}
            alt="Waldweg im Mischwald"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-forest-light/80 mb-3">
            Über die FBG
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            Eine Gemeinschaft für den Privatwald in der Region.
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl leading-relaxed">
            Anerkannte Forstbetriebsgemeinschaft im Landkreis Oder-Spree,
            ansässig in Ragow-Merz.
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
                  Im Schlaubetal und der weiteren Region Oder-Spree besitzen viele
                  Menschen Wald — oft kleinere Flächen, oft geerbt, oft ohne
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
                  alt="Sonnenlicht fällt durch die Baumkronen eines Mischwaldes"
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
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                ),
              },
              {
                title: "Gemeinsam verkaufen",
                text: "Größere Holzmengen bedeuten bessere Preise. Allein hat man am Markt kaum Verhandlungsgewicht.",
                icon: (
                  <>
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </>
                ),
              },
              {
                title: "Wissen teilen",
                text: "Nicht jeder Waldbesitzer ist vom Fach. In der Gemeinschaft gibt es Erfahrung, Beratung und Austausch.",
                icon: (
                  <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                ),
              },
              {
                title: "Interessen vertreten",
                text: "Gegenüber Behörden, Forstämtern und am Markt hat eine organisierte Gemeinschaft mehr Gewicht als ein Einzelner.",
                icon: (
                  <path d="M17 20H7l5-16 5 16zM12 20v-4M9 12h6" />
                ),
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} animation="fade-up" delay={i * 120}>
              <div className="text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-forest/10 text-forest mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                  >
                    {item.icon}
                  </svg>
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
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-earth/10 -z-10" />
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
                <p className="font-serif text-3xl sm:text-4xl font-bold text-forest-light">
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
