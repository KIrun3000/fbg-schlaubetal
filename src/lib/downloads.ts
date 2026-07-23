export type DownloadItem = {
  id: string;
  title: string;
  file: string;
  filename: string;
  description: string;
  isPlaceholder: boolean;
};

export const downloads: DownloadItem[] = [
  {
    id: "antrag-mitgliedschaft",
    title: "Antrag auf Mitgliedschaft",
    file: "/downloads/antrag-mitgliedschaft.pdf",
    filename: "antrag-mitgliedschaft.pdf",
    description:
      "Formular zur Aufnahme als Mitglied der FBG Schlaubetal.",
    isPlaceholder: false,
  },
  {
    id: "satzung",
    title: "Satzung",
    file: "/downloads/satzung.pdf",
    filename: "satzung.pdf",
    description:
      "Satzung der Forstbetriebsgemeinschaft Schlaubetal — online lesbar und als PDF verfügbar.",
    isPlaceholder: false,
  },
  {
    id: "beitragssaetze",
    title: "Kosten- und Beitragssätze",
    file: "/downloads/beitragssaetze.pdf",
    filename: "beitragssaetze.pdf",
    description:
      "Übersicht der Mitgliedsbeiträge und Kosten der FBG.",
    isPlaceholder: true,
  },
  {
    id: "waldpflegevertrag",
    title: "Waldpflegevertrag",
    file: "/downloads/waldpflegevertrag.pdf",
    filename: "waldpflegevertrag.pdf",
    description:
      "Muster für einen Waldpflegevertrag zwischen Mitglied und FBG.",
    isPlaceholder: true,
  },
];

export function getDownloadById(id: string) {
  return downloads.find((item) => item.id === id);
}
