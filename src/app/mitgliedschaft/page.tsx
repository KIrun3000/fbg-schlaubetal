import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Mitgliedschaft — FBG Schlaubetal",
  description:
    "Werden Sie Mitglied der FBG Schlaubetal. Erfahren Sie, welche Vorteile eine Mitgliedschaft bietet und wie Sie beitreten können.",
};

const benefits = [
  {
    title: "Bessere Holzpreise",
    description:
      "Durch gebündelte Vermarktung erzielen Sie als Mitglied deutlich bessere Konditionen als bei Einzelvermarktung.",
  },
  {
    title: "Fachliche Beratung",
    description:
      "Zugang zu kompetenter Beratung in allen Fragen der Waldbewirtschaftung — individuell und praxisnah.",
  },
  {
    title: "Professionelle Forstarbeit",
    description:
      "Organisation und Koordination von Forstarbeiten durch erfahrene Dienstleister, abgestimmt auf Ihre Flächen.",
  },
  {
    title: "Fördermittelberatung",
    description:
      "Unterstützung bei der Beantragung forstlicher Fördermittel — von der Antragsstellung bis zur Abwicklung.",
  },
  {
    title: "Gemeinschaft & Austausch",
    description:
      "Teil einer Gemeinschaft von Waldbesitzern sein, die voneinander lernen und gemeinsam mehr erreichen.",
  },
  {
    title: "Stärkere Stimme",
    description:
      "Gemeinsame Interessenvertretung gegenüber Politik, Verwaltung und Marktpartnern.",
  },
];

const steps = [
  {
    step: "1",
    title: "Informieren",
    description:
      "Nehmen Sie Kontakt zu uns auf und informieren Sie sich über die Mitgliedschaft und die Vorteile der FBG Schlaubetal.",
  },
  {
    step: "2",
    title: "Beitrittserklärung",
    description:
      "Füllen Sie die Beitrittserklärung aus. Diese erhalten Sie von uns auf Anfrage oder als Download.",
  },
  {
    step: "3",
    title: "Aufnahme",
    description:
      "Nach Prüfung Ihrer Beitrittserklärung werden Sie als Mitglied aufgenommen und können alle Leistungen nutzen.",
  },
];

export default function MitgliedschaftPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-forest-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.community}
            alt="Weite Landschaft"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-forest-light/80 mb-3">
            Mitgliedschaft
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            Gemeinsam stärker.
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl leading-relaxed">
            Als Mitglied der FBG Schlaubetal profitieren Sie von gebündelter
            Vermarktung, fachlicher Beratung und einer starken Gemeinschaft.
          </p>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-20 lg:py-24 bg-warmwhite">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-anthracite leading-tight">
              Warum Mitglied werden?
            </h2>
            <p className="mt-4 text-lg text-anthracite-light max-w-2xl mx-auto">
              Eine Mitgliedschaft in der FBG Schlaubetal bietet Ihnen als
              Waldbesitzer zahlreiche Vorteile — wirtschaftlich, fachlich und
              persönlich.
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
                Wer kann Mitglied werden?
              </h2>
              <div className="mt-6 space-y-4 text-lg text-anthracite-light leading-relaxed">
                <p>
                  Grundsätzlich können alle Eigentümer von Waldflächen in der
                  Region Schlaubetal und Oder-Spree Mitglied der FBG werden. Die
                  Größe Ihrer Waldfläche spielt dabei keine Rolle — gerade
                  kleinere Flächen profitieren besonders von der Bündelung durch
                  die Gemeinschaft.
                </p>
                <p>
                  Ob Sie Ihren Wald aktiv bewirtschaften oder erst seit kurzem
                  Waldeigentümer sind: Wir beraten Sie gerne und finden gemeinsam
                  heraus, wie die FBG Sie unterstützen kann.
                </p>
              </div>
              <div className="mt-8 p-6 bg-warmwhite rounded-xl border border-sand-dark/50">
                <h3 className="font-serif text-base font-bold text-anthracite mb-2">
                  Mitgliedsbeitrag
                </h3>
                <p className="text-sm text-anthracite-light italic">
                  Informationen zum Mitgliedsbeitrag erhalten Sie auf Anfrage.
                  Die genauen Konditionen werden nach Abstimmung mit der FBG hier
                  ergänzt.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={images.forestFloor}
                alt="Waldboden mit Farnen — Natur und Nachhaltigkeit"
                width={600}
                height={450}
                className="rounded-2xl object-cover w-full aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-earth/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* So funktioniert der Beitritt */}
      <section className="py-20 lg:py-24 bg-warmwhite">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight">
              So werden Sie Mitglied
            </h2>
            <p className="mt-4 text-lg text-anthracite-light">
              Der Beitritt zur FBG Schlaubetal ist unkompliziert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <AnimateIn key={step.title} animation="fade-up" delay={index * 200}>
              <div className="relative text-center">
                {/* Connector line */}
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-forest-dark text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white leading-tight">
            Bereit für den ersten Schritt?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Nehmen Sie Kontakt zu uns auf — wir informieren Sie gerne
            persönlich über die Mitgliedschaft in der FBG Schlaubetal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-forest-light px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-forest"
            >
              Kontakt aufnehmen
            </Link>
            <a
              href="mailto:info@waldforum.de"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              E-Mail schreiben
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
