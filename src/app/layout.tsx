import type { Metadata } from "next";
import { Fraunces, Mulish } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "FBG Schlaubetal — Forstbetriebsgemeinschaft für private Waldbesitzer",
  description:
    "Die FBG Schlaubetal ist der Zusammenschluss privater Waldbesitzer in ganz Brandenburg. Gemeinsam für unseren Wald.",
  // Kein canonical im Layout: Der Wert würde an alle Unterseiten vererbt und
  // jede Seite als Dublette der Startseite ausweisen. Jede Seite setzt ihren
  // eigenen canonical in ihrer metadata-Deklaration.
  openGraph: {
    title: "FBG Schlaubetal — Gemeinsam für unseren Wald",
    description:
      "Forstbetriebsgemeinschaft für private Waldbesitzer in ganz Brandenburg.",
    url: site.url,
    siteName: site.name,
    locale: "de_DE",
    type: "website",
    // Bewusst hier deklariert statt über die Datei-Konvention
    // app/opengraph-image.jpg: So steht das Vorschaubild an derselben Stelle
    // wie Titel und Beschreibung und speist zugleich die Twitter-Card.
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Logo der FBG Schlaubetal vor einem Kiefernwald mit dem Schriftzug „Gemeinsam für unseren Wald“",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FBG Schlaubetal — Gemeinsam für unseren Wald",
    description:
      "Forstbetriebsgemeinschaft für private Waldbesitzer in ganz Brandenburg.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${mulish.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
