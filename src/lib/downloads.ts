export type DownloadFormat = "pdf" | "docx";

export type DownloadItem = {
  id: string;
  title: string;
  file: string;
  filename: string;
  format: DownloadFormat;
  description: string;
  isPlaceholder: boolean;
};

/** Kurzform für Buttons, z. B. "Herunterladen (Word)". */
export const downloadFormatLabels: Record<DownloadFormat, string> = {
  pdf: "PDF",
  docx: "Word",
};

export const downloads: DownloadItem[] = [
  {
    id: "antrag-mitgliedschaft",
    title: "Antrag auf Mitgliedschaft",
    file: "/downloads/antrag-mitgliedschaft.docx",
    filename: "antrag-mitgliedschaft.docx",
    format: "docx",
    description:
      "Formular zur Aufnahme als Mitglied der FBG Schlaubetal — als Word-Dokument, das Sie direkt am Computer ausfüllen können.",
    isPlaceholder: false,
  },
  {
    id: "satzung",
    title: "Satzung",
    file: "/downloads/satzung.pdf",
    filename: "satzung.pdf",
    format: "pdf",
    description:
      "Satzung der Forstbetriebsgemeinschaft Schlaubetal — online lesbar und als PDF verfügbar.",
    isPlaceholder: false,
  },
  {
    id: "beitragssaetze",
    title: "Kosten- und Beitragssätze",
    file: "/downloads/beitragssaetze.pdf",
    filename: "beitragssaetze.pdf",
    format: "pdf",
    description:
      "Übersicht der Kosten und Beitragssätze der FBG.",
    isPlaceholder: true,
  },
  {
    id: "waldpflegevertrag",
    title: "Waldpflegevertrag",
    file: "/downloads/waldpflegevertrag.pdf",
    filename: "waldpflegevertrag.pdf",
    format: "pdf",
    description:
      "Muster für einen Waldpflegevertrag zwischen Mitglied und FBG.",
    isPlaceholder: true,
  },
];

export function getDownloadById(id: string) {
  return downloads.find((item) => item.id === id);
}

export function getDownloadFormatLabel(item: DownloadItem) {
  return downloadFormatLabels[item.format];
}
