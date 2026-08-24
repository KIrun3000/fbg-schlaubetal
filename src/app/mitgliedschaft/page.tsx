import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { AnimateIn } from "@/components/AnimateIn";
import { getDownloadById, getDownloadFormatLabel } from "@/lib/downloads";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mitgliedschaft — FBG Schlaubetal",
  description:
    "Werden Sie Mitglied der FBG Schlaubetal. Für private Waldbesitzer in ganz Brandenburg — ohne Mitgliedsbeitrag.",
  alternates: {
    canonical: "/mitgliedschaft",
  },
};

const benefits = [
  {
    title: "Nicht allein am Holzmarkt",
    description:
      "Als Einzelner verkaufen Sie wenig Holz zu schlechten Konditionen. In der Gemeinschaft werden Mengen gebündelt — das verbessert Ihre Verhandlungsposition.",
  },
  {
    title: "Jemand, den man fragen kann",
    description:
      "Was tun bei Borkenkäferbefall? Welche Förderung gibt es? In der FBG haben Sie Ansprechpartner, die Brandenburgs Wälder und die Situation kennen.",
  },
  {
    title: "Auch kleine Flächen zählen",
    description:
      "Gerade Besitzer kleiner Waldflächen profitieren von der Bündelung. Maßnahmen, die allein unwirtschaftlich wären, werden gemeinsam möglich.",
  },
  {
    title: "Hilfe bei Papierkram",
    description:
      "Förderanträge, Behördenkontakt, Nachweise — die FBG unterstützt bei der Orientierung und Beantragung.",
  },
  {
    title: "Kontakt zu Nachbarn",
    description:
      "In der FBG treffen Sie andere Waldbesitzer aus Brandenburg. Der Austausch untereinander ist oft genauso hilfreich wie die formale Beratung.",
  },
  {
    title: "Gemeinsam gehört werden",
    description:
      "Einzelne Waldbesitzer haben politisch wenig Gewicht. Als organisierte Gemeinschaft können Interessen wirksamer vertreten werden.",
  },
];

const membershipApplication = getDownloadById("antrag-mitgliedschaft");
const membershipStatutes = getDownloadById("satzung");

const steps = [
  {
    step: "1",
    title: "Kontakt aufnehmen",
    description:
      "Schreiben Sie uns eine E-Mail oder nutzen Sie das Kontaktformular. Wir beantworten Ihre Fragen und erklären, wie die FBG arbeitet.",
  },
  {
    step: "2",
    title: "Beitrittserklärung",
    description:
      "Wenn Sie sich für eine Mitgliedschaft entscheiden, laden Sie die Beitrittserklärung herunter oder erhalten Sie diese von uns. Ein Mitgliedsbeitrag wird nicht erhoben.",
  },
  {
    step: "3",
    title: "Mitglied werden",
    description:
      "Nach Eingang Ihrer Erklärung werden Sie aufgenommen. Ab dann können Sie alle Leistungen der FBG in Anspruch nehmen.",
  },
];

export default function MitgliedschaftPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-forest-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.membership}
            alt="Kiefernwald in Brandenburg im warmen Abendlicht"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-moss-light mb-3">
            Mitgliedschaft
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            Was bringt mir eine Mitgliedschaft?
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl leading-relaxed">
            Für private Waldbesitzer in ganz Brandenburg, die ihren Wald nicht
            allein bewirtschaften wollen.
          </p>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-20 lg:py-24 bg-warmwhite">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-anthracite leading-tight">
              Sechs Gründe für die FBG
            </h2>
            <p className="mt-4 text-lg text-anthracite-light max-w-2xl mx-auto">
              Eine Mitgliedschaft lohnt sich vor allem dann, wenn Sie
              Unterstützung bei Vermarktung, Bewirtschaftung oder einfach einen
              Ansprechpartner in Forstfragen suchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <AnimateIn key={benefit.title} animation="fade-up" delay={i * 100}>
              <div
                className="bg-sand rounded-2xl p-8 border border-sand-dark/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest/10 text-forest mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-anthracite mb-2">
                  {benefit.title}
                </h3>
                <p className="text-base text-anthracite-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Wer kann Mitglied werden */}
      <section className="py-20 lg:py-24 bg-sand">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight">
                Für wen ist die FBG gedacht?
              </h2>
              <div className="mt-6 space-y-4 text-lg text-anthracite-light leading-relaxed">
                <p>
                  Die FBG Schlaubetal ist offen für alle Eigentümer von
                  Waldflächen in Brandenburg. Die Größe Ihrer Fläche spielt
                  dabei keine entscheidende Rolle — gerade kleinere Bestände
                  profitieren besonders, weil sie allein kaum wirtschaftlich
                  zu bewirtschaften sind.
                </p>
                <p>
                  Sie müssen kein Forstexperte sein. Viele unserer Mitglieder
                  haben ihren Wald geerbt und suchen vor allem Orientierung
                  und praktische Unterstützung.
                </p>
              </div>
              <div className="mt-8 p-6 bg-warmwhite rounded-xl border border-sand-dark/50">
                <h3 className="font-serif text-base font-bold text-anthracite mb-2">
                  Ohne Mitgliedsbeitrag
                </h3>
                <p className="text-sm text-anthracite-light">
                  Für die Mitgliedschaft in der FBG Schlaubetal wird kein
                  Beitrag erhoben. Nehmen Sie einfach Kontakt auf — wir
                  informieren Sie unverbindlich.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={images.forestFloor}
                alt="Herbstlicher Kiefernwald mit Farnen am Waldboden"
                width={600}
                height={450}
                className="rounded-2xl object-cover w-full aspect-[4/3]"
              />
              <div className="hidden lg:block absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-earth -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Beitritt */}
      <section className="py-20 lg:py-24 bg-warmwhite">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight">
              Wie läuft der Beitritt?
            </h2>
            <p className="mt-4 text-lg text-anthracite-light">
              Unkompliziert und ohne Verpflichtung zum Erstgespräch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <AnimateIn key={step.title} animation="fade-up" delay={index * 200}>
              <div className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-forest/20" />
                )}
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-forest text-white font-serif text-2xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="font-serif text-xl font-bold text-anthracite mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-anthracite-light leading-relaxed">
                  {step.description}
                </p>
              </div>
              </AnimateIn>
            ))}
          </div>

          {(membershipApplication || membershipStatutes) && (
            <AnimateIn animation="fade-up" className="mt-16">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight">
                    Unterlagen für Ihren Beitritt
                  </h2>
                  <p className="mt-4 text-lg text-anthracite-light">
                    Laden Sie die Formulare herunter, füllen Sie den Antrag aus
                    und senden Sie ihn an{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="text-forest font-medium hover:underline"
                    >
                      {site.email}
                    </a>
                    .
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {membershipApplication && (
                    <div className="rounded-2xl border border-sand-dark/50 bg-sand/40 p-8 flex flex-col">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest mb-5">
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
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-anthracite mb-2">
                        Antrag auf Mitgliedschaft
                      </h3>
                      <p className="text-base text-anthracite-light leading-relaxed flex-1">
                        Offizielles Formular zur Aufnahme als Mitglied der FBG
                        Schlaubetal.
                      </p>
                      <a
                        href={membershipApplication.file}
                        download={membershipApplication.filename}
                        className="mt-6 inline-flex items-center justify-center rounded-lg bg-forest px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-light"
                      >
                        Antrag herunterladen (
                        {getDownloadFormatLabel(membershipApplication)})
                      </a>
                    </div>
                  )}

                  {membershipStatutes && (
                    <div className="rounded-2xl border border-sand-dark/50 bg-sand/40 p-8 flex flex-col">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest mb-5">
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
                          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-anthracite mb-2">
                        Satzung
                      </h3>
                      <p className="text-base text-anthracite-light leading-relaxed flex-1">
                        Satzung der Forstbetriebsgemeinschaft Schlaubetal —
                        Grundlage der Mitgliedschaft.
                      </p>
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Link
                          href="/satzung"
                          className="inline-flex items-center justify-center rounded-lg bg-forest px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-light"
                        >
                          Satzung online lesen
                        </Link>
                        <a
                          href={membershipStatutes.file}
                          download={membershipStatutes.filename}
                          className="inline-flex items-center justify-center rounded-lg border border-forest px-5 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
                        >
                          PDF herunterladen
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <ol className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
                  <li>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-forest/10 text-forest font-serif font-bold text-sm mb-3">
                      1
                    </span>
                    <p className="text-sm text-anthracite-light">
                      Antrag und Satzung herunterladen
                    </p>
                  </li>
                  <li>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-forest/10 text-forest font-serif font-bold text-sm mb-3">
                      2
                    </span>
                    <p className="text-sm text-anthracite-light">
                      Antrag ausfüllen und unterschreiben
                    </p>
                  </li>
                  <li>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-forest/10 text-forest font-serif font-bold text-sm mb-3">
                      3
                    </span>
                    <p className="text-sm text-anthracite-light">
                      Per E-Mail oder Post an die FBG senden
                    </p>
                  </li>
                </ol>
              </div>
            </AnimateIn>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-forest-dark text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white leading-tight">
            Erst mal unverbindlich informieren?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Schreiben Sie uns — wir erklären Ihnen in Ruhe, wie die FBG
            funktioniert und ob eine Mitgliedschaft für Ihre Situation sinnvoll
            ist. Ganz ohne Verpflichtung.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-earth px-7 py-3.5 text-base font-bold text-forest-dark transition-colors hover:bg-earth-light"
            >
              Nachricht schreiben
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
