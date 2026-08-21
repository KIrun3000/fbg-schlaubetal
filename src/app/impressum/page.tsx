import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum — FBG Schlaubetal",
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <section className="py-20 lg:py-24 bg-warmwhite">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-anthracite mb-10">
          Impressum
        </h1>

        <div className="prose prose-lg max-w-none text-anthracite-light leading-relaxed space-y-8">
          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite mt-0">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite">
              Vertreten durch
            </h2>
            <p>
              Max Freiherr Heereman von Zuydtwyck — Vorstandsvorsitzender
              <br />
              Richard Tschutschke — Stellvertretender Vorsitzender
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-forest hover:text-forest-light transition-colors"
              >
                {site.email}
              </a>
              <br />
              <span className="italic text-anthracite-light/70">
                Telefon: [wird ergänzt]
              </span>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite">
              Registereintrag
            </h2>
            <p className="italic text-anthracite-light/70">
              [Registergericht und Registernummer — wird nach Abstimmung ergänzt]
            </p>
            <p>
              Anerkannte Forstbetriebsgemeinschaft nach § 16 BWaldG, anerkannt
              durch das Land Brandenburg.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Max Freiherr Heereman von Zuydtwyck
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite">
              Haftungsausschluss
            </h2>
            <h3 className="font-serif text-lg font-bold text-anthracite">
              Haftung für Inhalte
            </h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind
              wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
              den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
              wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="font-serif text-lg font-bold text-anthracite">
              Haftung für Links
            </h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
