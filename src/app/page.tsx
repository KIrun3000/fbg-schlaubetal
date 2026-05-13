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
              Forstbetriebsgemeinschaft
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Gemeinsam für{" "}
              <span className="text-forest-light">unseren Wald.</span>
            </h1>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={400} duration={1100}>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl">
              Die Forstbetriebsgemeinschaft für private Waldbesitzer im Schlaubetal
              und der Region Oder-Spree.
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

      {/* Bottom wave — translate-y-px eliminates subpixel gap */}
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
            Ihr Partner für nachhaltige Waldwirtschaft
          </h2>
          <p className="mt-6 text-lg text-anthracite-light leading-relaxed">
            Die FBG Schlaubetal ist der Zusammenschluss privater Waldbesitzer in der
            Region Schlaubetal. Als anerkannte Forstbetriebsgemeinschaft in
            Brandenburg vertreten wir die Interessen unserer Mitglieder — und
            unterstützen sie dabei, ihren Wald fachgerecht und wirtschaftlich zu
            bewirtschaften.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Holzvermarktung",
    description:
      "Gemeinsam stärker am Markt: Durch gebündelte Holzvermarktung erzielen unsere Mitglieder bessere Konditionen und profitieren von professioneller Abwicklung.",
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
    title: "Beratung & Betreuung",
    description:
      "Fachkundige Unterstützung bei allen Fragen rund um Ihren Wald — von der Bestandsbeurteilung über Förderungen bis zur langfristigen Bewirtschaftungsplanung.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Waldbewirtschaftung",
    description:
      "Organisation und Koordination von Forstarbeiten: Durchforstung, Waldpflege und Wiederaufforstung — professionell und auf Ihre Flächen abgestimmt.",
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
            Unsere Leistungen
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-anthracite leading-tight">
            Was wir für Sie tun
          </h2>
          <p className="mt-4 text-base text-anthracite-light italic">
            Leistungsübersicht — Details werden mit der FBG abgestimmt
          </p>
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
            Alle Leistungen ansehen
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
                Sie besitzen Wald im Schlaubetal?
              </h2>
              <p className="mt-6 text-lg text-anthracite-light leading-relaxed">
                Als Mitglied der FBG Schlaubetal profitieren Sie von gemeinschaftlicher
                Waldbewirtschaftung, besseren Vermarktungsmöglichkeiten und fachlicher
                Beratung. Ob Sie Ihren Wald aktiv bewirtschaften oder Unterstützung
                bei der Pflege suchen — wir sind Ihr Ansprechpartner in der Region.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Gebündelte Vermarktung für bessere Holzpreise",
                  "Fachliche Beratung und Betreuung vor Ort",
                  "Zugang zu professionellen Forstdienstleistungen",
                  "Unterstützung bei Fördermitteln und Anträgen",
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
            Verwurzelt im Schlaubetal.
          </h2>
          <p className="mt-6 text-lg text-anthracite-light leading-relaxed">
            Die FBG Schlaubetal ist in der Region Oder-Spree zu Hause. Wir kennen
            die Standortbedingungen, die Herausforderungen und die Chancen der
            hiesigen Waldwirtschaft. Als Gemeinschaft setzen wir uns für die
            nachhaltige Bewirtschaftung und den Erhalt unserer Wälder ein.
          </p>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={150}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                label: "Anerkannte FBG",
                detail: "Offiziell anerkannt durch das Land Brandenburg",
              },
              {
                label: "Region Oder-Spree",
                detail: "Verwurzelt im Schlaubetal und Umgebung",
              },
              {
                label: "Gemeinschaft",
                detail: "Zusammenschluss privater Waldbesitzer",
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
            Sprechen Sie uns an.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Haben Sie Fragen zur FBG Schlaubetal oder möchten Sie mehr über eine
            Mitgliedschaft erfahren? Wir freuen uns auf Ihre Nachricht.
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
              Kontakt aufnehmen
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
