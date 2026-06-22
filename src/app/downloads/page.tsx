import type { Metadata } from "next";
import Link from "next/link";
import { downloads } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Dokumente — FBG Schlaubetal",
  description:
    "Formulare und Dokumente der FBG Schlaubetal zum Download: Antrag auf Mitgliedschaft, Satzung, Beitragssätze und Waldpflegevertrag.",
};

export default function DownloadsPage() {
  return (
    <>
      <section className="py-20 lg:py-24 bg-warmwhite">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-forest mb-3">
            Dokumente
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-anthracite leading-tight">
            Formulare und Unterlagen zum Download
          </h1>
          <p className="mt-4 text-lg text-anthracite-light leading-relaxed">
            Hier finden Sie wichtige Dokumente der FBG Schlaubetal. Die
            aktuellen Versionen werden bereitgestellt, sobald sie vorliegen.
          </p>

          <div className="mt-8 rounded-2xl bg-earth/10 border border-earth/20 p-4">
            <p className="text-sm text-earth text-center">
              Die folgenden PDFs sind Platzhalterversionen und werden durch
              offizielle Dokumente der FBG ersetzt.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {downloads.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-sand-dark/50 bg-sand/40 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-bold text-anthracite">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-base text-anthracite-light">
                      {item.description}
                    </p>
                    {item.isPlaceholder && (
                      <p className="mt-2 text-xs italic text-earth">
                        Platzhalterversion
                      </p>
                    )}
                  </div>
                </div>
                <a
                  href={item.file}
                  download={item.filename}
                  className="inline-flex items-center justify-center rounded-lg bg-forest px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-light shrink-0"
                >
                  PDF herunterladen
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-anthracite-light mb-6">
              Fragen zu den Unterlagen oder zum Beitritt?
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg border border-forest px-7 py-3.5 text-base font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
