import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
  title: "FBG Schlaubetal — Forstbetriebsgemeinschaft für private Waldbesitzer",
  description:
    "Die FBG Schlaubetal ist der Zusammenschluss privater Waldbesitzer in der Region Schlaubetal und Oder-Spree. Gemeinsam für unseren Wald.",
  openGraph: {
    title: "FBG Schlaubetal — Gemeinsam für unseren Wald",
    description:
      "Forstbetriebsgemeinschaft für private Waldbesitzer im Schlaubetal und der Region Oder-Spree.",
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
