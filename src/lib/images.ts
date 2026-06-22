// Bildquellen gemischt:
// - Regionale Kiefernwald-Motive: lokal in /public/images (Pixabay License)
// - Leistungs-Slider: lokal, Pexels License (bulat843, zkadoshi, Radoslaw Krupa, Karola G)
// - Backup-Bilder: /public/images/backup/ (Pexels, für spätere Verwendung)
// - Restliche Slots: Unsplash-Platzhalter, bis eigene Fotos vorliegen.

export type ImageSlide = {
  src: string;
  alt: string;
};

export const images = {
  // Hero (Mobile): Sonniger moosiger Kiefernwald
  hero: "/images/sunlit-moss-forest.webp",
  // Waldweg zwischen Kiefern und Wiese
  forestPath: "/images/forest-path.webp",
  // Sonnenlicht durch die Baumkronen
  sunlightForest: "/images/sunlit-moss-forest.webp",
  // Kiefernwald mit langen Schatten
  forestManagement: "/images/pine-forest-shadows.webp",
  // Membership: Handshake / community in nature
  community: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format",
  // Contact: Brandenburg rural landscape
  landscape: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format",
  // Region: Aerial view of forest
  aerialForest: "https://images.unsplash.com/photo-1542202229-7d93c33f5d07?w=1200&q=80&auto=format",
  // Herbstlicher Kiefernwald mit Farnen am Waldboden
  forestFloor: "/images/forest-floor-ferns.webp",
  // Detail: Tree bark close-up
  bark: "https://images.unsplash.com/photo-1516214104703-d870798883c5?w=800&q=80&auto=format",
} as const;

/** Automatische Slider auf /leistungen */
export const serviceSlides = {
  timberMarketing: [
    {
      src: "/images/firewood-stack.webp",
      alt: "Gestapeltes Brennholz — gebündelte Holzvermarktung",
    },
    {
      src: "/images/firewood-pile.webp",
      alt: "Brennholz am Waldrand — Holz aus der Region",
    },
  ],
  forestryMeasures: [
    {
      src: "/images/forestry-harvester.webp",
      alt: "Forstmaschine bei der Holzernte im Wald",
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
  forestMixedTrees: "/images/backup/forest-mixed-trees.webp",
  logTransport: "/images/backup/log-transport.webp",
} as const;
