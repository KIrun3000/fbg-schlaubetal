import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "FBG Schlaubetal — Forstbetriebsgemeinschaft für private Waldbesitzer",
  description:
    "Die FBG Schlaubetal ist der Zusammenschluss privater Waldbesitzer in ganz Brandenburg. Gemeinsam für unseren Wald.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FBG Schlaubetal — Gemeinsam für unseren Wald",
    description:
      "Forstbetriebsgemeinschaft für private Waldbesitzer in ganz Brandenburg.",
    url: site.url,
    siteName: site.name,
    locale: "de_DE",
    type: "website",
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
      className={`${inter.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
