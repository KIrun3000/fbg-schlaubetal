import type { Metadata } from "next";
import Image from "next/image";
import { AktuellesList } from "@/components/AktuellesList";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Aktuelles — FBG Schlaubetal",
  description:
    "Termine, Versammlungen und aktuelle Themen der FBG Schlaubetal für Waldbesitzer in ganz Brandenburg.",
};

export default function AktuellesPage() {
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
          <p className="text-sm font-medium uppercase tracking-widest text-forest-light/80 mb-3">
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
          <div className="mb-8 rounded-2xl bg-earth/10 border border-earth/20 p-4">
            <p className="text-sm text-earth text-center">
              Die folgenden Einträge sind Platzhalter und werden durch die FBG
              Schlaubetal mit echten Terminen und Meldungen ersetzt.
            </p>
          </div>
          <AktuellesList />
        </div>
      </section>
    </>
  );
}
