import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Leistungen — FBG Schlaubetal",
  description:
    "Die FBG Schlaubetal bündelt Holzvermarktung, Beratung und Waldbewirtschaftung für private Waldbesitzer in der Region Oder-Spree.",
};

{/*
  REDAKTIONSHINWEIS: Die konkreten Leistungen der FBG Schlaubetal müssen
  vor Go-Live verifiziert werden. Die folgenden Beschreibungen basieren auf
  typischen Aufgaben einer FBG nach §16 BWaldG und sind bewusst vorsichtig
  formuliert.
*/}

const mainServices = [
  {
    title: "Holz gemeinsam vermarkten",
    description:
      "Wer allein eine kleine Menge Holz verkaufen will, hat am Markt kaum Verhandlungsgewicht. In einer FBG werden die Mengen vieler Mitglieder gebündelt. Das schafft Zugang zu Abnehmern und Preisen, die für einzelne Waldbesitzer schwer erreichbar wären.",
    benefits: [
      "Größere Mengen, bessere Verhandlungsposition",
      "Zugang zu Holzkäufern über die Region hinaus",
      "Abwicklung und Logistik werden koordiniert",
      "Erlöse werden transparent abgerechnet",
    ],
    image: images.timber,
    imageAlt: "Gestapeltes Holz — gebündelte Vermarktung",
  },
  {
    title: "Beratung für Waldbesitzer",
    description:
      "Viele Waldbesitzer stehen vor Fragen, die ohne forstliches Wissen schwer zu beantworten sind: Ist mein Bestand gesund? Wann ist der richtige Zeitpunkt für eine Durchforstung? Welche Förderprogramme gibt es? Die FBG hilft bei der Einschätzung und vermittelt fachliche Unterstützung.",
    benefits: [
      "Einschätzung des Waldbestandes vor Ort",
      "Orientierung bei Fördermöglichkeiten",
      "Hilfe bei Anträgen und Behördenkontakt",
      "Vermittlung von Fachleuten bei Bedarf",
    ],
    image: images.forestManagement,
    imageAlt: "Mischwald — Beratung und Bestandseinschätzung",
  },
  {
    title: "Forstliche Maßnahmen koordinieren",
    description:
      "Durchforstung, Pflanzung, Schadholzaufarbeitung — solche Maßnahmen erfordern Planung, Geräte und Fachkenntnis. Die FBG koordiniert forstliche Arbeiten für ihre Mitglieder und sorgt dafür, dass auch kleinere Flächen nicht vernachlässigt werden.",
    benefits: [
      "Koordination von Durchforstung und Holzernte",
      "Organisation von Pflanzungen und Waldpflege",
      "Aufarbeitung von Sturm- und Käferschäden",
      "Zusammenarbeit mit regionalen Forstdienstleistern",
    ],
    image: images.saplings,
    imageAlt: "Junge Baumsetzlinge — Aufforstung und Waldpflege",
  },
];

const additionalServices = [
  {
    title: "Fördermittel und Anträge",
    description:
      "Für Waldbesitzer gibt es verschiedene Förderprogramme — aber die Antragsstellung ist oft aufwendig. Die FBG unterstützt bei der Orientierung und Beantragung.",
    icon: (
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
  {
    title: "Erfahrungsaustausch",
    description:
      "In einer FBG trifft man andere Waldbesitzer aus der Nachbarschaft. Der Austausch untereinander ist oft genauso wertvoll wie die formale Beratung.",
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    title: "Interessenvertretung",
    description:
      "Einzelne Waldbesitzer werden von der Politik selten gehört. Als organisierte Gemeinschaft können wir Interessen gegenüber Verwaltung und Markt wirksamer vertreten.",
    icon: (
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
    ),
  },
  {
    title: "Zertifizierung",
    description:
      "Gruppenzertifizierungen wie PEFC dokumentieren nachhaltige Waldwirtschaft. Über die FBG ist eine solche Zertifizierung auch für kleine Flächen möglich.",
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-forest-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.forestManagement}
            alt="Wald"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-forest-light/80 mb-3">
            Leistungen
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            Was eine FBG für Waldbesitzer tut
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl leading-relaxed">
            Holz vermarkten, Maßnahmen organisieren, bei Anträgen helfen —
            die Kernaufgaben einer Forstbetriebsgemeinschaft.
          </p>
        </div>
      </section>

      {/* Hinweis */}
      <section className="bg-earth/10 border-b border-earth/20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-4">
          <p className="text-sm text-earth text-center">
            Die folgenden Leistungen beschreiben typische Aufgaben einer FBG.
            Das genaue Angebot der FBG Schlaubetal wird nach Rücksprache hier
            ergänzt.
          </p>
        </div>
      </section>

      {/* Main Services */}
      {mainServices.map((service, index) => (
        <section
          key={service.title}
          className={`py-20 lg:py-24 ${index % 2 === 0 ? "bg-warmwhite" : "bg-sand"}`}
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimateIn animation={index % 2 === 0 ? "fade-right" : "fade-left"} className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                <div className="relative group">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={600}
                    height={400}
                    className="rounded-2xl object-cover w-full aspect-[3/2] transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div
                    className={`absolute -bottom-4 ${index % 2 === 0 ? "-right-4" : "-left-4"} h-20 w-20 rounded-2xl bg-forest/10 -z-10 transition-transform duration-500 group-hover:translate-y-1`}
                  />
                </div>
              </AnimateIn>
              <AnimateIn animation={index % 2 === 0 ? "fade-left" : "fade-right"} delay={200} className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight">
                  {service.title}
                </h2>
                <p className="mt-6 text-lg text-anthracite-light leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
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
                      <span className="text-anthracite">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AnimateIn>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-20 lg:py-24 bg-sand">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight">
              Darüber hinaus
            </h2>
            <p className="mt-4 text-lg text-anthracite-light">
              Neben den Kernaufgaben kann eine FBG ihre Mitglieder auch in
              weiteren Bereichen unterstützen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="bg-warmwhite rounded-2xl p-8 border border-sand-dark/50"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      {service.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-anthracite">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base text-anthracite-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-forest-dark text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white leading-tight">
            Klingt das für Sie relevant?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Wenn Sie Wald in der Region besitzen und Unterstützung suchen,
            sprechen Sie uns an. Wir erklären Ihnen, was die FBG konkret
            für Sie tun kann.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/mitgliedschaft"
              className="inline-flex items-center justify-center rounded-lg bg-forest-light px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-forest"
            >
              Zur Mitgliedschaft
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Nachricht schreiben
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
