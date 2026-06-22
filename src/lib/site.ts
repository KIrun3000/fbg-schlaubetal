export const site = {
  name: "FBG Schlaubetal",
  tagline: "Forstbetriebsgemeinschaft",
  email: "info@fbg-schlaubetal.de",
  address: {
    street: "Siedlung 18",
    zip: "15848",
    city: "Ragow-Merz",
  },
  partner: {
    name: "Waldform",
    description:
      "Die FBG Schlaubetal hat ihren Sitz im selben Haus wie Waldform — unseren Dienstleister für forstliche Arbeiten in der Region. Die FBG vertritt die Waldbesitzer; Waldform setzt die fachliche Umsetzung um.",
  },
} as const;

export const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Aktuelles", href: "/aktuelles" },
  { name: "Mitgliedschaft", href: "/mitgliedschaft" },
  { name: "Kontakt", href: "/kontakt" },
] as const;

export const footerNavigation = [
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Aktuelles", href: "/aktuelles" },
  { name: "Mitglied werden", href: "/mitgliedschaft" },
  { name: "Dokumente", href: "/downloads" },
  { name: "Kontakt", href: "/kontakt" },
] as const;

export function formatAddress() {
  return `${site.address.street}, ${site.address.zip} ${site.address.city}`;
}
