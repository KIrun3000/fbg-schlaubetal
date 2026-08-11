"use client";

import { useState } from "react";
import Link from "next/link";
import {
  aktuellesCategories,
  aktuellesItems,
  formatAktuellesDate,
  getCategoryLabel,
  type AktuellesCategory,
} from "@/lib/aktuelles";

export function AktuellesList() {
  const [activeCategory, setActiveCategory] = useState<
    AktuellesCategory | "all"
  >("all");

  const filtered =
    activeCategory === "all"
      ? aktuellesItems
      : aktuellesItems.filter((item) => item.category === activeCategory);

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-12">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === "all"
              ? "bg-forest text-white"
              : "bg-sand text-anthracite hover:bg-sand-dark"
          }`}
        >
          Alle
        </button>
        {aktuellesCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? "bg-forest text-white"
                : "bg-sand text-anthracite hover:bg-sand-dark"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {sorted.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-sand-dark/50 bg-warmwhite p-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="inline-flex rounded-full bg-forest/10 px-3 py-1 text-xs font-medium text-forest">
                {getCategoryLabel(item.category)}
              </span>
              <time
                dateTime={item.date}
                className="text-sm text-anthracite-light"
              >
                {formatAktuellesDate(item.date)}
              </time>
              {item.isPlaceholder && (
                <span className="text-xs italic text-earth-dark">
                  Beispieleintrag
                </span>
              )}
            </div>
            <h2 className="font-serif text-2xl font-bold text-anthracite">
              {item.title}
            </h2>
            <p className="mt-3 text-lg text-anthracite-light leading-relaxed">
              {item.excerpt}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-anthracite-light mb-6">
          Fragen zu Terminen oder Versammlungen?
        </p>
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center rounded-lg bg-forest px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-forest-light"
        >
          Kontakt aufnehmen
        </Link>
      </div>
    </>
  );
}
