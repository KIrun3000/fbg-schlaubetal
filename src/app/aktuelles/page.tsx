import type { Metadata } from "next";
import Image from "next/image";
import { AktuellesList } from "@/components/AktuellesList";
import { aktuellesIntro, aktuellesItems, sortAktuelles } from "@/lib/aktuelles";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Aktuelles — FBG Schlaubetal",
  description:
    "Termine, Versammlungen und aktuelle Themen der FBG Schlaubetal für Waldbesitzer in ganz Brandenburg.",
  alternates: {
    canonical: "/aktuelles",
  },
};

// Die Einteilung in anstehende und vergangene Termine hängt vom Datum ab.
// Ohne Revalidierung würde sie auf dem Build-Zeitpunkt einfrieren und ein
// Termin bliebe auch nach seinem Ende oben stehen. Einmal täglich genügt.
export const revalidate = 86400;

export default function AktuellesPage() {
  const items = sortAktuelles(aktuellesItems);

  return (
    <>
      <section className="relative bg-forest-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.forestPath}
            alt="Waldweg zwischen Kiefernwald und Feld im Schlaubetal"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-moss-light mb-3">
            Aktuelles
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            Termine, Versammlungen und wichtige Themen
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl leading-relaxed">
            Hier informiert die FBG Schlaubetal über Veranstaltungen,
            Mitgliederversammlungen und aktuelle Waldbewirtschaftungsthemen
            in Brandenburg.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-warmwhite">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="mb-12 text-lg text-anthracite-light leading-relaxed">
            {aktuellesIntro}
          </p>
          <AktuellesList items={items} />
        </div>
      </section>
    </>
  );
}
