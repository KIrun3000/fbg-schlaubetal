export type AktuellesCategory = "termine" | "versammlungen" | "themen";

export type AktuellesRegistration = {
  /** Kurzer Hinweis, ob und wie eine Anmeldung nötig ist. */
  note: string;
  /** ISO-Datum der Anmeldefrist, falls es eine gibt. */
  deadline?: string;
  phone?: string;
  email?: string;
};

export type AktuellesAttachment = {
  label: string;
  file: string;
};

export type AktuellesItem = {
  id: string;
  category: AktuellesCategory;
  title: string;
  /** ISO-Datum; bei Veranstaltungen der erste Tag. */
  date: string;
  /** ISO-Datum des letzten Tages, nur bei mehrtägigen Terminen. */
  endDate?: string;
  /** Uhrzeit als Fließtext, z. B. "10:00 – 15:00 Uhr". */
  time?: string;
  location?: string;
  excerpt: string;
  /** Programmpunkte oder Ablauf, wird als Liste ausgegeben. */
  details?: string[];
  registration?: AktuellesRegistration;
  attachment?: AktuellesAttachment;
};

export const aktuellesCategories: {
  id: AktuellesCategory;
  label: string;
}[] = [
  { id: "termine", label: "Termine" },
  { id: "versammlungen", label: "Versammlungen" },
  { id: "themen", label: "Aktuelle Themen" },
];

export const aktuellesIntro =
  "Die FBG Schlaubetal lädt ihre Mitglieder sowie alle Interessierten herzlich zu den folgenden Veranstaltungen von Waldform ein.";

export const aktuellesItems: AktuellesItem[] = [
  {
    id: "waldform-informationsnachmittag-2026",
    category: "termine",
    title: "Informationsnachmittag für Waldbesitzer",
    date: "2026-09-18",
    time: "ab 14:00 Uhr, Ende gegen 18:00 Uhr",
    location: "Waldform GmbH, An der B87 1, 15848 Ragow-Merz",
    excerpt:
      "Einblicke in Betrieb und Technik, ein Fachvortrag einer Steuerberaterin für Forst- und Landwirtschaft und Zeit für Ihre Fragen — mit anschließendem gemütlichen Austausch. Die Teilnahme ist kostenlos.",
    details: [
      "14:00 Uhr — Ankommen und Hofbesichtigung: Betrieb, Technik und Fuhrpark",
      "15:00 Uhr — Begrüßung sowie Vorstellung von Unternehmen und Leistungen",
      "15:30 Uhr — Fachvortrag einer Steuerberaterin zu steuerlichen Themen rund um den Waldbesitz, anschließend Zeit für Fragen",
      "16:30 Uhr — Gemeinsames Grillen und Erfahrungsaustausch",
      "ca. 18:00 Uhr — Ende der Veranstaltung",
    ],
    registration: {
      note: "Teilnahme kostenlos, Anmeldung erforderlich. Bitte teilen Sie bei der Anmeldung mit, mit wie vielen Personen Sie kommen.",
      deadline: "2026-08-21",
      phone: "03366 5204303",
      email: "info@waldform.de",
    },
    attachment: {
      label: "Einladung als PDF",
      file: "/downloads/waldform-informationsnachmittag-2026.pdf",
    },
  },
  {
    id: "waldform-forsttag-2026",
    category: "termine",
    title: "Waldform-Forsttag",
    date: "2026-09-19",
    time: "10:00 – 15:00 Uhr",
    location: "Waldform GmbH, An der B87 1, 15848 Ragow-Merz",
    excerpt:
      "Familientag auf dem Betriebsgelände: Vorführung der Forstmaschinen, 70 Meter hoch hinaus mit einem Steiger, Wettkämpfe und Mitmachaktionen für Groß und Klein. Für Essen und Getränke ist gesorgt.",
    details: [
      "Vorführung unserer Forstmaschinen",
      "70 m hoch hinaus mit einem Steiger mit Bühne",
      "Hüpfburg und Mitmachaktionen für Groß und Klein",
      "Wettkämpfe in fünf Disziplinen um fünf Preise, Verlosung um 14:30 Uhr (gewinnen können nur Teilnehmer, die um 14:30 Uhr persönlich anwesend sind)",
      "Essen aus dem Smoker, Hot Dogs, Champignon- und Gyros-Pfanne sowie Eis aus Friedland",
    ],
    registration: {
      note: "Eine Anmeldung ist nicht erforderlich.",
    },
  },
];

export function formatAktuellesDate(date: string) {
  return new Date(date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Wie formatAktuellesDate, zusätzlich mit Wochentag — für Veranstaltungen. */
export function formatAktuellesDateLong(
  item: Pick<AktuellesItem, "date" | "endDate">,
): string {
  const start = new Date(item.date).toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!item.endDate || item.endDate === item.date) return start;

  return `${start} bis ${formatAktuellesDateLong({ date: item.endDate })}`;
}

/** Letzter Tag, an dem ein Eintrag noch als "anstehend" gilt. */
function endOfItem(item: AktuellesItem) {
  return new Date(item.endDate ?? item.date).getTime();
}

/**
 * Anstehende Einträge zuerst (der nächste Termin oben), dahinter die
 * vergangenen in umgekehrter Reihenfolge. `today` wird bewusst übergeben,
 * damit Server und Client dasselbe Ergebnis rendern.
 */
export function sortAktuelles(
  items: AktuellesItem[],
  today = new Date().toISOString().slice(0, 10),
) {
  const now = new Date(today).getTime();
  const upcoming: AktuellesItem[] = [];
  const past: AktuellesItem[] = [];

  for (const item of items) {
    (endOfItem(item) >= now ? upcoming : past).push(item);
  }

  upcoming.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  past.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return [...upcoming, ...past];
}

export function getLatestAktuelles(limit = 3) {
  return sortAktuelles(aktuellesItems).slice(0, limit);
}

export function getCategoryLabel(category: AktuellesCategory) {
  return aktuellesCategories.find((item) => item.id === category)?.label ?? category;
}

/** Nur die Kategorien, zu denen es auch Einträge gibt. */
export function getUsedCategories(items: AktuellesItem[]) {
  return aktuellesCategories.filter((category) =>
    items.some((item) => item.category === category.id),
  );
}
