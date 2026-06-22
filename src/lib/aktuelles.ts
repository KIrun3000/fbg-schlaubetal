export type AktuellesCategory = "termine" | "versammlungen" | "themen";

export type AktuellesItem = {
  id: string;
  category: AktuellesCategory;
  title: string;
  date: string;
  excerpt: string;
  isPlaceholder: boolean;
};

export const aktuellesCategories: {
  id: AktuellesCategory;
  label: string;
}[] = [
  { id: "termine", label: "Termine" },
  { id: "versammlungen", label: "Versammlungen" },
  { id: "themen", label: "Aktuelle Themen" },
];

export const aktuellesItems: AktuellesItem[] = [
  {
    id: "termin-waldfuehrung",
    category: "termine",
    title: "Waldführung im Schlaubetal",
    date: "2026-09-12",
    excerpt:
      "Gemeinsame Waldführung für Mitglieder und Interessenten — Beispieleintrag, wird durch die FBG ersetzt.",
    isPlaceholder: true,
  },
  {
    id: "termin-beratungstag",
    category: "termine",
    title: "Beratungstag für Waldbesitzer",
    date: "2026-10-03",
    excerpt:
      "Informationsveranstaltung zu Fördermöglichkeiten und Waldbewirtschaftung — Beispieleintrag.",
    isPlaceholder: true,
  },
  {
    id: "versammlung-mitglieder",
    category: "versammlungen",
    title: "Mitgliederversammlung 2026",
    date: "2026-11-15",
    excerpt:
      "Jährliche Mitgliederversammlung der FBG Schlaubetal — Termin und Ort werden noch bekannt gegeben.",
    isPlaceholder: true,
  },
  {
    id: "versammlung-vorstand",
    category: "versammlungen",
    title: "Vorstandssitzung",
    date: "2026-08-20",
    excerpt:
      "Interne Vorstandssitzung — Beispieleintrag, wird durch die FBG ersetzt.",
    isPlaceholder: true,
  },
  {
    id: "thema-borkenkaefer",
    category: "themen",
    title: "Borkenkäfer: Was Waldbesitzer wissen sollten",
    date: "2026-06-01",
    excerpt:
      "Aktuelle Hinweise zur Schadholzaufarbeitung und Prävention — Beispieleintrag.",
    isPlaceholder: true,
  },
  {
    id: "thema-foerderung",
    category: "themen",
    title: "Neue Förderprogramme für Waldumbau",
    date: "2026-05-15",
    excerpt:
      "Überblick über aktuelle Fördermöglichkeiten für klimaresilienten Waldumbau — Beispieleintrag.",
    isPlaceholder: true,
  },
];

export function formatAktuellesDate(date: string) {
  return new Date(date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getLatestAktuelles(limit = 3) {
  return [...aktuellesItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getCategoryLabel(category: AktuellesCategory) {
  return aktuellesCategories.find((item) => item.id === category)?.label ?? category;
}
