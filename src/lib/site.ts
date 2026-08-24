export const site = {
  name: "FBG Schlaubetal",
  tagline: "Wald verstehen. Zukunft gestalten. Gemeinsam handeln.",
  url: "https://fbg-schlaubetal.de",
  email: "info@fbg-schlaubetal.de",
  // Telefonisch ist die FBG über die Geschäftsstelle der Waldform GmbH
  // erreichbar. Deren Geschäftsführer Richard Tschuschke ist zugleich
  // stellvertretender Vorsitzender der FBG.
  phone: {
    display: "03366 5204303",
    href: "tel:+4933665204303",
  },
  address: {
    street: "Siedlung 18",
    zip: "15848",
    city: "Ragow-Merz",
  },
  partner: {
    name: "Waldform",
    url: "https://www.waldform.de",
    description:
      "Die FBG Schlaubetal hat ihren Sitz im selben Gebäude wie die Waldform GmbH, die als forstlicher Dienstleister in der Region tätig ist. Während die FBG die Interessen der Waldbesitzer vertritt, unterstützt Waldform deren praktische Umsetzung durch die Planung und Durchführung forstlicher Maßnahmen vor Ort.",
  },
  associations: {
    waldbesitzerverband: {
      name: "Waldbesitzerverband Brandenburg e.V.",
      url: "https://waldbesitzerverband-brandenburg.de/",
    },
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
