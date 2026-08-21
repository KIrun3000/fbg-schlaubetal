"use client";

import { useState } from "react";
import Link from "next/link";
import {
  formatAktuellesDate,
  formatAktuellesDateLong,
  getCategoryLabel,
  getUsedCategories,
  type AktuellesCategory,
  type AktuellesItem,
} from "@/lib/aktuelles";

function IconCalendar({ className }: { className?: string }) {
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
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  );
}

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

function IconDocument({ className }: { className?: string }) {
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
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function MetaRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 text-base text-anthracite-light">
      <span className="mt-0.5 shrink-0 text-forest">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

export function AktuellesList({ items }: { items: AktuellesItem[] }) {
  const categories = getUsedCategories(items);
  const [activeCategory, setActiveCategory] = useState<
    AktuellesCategory | "all"
  >("all");

  const filtered =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <>
      {categories.length > 1 && (
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
          {categories.map((category) => (
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
      )}

      <div className="space-y-6">
        {filtered.map((item) => (
          <article
            key={item.id}
            id={item.id}
            className="rounded-2xl border border-sand-dark/50 bg-warmwhite p-8 scroll-mt-24"
          >
            <span className="inline-flex rounded-full bg-forest/10 px-3 py-1 text-xs font-medium text-forest">
              {getCategoryLabel(item.category)}
            </span>

            <h2 className="mt-4 font-serif text-2xl font-bold text-anthracite">
              {item.title}
            </h2>

            <p className="mt-3 text-lg text-anthracite-light leading-relaxed">
              {item.excerpt}
            </p>

            <div className="mt-6 space-y-2.5 border-t border-sand-dark/50 pt-6">
              <MetaRow icon={<IconCalendar className="h-5 w-5" />}>
                <time dateTime={item.date}>{formatAktuellesDateLong(item)}</time>
              </MetaRow>
              {item.time && (
                <MetaRow icon={<IconClock className="h-5 w-5" />}>
                  {item.time}
                </MetaRow>
              )}
              {item.location && (
                <MetaRow icon={<IconLocation className="h-5 w-5" />}>
                  {item.location}
                </MetaRow>
              )}
            </div>

            {item.details && item.details.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-anthracite">
                  Programm
                </h3>
                <ul className="mt-3 space-y-2">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-base text-anthracite-light leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-earth"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.registration && (
              <div className="mt-6 rounded-xl bg-sand/60 p-5">
                <p className="text-base text-anthracite leading-relaxed">
                  {item.registration.note}
                </p>
                {item.registration.deadline && (
                  <p className="mt-2 text-base font-semibold text-earth-dark">
                    Anmeldung bis{" "}
                    <time dateTime={item.registration.deadline}>
                      {formatAktuellesDate(item.registration.deadline)}
                    </time>
                  </p>
                )}
                {(item.registration.phone || item.registration.email) && (
                  <p className="mt-2 text-base text-anthracite-light">
                    {item.registration.phone && (
                      <a
                        href={`tel:${item.registration.phone.replace(/\s/g, "")}`}
                        className="text-forest font-medium hover:underline"
                      >
                        {item.registration.phone}
                      </a>
                    )}
                    {item.registration.phone && item.registration.email && " · "}
                    {item.registration.email && (
                      <a
                        href={`mailto:${item.registration.email}`}
                        className="text-forest font-medium hover:underline"
                      >
                        {item.registration.email}
                      </a>
                    )}
                  </p>
                )}
              </div>
            )}

            {item.attachment && (
              <a
                href={item.attachment.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-forest px-5 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
              >
                <IconDocument className="h-5 w-5" />
                {item.attachment.label}
              </a>
            )}
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
