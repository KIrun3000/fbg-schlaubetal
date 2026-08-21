import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — FBG Schlaubetal",
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <section className="py-20 lg:py-24 bg-warmwhite">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-anthracite mb-10">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-lg max-w-none text-anthracite-light leading-relaxed space-y-8">
          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite mt-0">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-serif text-lg font-bold text-anthracite">
              Allgemeine Hinweise
            </h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was
              mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
              besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite">
              2. Verantwortliche Stelle
            </h2>
            <p>
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-forest hover:text-forest-light transition-colors"
              >
                {site.email}
              </a>
            </p>
            <p>
              Vertreten durch Max Freiherr Heereman von Zuydtwyck
              (Vorstandsvorsitzender).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="font-serif text-lg font-bold text-anthracite">
              Server-Log-Dateien
            </h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6
              Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="font-serif text-lg font-bold text-anthracite">
              Kontaktformular
            </h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
              Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten
              erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung
              (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung
              jederzeit widerrufen.
            </p>
            <p>
              Ihre Nachricht wird per E-Mail an unser Postfach zugestellt. Für
              den Versand und die Speicherung dieser E-Mails nutzen wir die
              1&amp;1 IONOS SE, Elgendorfer Straße 57, 56410 Montabaur, als
              Auftragsverarbeiter. Die Server befinden sich in Deutschland.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite">
              4. Ihre Rechte
            </h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten
                zu erhalten (Art. 15 DSGVO)
              </li>
              <li>
                Die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)
              </li>
              <li>
                Die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)
              </li>
              <li>
                Die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)
              </li>
              <li>
                Ihre Daten in einem gängigen Format zu erhalten (Art. 20 DSGVO)
              </li>
              <li>
                Der Verarbeitung zu widersprechen (Art. 21 DSGVO)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite">
              5. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Die Server befinden
              sich in der EU. Weitere Informationen finden Sie in der
              Datenschutzerklärung von Vercel.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite">
              6. Schriftarten
            </h2>
            <p>
              Diese Website nutzt Google Fonts, die lokal eingebunden werden. Es
              findet keine Verbindung zu Servern von Google statt. Die
              Schriftarten werden mit der Website ausgeliefert.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite">
              7. Bildmaterial
            </h2>
            <p>
              Sämtliche Bilder dieser Website werden lokal von unserem eigenen
              Server ausgeliefert. Es werden keine Bilder von externen Anbietern
              oder Content-Delivery-Netzwerken nachgeladen; eine Übermittlung
              Ihrer IP-Adresse an Dritte findet dabei nicht statt.
            </p>
          </div>

          <div className="pt-4 border-t border-sand-dark">
            <p className="text-sm text-anthracite-light/60">
              Stand: August 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
