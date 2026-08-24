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
        {/* "Datenschutzerklärung" ist ein Wort und passt bei 4xl nicht in
            schmale Displays — deshalb dort eine Stufe kleiner, zusätzlich
            Silbentrennung als Rückfall für noch engere Fenster. */}
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-anthracite mb-10 hyphens-auto">
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
              Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt im
              technisch sicheren Betrieb der Website. Die Log-Daten werden nach
              spätestens sieben Tagen gelöscht, sofern sie nicht zur Aufklärung
              eines konkreten Sicherheitsvorfalls benötigt werden.
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
              jederzeit mit Wirkung für die Zukunft widerrufen — eine formlose
              Mitteilung per E-Mail genügt. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Verarbeitung bleibt vom Widerruf unberührt.
            </p>
            <p>
              Wir speichern Ihre Anfrage, bis sie abschließend bearbeitet ist,
              und löschen sie anschließend — spätestens jedoch, wenn der Zweck
              der Speicherung entfällt. Zwingende gesetzliche Bestimmungen,
              insbesondere handels- und steuerrechtliche Aufbewahrungsfristen,
              bleiben unberührt.
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
            <p>
              Wenden Sie sich dazu formlos an die oben genannte verantwortliche
              Stelle.
            </p>

            <h3 className="font-serif text-lg font-bold text-anthracite">
              Beschwerderecht bei der Aufsichtsbehörde
            </h3>
            <p>
              Unabhängig davon haben Sie das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten zu beschweren (Art. 77 DSGVO). Zuständig
              für uns ist:
            </p>
            <p>
              Die Landesbeauftragte für den Datenschutz und für das Recht auf
              Akteneinsicht Brandenburg
              <br />
              Stahnsdorfer Damm 77
              <br />
              14532 Kleinmachnow
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite">
              5. Hosting
            </h2>
            <p>
              Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, USA, gehostet. Die Auslieferung erfolgt über
              Server in der Europäischen Union; ein Zugriff aus den USA lässt
              sich technisch jedoch nicht ausschließen.
            </p>
            <p>
              Mit Vercel besteht ein Vertrag über die Auftragsverarbeitung
              gemäß Art. 28 DSGVO. Vercel ist unter dem EU-US Data Privacy
              Framework zertifiziert; die Europäische Kommission hat für
              zertifizierte Unternehmen mit ihrem Angemessenheitsbeschluss vom
              10. Juli 2023 ein angemessenes Datenschutzniveau festgestellt.
              Eine Übermittlung in die USA ist damit auf dieser Grundlage
              zulässig.
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
              7. Bild- und Videomaterial
            </h2>
            <p>
              Sämtliche Bilder und das Video auf der Startseite werden lokal von
              unserem eigenen Server ausgeliefert. Es werden keine Medien von
              externen Anbietern oder Content-Delivery-Netzwerken nachgeladen;
              eine Übermittlung Ihrer IP-Adresse an Dritte findet dabei nicht
              statt.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-anthracite">
              8. Kartendarstellung (OpenStreetMap)
            </h2>
            <p>
              Auf unserer Kontaktseite bieten wir eine Karte von OpenStreetMap
              an. Anbieter ist die OpenStreetMap Foundation, St John&rsquo;s
              Innovation Centre, Cowley Road, Cambridge, CB4 0WS,
              Vereinigtes Königreich.
            </p>
            <p>
              Die Karte wird nicht automatisch geladen. Erst wenn Sie die
              Schaltfläche „Karte laden“ anklicken, wird eine Verbindung zu den
              Servern von OpenStreetMap aufgebaut und dabei Ihre IP-Adresse
              übermittelt. Ohne diesen Klick findet keinerlei Datenübertragung
              statt. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1
              lit. a DSGVO, die Sie durch das Anklicken erteilen.
            </p>
            <p>
              Für das Vereinigte Königreich hat die Europäische Kommission mit
              Angemessenheitsbeschluss ein angemessenes Datenschutzniveau
              festgestellt.
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
