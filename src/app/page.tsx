import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { AnimateIn } from "@/components/AnimateIn";
import { HeroVideo } from "@/components/HeroVideo";

function HeroSection() {
  return (
    <section className="relative bg-[#1a1f16] overflow-hidden min-h-[70vh] sm:min-h-[85vh] flex items-center">
      <HeroVideo />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
        <div className="max-w-2xl">
          <AnimateIn animation="fade-in" duration={1200}>
            <p className="text-sm font-medium uppercase tracking-widest text-forest-light/80 mb-4">
              Forstbetriebsgemeinschaft im Schlaubetal
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Wir vertreten{" "}
              <span className="text-forest-light">Waldbesitzer in der Region.</span>
            </h1>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={400} duration={1100}>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl">
              Die FBG Schlaubetal bündelt die Interessen privater Waldbesitzer
              im Landkreis Oder-Spree — anerkannt durch das Land Brandenburg.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-lg bg-forest-light px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-forest/20 transition-all duration-300 hover:bg-forest hover:shadow-xl hover:shadow-forest/30 hover:-translate-y-0.5"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                href="/mitgliedschaft"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                Mitglied werden
              </Link>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0 60V20C240 40 480 50 720 40C960 30 1200 10 1440 20V60H0Z"
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
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-anthracite leading-tight">
            Wer allein Wald besitzt, steht oft allein vor großen Fragen.
          </h2>
          <p className="mt-6 text-lg text-anthracite-light leading-relaxed">
            Wann lohnt sich eine Durchforstung? Wer kauft mein Holz zu fairen
            Preisen? Welche Fördermittel stehen mir zu? Als Forstbetriebsgemeinschaft
            geben wir privaten Waldbesitzern in der Region eine gemeinsame Stimme —
            und ganz praktische Unterstützung.
          </p>
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 3v18" />
        <path d="M8 7l4-4 4 4" />
        <path d="M4 14h16" />
        <path d="M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Beratung vor Ort",
    description:
      "Viele Waldbesitzer haben ihren Wald geerbt und wissen nicht genau, was zu tun ist. Wir helfen bei der Einschätzung des Bestandes, bei Fragen zu Fördermitteln und bei der Planung konkreter Maßnahmen.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Wald pflegen und bewirtschaften",
    description:
      "Ob Durchforstung, Wiederbepflanzung oder Schadholzaufarbeitung — wir koordinieren forstliche Maßnahmen, damit auch kleinere Flächen fachgerecht betreut werden können.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M17 20H7l5-16 5 16z" />
        <path d="M12 20v-4" />
        <path d="M9 12h6" />
      </svg>
    ),
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                Sie haben Wald im Schlaubetal — aber wenig Zeit oder Erfahrung?
              </h2>
              <p className="mt-6 text-lg text-anthracite-light leading-relaxed">
                Das geht vielen Waldbesitzern in der Region so. Vielleicht haben
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
                  "Ansprechpartner, die die Region kennen",
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
                alt="Sonnenlicht fällt durch die Baumkronen eines Mischwaldes"
                width={600}
                height={450}
                className="rounded-2xl object-cover w-full aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-earth/10 -z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function RegionSection() {
  return (
    <section className="py-20 lg:py-24 bg-sand">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimateIn animation="fade-up" className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-forest mb-3">
            Unsere Region
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-anthracite leading-tight">
            Zwischen Schlaube und Oder-Spree.
          </h2>
          <p className="mt-6 text-lg text-anthracite-light leading-relaxed">
            Das Schlaubetal gehört zu den waldreichsten Gebieten Brandenburgs.
            Kiefernwälder, Mischwaldbestände, sandige Böden und ein Klima, das
            sich verändert — wer hier Wald besitzt, steht vor eigenen
            Herausforderungen. Die FBG Schlaubetal ist in Ragow-Merz ansässig
            und kennt die Bedingungen vor Ort.
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
                detail: "Zusammenschluss für gemeinschaftliche Waldbewirtschaftung",
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

function CtaSection() {
  return (
    <section className="py-20 lg:py-24 bg-forest-dark">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <AnimateIn animation="fade-up">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
            Fragen? Melden Sie sich bei uns.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Ob Sie über eine Mitgliedschaft nachdenken, eine konkrete Frage zu
            Ihrem Wald haben oder einfach wissen möchten, was die FBG für Sie
            tun kann — schreiben Sie uns.
          </p>

          <div className="mt-8 space-y-2 text-white/60">
            <p className="font-medium text-white">FBG Schlaubetal</p>
            <p>Siedlung 18, 15848 Ragow-Merz</p>
            <p>
              <a
                href="mailto:info@waldforum.de"
                className="text-forest-light hover:text-white transition-colors duration-300"
              >
                info@waldforum.de
              </a>
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-forest-light px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-forest hover:shadow-xl hover:shadow-forest/30 hover:-translate-y-0.5 shadow-lg shadow-forest/20"
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
      <ServicesSection />
      <ForWaldbesitzerSection />
      <RegionSection />
      <CtaSection />
    </>
  );
}
