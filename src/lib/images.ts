// Alle Bilder liegen lokal in /public/images und werden vom eigenen Server
// ausgeliefert — es werden keine Bilder von Dritt-CDNs geladen. Das ist so in
// der Datenschutzerklärung zugesichert; bitte keine externen URLs ergänzen.
//
// Bildquellen:
// - Hero (hero-mixed-forest): Foto der FBG
// - Regionale Kiefernwald-Motive: Pixabay License
// - Leistungs-Slider und Stammholzpolter: Pexels License
// - Backup-Bilder: /public/images/backup/ (Pexels, für spätere Verwendung)

export type ImageSlide = {
  src: string;
  alt: string;
};

export const images = {
  // Hero: Panorama-Luftbild Mischwald (FBG)
  hero: "/images/hero-mixed-forest.webp",
  // Waldweg zwischen Kiefern und Wiese
  forestPath: "/images/forest-path.webp",
  // Sonnenlicht durch die Baumkronen
  sunlightForest: "/images/sunlit-moss-forest.webp",
  // Kiefernwald mit langen Schatten
  forestManagement: "/images/pine-forest-shadows.webp",
  // Mitgliedschaft: Kiefernwald im warmen Abendlicht
  membership: "/images/pine-forest-shadows.webp",
  // Unsere Region: Kiefern-Birken-Bestand, typisch für Brandenburg
  region: "/images/region-kiefernwald.webp",
  // Herbstlicher Kiefernwald mit Farnen am Waldboden
  forestFloor: "/images/forest-floor-ferns.webp",
  // Logo des Partnerbetriebs Waldform GmbH
  waldformLogo: "/images/waldform-logo.webp",
} as const;

/** Automatische Slider auf /leistungen */
export const serviceSlides = {
  timberMarketing: [
    {
      src: "/images/stammholz-polter.webp",
      alt: "Stammholzpolter am Waldweg — gemeinsame Vermarktung gebündelter Holzmengen",
    },
    {
      src: "/images/harvester-holzernte.webp",
      alt: "Harvester bei der Holzernte in einem Kiefernbestand in Brandenburg",
    },
  ],
  forestryMeasures: [
    {
      src: "/images/harvester-kiefernwald.webp",
      alt: "Harvester mit Kettenlaufwerk bei der Durchforstung eines Kiefernwaldes",
    },
    {
      src: "/images/forestry-reforestation.webp",
      alt: "Aufforstungsfläche mit jungen Bäumen",
    },
  ],
} satisfies Record<string, readonly ImageSlide[]>;

/** Reserve — lokal abgelegt, noch nicht auf der Website eingebunden */
export const backupImages = {
  forestFloorLogs: "/images/backup/forest-floor-logs.webp",
  forestSunlight: "/images/backup/forest-sunlight.webp",
  logTransport: "/images/backup/log-transport.webp",
} as const;
