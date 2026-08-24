"use client";

import { useState } from "react";
import { TopoLines } from "@/components/TopoLines";

/*
  Zwei-Klick-Lösung für die OpenStreetMap-Karte.

  Ein direkt eingebundener iframe würde die IP-Adresse jedes Besuchers an die
  OpenStreetMap Foundation übermitteln, ohne dass er das beeinflussen kann.
  Deshalb wird der iframe erst nach einem ausdrücklichen Klick in den DOM
  eingefügt — vorher entsteht keine Verbindung. Wer die Karte gar nicht laden
  möchte, kann stattdessen dem Textlink nach außen folgen.
*/

const MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=14.25%2C52.15%2C14.35%2C52.22&layer=mapnik&marker=52.185%2C14.3";

const MAP_EXTERNAL_URL =
  "https://www.openstreetmap.org/?mlat=52.185&mlon=14.3#map=13/52.185/14.30";

function IconLocation({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 1116 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ConsentMap({ caption }: { caption: string }) {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div>
      <div className="aspect-[4/3] rounded-2xl bg-sand border border-sand-dark overflow-hidden">
        {mapLoaded ? (
          <iframe
            title="Standort der FBG Schlaubetal auf OpenStreetMap"
            src={MAP_EMBED_URL}
            className="w-full h-full border-0"
            loading="lazy"
          />
        ) : (
          <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-6">
            <TopoLines className="pointer-events-none absolute -right-16 -bottom-20 h-[320px] w-[320px] text-forest/[0.08]" />
            <TopoLines className="pointer-events-none absolute -left-20 -top-24 h-[280px] w-[280px] text-forest/[0.05]" />

            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest mb-4">
              <IconLocation className="h-6 w-6" />
            </div>

            <p className="relative text-sm text-anthracite-light leading-relaxed max-w-xs">
              Beim Laden der Karte werden Daten an OpenStreetMap übertragen,
              darunter Ihre IP-Adresse. Die Karte wird erst nach Ihrer
              Zustimmung geladen.
            </p>

            <button
              type="button"
              onClick={() => setMapLoaded(true)}
              className="relative mt-5 inline-flex items-center justify-center rounded-lg bg-forest px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-light"
            >
              Karte laden
            </button>
          </div>
        )}
      </div>

      <p className="mt-3 text-sm text-anthracite-light">{caption}</p>

      <p className="mt-1 text-sm text-anthracite-light">
        <a
          href={MAP_EXTERNAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-forest hover:underline"
        >
          Standort direkt in OpenStreetMap öffnen
        </a>
      </p>
    </div>
  );
}
