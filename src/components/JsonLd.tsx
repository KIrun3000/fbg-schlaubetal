import { site } from "@/lib/site";
import { aktuellesItems, type AktuellesItem } from "@/lib/aktuelles";

/*
  Strukturierte Daten nach schema.org. Der Block ist für Besucher unsichtbar
  und beschreibt Suchmaschinen, worum es auf der Seite geht — ohne dass sie es
  aus dem Fließtext erraten müssen.

  Das Einbetten folgt der Empfehlung aus der Next-Dokumentation: ein einfaches
  script-Element in der Seite. "<" wird maskiert, damit sich über die Daten
  kein Markup einschleusen lässt.
*/

function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Wer die FBG ist — gehört auf jede Seite genau einmal. */
export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${site.url}/#organisation`,
        name: "Forstbetriebsgemeinschaft Schlaubetal w. V.",
        alternateName: site.name,
        url: site.url,
        logo: `${site.url}/images/logo/logo-fbg.svg`,
        image: `${site.url}/opengraph-image.jpg`,
        email: site.email,
        telephone: site.phone.display,
        description:
          "Anerkannte Forstbetriebsgemeinschaft nach § 16 BWaldG. Die FBG Schlaubetal bündelt die Interessen privater Waldbesitzer in ganz Brandenburg.",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          postalCode: site.address.zip,
          addressLocality: site.address.city,
          addressRegion: "Brandenburg",
          addressCountry: "DE",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Brandenburg",
        },
        memberOf: {
          "@type": "Organization",
          name: site.associations.waldbesitzerverband.name,
          url: site.associations.waldbesitzerverband.url,
        },
      }}
    />
  );
}

/**
 * Zieht Beginn und Ende aus der Uhrzeit-Angabe im Fließtext, z. B. aus
 * "10:00 – 15:00 Uhr" oder "ab 14:00 Uhr, Ende gegen 18:00 Uhr". Die erste
 * gefundene Zeit gilt als Beginn, eine zweite als Ende. Ohne Treffer bleibt
 * es beim reinen Datum — das ist für schema.org zulässig.
 */
function toIsoRange(item: AktuellesItem) {
  const times = (item.time ?? "").match(/\d{1,2}:\d{2}/g) ?? [];
  const lastDay = item.endDate ?? item.date;

  const withTime = (day: string, time?: string) =>
    time ? `${day}T${time.padStart(5, "0")}:00` : day;

  return {
    startDate: withTime(item.date, times[0]),
    endDate: withTime(lastDay, times.length > 1 ? times[times.length - 1] : undefined),
  };
}

function toEvent(item: AktuellesItem) {
  const { startDate, endDate } = toIsoRange(item);

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: item.title,
    description: item.excerpt,
    startDate,
    endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    url: `${site.url}/aktuelles#${item.id}`,
    location: {
      "@type": "Place",
      name: "Waldform GmbH",
      address: {
        "@type": "PostalAddress",
        streetAddress: "An der B87 1",
        postalCode: "15848",
        addressLocality: "Ragow-Merz",
        addressCountry: "DE",
      },
    },
    organizer: {
      "@type": "Organization",
      name: site.partner.name,
      url: site.partner.url,
    },
  };
}

/** Die Veranstaltungen auf /aktuelles, jede als eigener Eintrag. */
export function EventsJsonLd() {
  const events = aktuellesItems.filter((item) => item.category === "termine");

  return (
    <>
      {events.map((item) => (
        <JsonLdScript key={item.id} data={toEvent(item)} />
      ))}
    </>
  );
}
