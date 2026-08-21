import type { Metadata } from "next";

// Die Kontaktseite ist wegen des Formulars eine Client-Komponente und kann
// selbst keine metadata exportieren. Deshalb steht sie hier im Segment-Layout.
export const metadata: Metadata = {
  title: "Kontakt — FBG Schlaubetal",
  description:
    "Kontakt zur FBG Schlaubetal in Ragow-Merz: Fragen zur Mitgliedschaft, zur Holzvermarktung oder zur Bewirtschaftung Ihres Waldes in Brandenburg.",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
