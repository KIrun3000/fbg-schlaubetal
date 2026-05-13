import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Über uns — FBG Schlaubetal",
  description:
    "Erfahren Sie mehr über die Forstbetriebsgemeinschaft Schlaubetal: Wer wir sind, was uns antreibt und warum wir uns für den Wald in der Region einsetzen.",
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
            Über uns
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            Wer wir sind
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl leading-relaxed">
            Die FBG Schlaubetal — eine Gemeinschaft privater Waldbesitzer mit
            regionaler Verantwortung.
          </p>
        </div>
      </section>

      {/* Was ist die FBG */}
      <section className="py-20 lg:py-24 bg-warmwhite">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn animation="fade-right">
              <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight">
                Die Forstbetriebsgemeinschaft Schlaubetal
              </h2>
              <div className="mt-6 space-y-4 text-lg text-anthracite-light leading-relaxed">
                <p>
                  Die FBG Schlaubetal ist eine anerkannte Forstbetriebsgemeinschaft
                  im Land Brandenburg. Als Zusammenschluss privater Waldbesitzer in
                  der Region Schlaubetal und Oder-Spree bündeln wir Kräfte und
                  Interessen — für eine nachhaltige und wirtschaftliche
                  Waldbewirtschaftung.
                </p>
                <p>
                  Eine Forstbetriebsgemeinschaft (FBG) ist ein freiwilliger
                  Zusammenschluss von Waldbesitzern, der durch das
                  Bundeswaldgesetz geregelt ist. Ziel ist es, die Bewirtschaftung
                  kleinerer Privatwaldflächen zu bündeln und gemeinsam effizienter
                  zu gestalten — von der Holzvermarktung über die Waldpflege bis
                  hin zur Förderberatung.
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

      {/* Was ist eine FBG */}
      <section className="py-20 lg:py-24 bg-sand">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <AnimateIn animation="fade-up" className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight text-center">
              Was ist eine Forstbetriebsgemeinschaft?
            </h2>
            <p className="mt-6 text-lg text-anthracite-light leading-relaxed text-center">
              Viele Waldbesitzer in Deutschland besitzen kleine Flächen, die allein
              schwer wirtschaftlich zu bewirtschaften sind. Eine FBG schafft
              Abhilfe:
            </p>
          </AnimateIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Bündelung",
                text: "Kleinere Waldparzellen werden gebündelt verwaltet — für bessere Verhandlungspositionen und effizientere Abläufe.",
                icon: (
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                ),
              },
              {
                title: "Beratung",
                text: "Mitglieder erhalten Zugang zu fachkundiger Beratung in allen Fragen der Waldbewirtschaftung.",
                icon: (
                  <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                ),
              },
              {
                title: "Vermarktung",
                text: "Gemeinsame Holzvermarktung sorgt für bessere Preise und professionelle Abwicklung.",
                icon: (
                  <>
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </>
                ),
              },
              {
                title: "Nachhaltigkeit",
                text: "FBGs fördern eine nachhaltige Waldwirtschaft, die ökologische und ökonomische Ziele vereint.",
                icon: (
                  <path d="M17 20H7l5-16 5 16zM12 20v-4M9 12h6" />
                ),
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} animation="fade-up" delay={i * 120}>
              <div className="text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-forest/10 text-forest mb-5 transition-transform duration-300 hover:scale-110">
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
                Das Schlaubetal — Brandenburgs grünes Herz
              </h2>
              <div className="mt-6 space-y-4 text-lg text-anthracite-light leading-relaxed">
                <p>
                  Das Schlaubetal im Landkreis Oder-Spree gehört zu den
                  waldreichsten und landschaftlich reizvollsten Gebieten
                  Brandenburgs. Durchzogen von der Schlaube und eingebettet in eine
                  vielfältige Wald- und Seenlandschaft, ist die Region Heimat
                  zahlreicher privater Waldbesitzer.
                </p>
                <p>
                  Die FBG Schlaubetal kennt die lokalen Standortbedingungen, die
                  Böden, das Klima und die forstlichen Herausforderungen der
                  Region. Diese Ortskenntnis ist die Grundlage für eine
                  Beratung, die wirklich passt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorstand — Platzhalter */}
      <section className="py-20 lg:py-24 bg-sand">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-forest mb-3">
              Ansprechpartner
            </p>
            <h2 className="font-serif text-3xl font-bold text-anthracite leading-tight">
              Ihr Kontakt zur FBG
            </h2>
            <p className="mt-6 text-lg text-anthracite-light leading-relaxed">
              Hinter der FBG Schlaubetal stehen Menschen, die sich für den Wald in
              unserer Region einsetzen. Persönlich, kompetent und nah an unseren
              Mitgliedern.
            </p>
          </div>

          {/* Placeholder cards */}
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

          <p className="mt-10 text-center text-sm text-anthracite-light/70 italic">
            Die Angaben zu Ansprechpartnern werden nach Abstimmung mit der FBG
            ergänzt.
          </p>
        </div>
      </section>

      {/* Zahlen & Fakten */}
      <section className="py-20 lg:py-24 bg-forest-dark text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center leading-tight mb-16">
            Zahlen & Fakten
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "—", label: "Mitglieder", note: "wird ergänzt" },
              { value: "—", label: "Hektar Waldfläche", note: "wird ergänzt" },
              {
                value: "Brandenburg",
                label: "Anerkannte FBG",
                note: "gesichert",
              },
              {
                value: "Oder-Spree",
                label: "Region",
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
            Lernen Sie uns kennen.
          </h2>
          <p className="mt-4 text-lg text-anthracite-light">
            Haben Sie Fragen zur FBG Schlaubetal? Wir freuen uns auf den Austausch.
          </p>
          <div className="mt-8">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-forest px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-forest-light shadow-sm"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
