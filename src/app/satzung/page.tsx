import type { Metadata } from "next";
import Link from "next/link";
import { SatzungContent } from "@/components/SatzungContent";
import { getDownloadById } from "@/lib/downloads";
import { satzungTitle } from "@/lib/satzung";

export const metadata: Metadata = {
  title: "Satzung — FBG Schlaubetal",
  description:
    "Satzung der Forstbetriebsgemeinschaft Schlaubetal — Rechte, Pflichten und Organisation der FBG.",
};

export default function SatzungPage() {
  const satzungPdf = getDownloadById("satzung");

  return (
    <section className="py-20 lg:py-24 bg-warmwhite">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-forest mb-3">
          Rechtliches
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-anthracite leading-tight">
          Satzung
        </h1>
        <p className="mt-4 text-lg text-anthracite-light leading-relaxed">
          {satzungTitle}
        </p>

        {satzungPdf && (
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={satzungPdf.file}
              download={satzungPdf.filename}
              className="inline-flex items-center justify-center rounded-lg bg-forest px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-light"
            >
              Satzung als PDF herunterladen
            </a>
            <Link
              href="/downloads#satzung"
              className="inline-flex items-center justify-center rounded-lg border border-forest px-5 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
            >
              Alle Dokumente
            </Link>
          </div>
        )}

        <div className="mt-12">
          <SatzungContent />
        </div>
      </div>
    </section>
  );
}
