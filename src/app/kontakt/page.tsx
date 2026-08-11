"use client";

import Image from "next/image";
import { useActionState } from "react";
import { images } from "@/lib/images";
import { formatAddress, site } from "@/lib/site";
import { sendContactMessage, type ContactFormState } from "./actions";

const initialFormState: ContactFormState = { status: "idle" };

export default function KontaktPage() {
  const [formState, formAction, pending] = useActionState(
    sendContactMessage,
    initialFormState,
  );

  return (
    <>
      {/* Page Hero */}
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
            Kontakt
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl">
            Sprechen Sie uns an.
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl leading-relaxed">
            Haben Sie Fragen zur FBG Schlaubetal oder möchten Sie mehr über eine
            Mitgliedschaft erfahren? Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-24 bg-warmwhite">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl font-bold text-anthracite mb-8">
                Nachricht senden
              </h2>

              {formState.status === "sent" ? (
                <div className="rounded-2xl bg-forest/5 border border-forest/20 p-10 text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-forest mb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-anthracite mb-2">
                    Nachricht gesendet
                  </h3>
                  <p className="text-anthracite-light">
                    Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah bei
                    Ihnen.
                  </p>
                </div>
              ) : (
                <form action={formAction} className="space-y-6">
                  {formState.status === "error" && (
                    <p
                      role="alert"
                      aria-live="polite"
                      className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    >
                      {formState.message}
                    </p>
                  )}

                  {/* Honeypot gegen Spam-Bots – für Menschen unsichtbar */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm md:text-base font-medium text-anthracite mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        defaultValue={formState.values?.name}
                        className="w-full rounded-lg border border-sand-dark bg-white px-4 py-3 text-anthracite placeholder:text-anthracite-light/50 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 transition-colors"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm md:text-base font-medium text-anthracite mb-2"
                      >
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        defaultValue={formState.values?.email}
                        className="w-full rounded-lg border border-sand-dark bg-white px-4 py-3 text-anthracite placeholder:text-anthracite-light/50 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 transition-colors"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm md:text-base font-medium text-anthracite mb-2"
                    >
                      Telefon <span className="text-anthracite-light">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      defaultValue={formState.values?.phone}
                      className="w-full rounded-lg border border-sand-dark bg-white px-4 py-3 text-anthracite placeholder:text-anthracite-light/50 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 transition-colors"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm md:text-base font-medium text-anthracite mb-2"
                    >
                      Betreff *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      // Ein nachträglich geändertes defaultValue wirkt bei <select>
                      // nicht mehr – der key erzwingt das Neu-Mounten.
                      key={formState.values?.subject ?? ""}
                      defaultValue={formState.values?.subject ?? ""}
                      className="w-full rounded-lg border border-sand-dark bg-white px-4 py-3 text-anthracite focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 transition-colors"
                    >
                      <option value="">Bitte wählen…</option>
                      <option value="mitgliedschaft">
                        Frage zur Mitgliedschaft
                      </option>
                      <option value="beratung">Beratung / Waldfragen</option>
                      <option value="holz">Holzvermarktung</option>
                      <option value="allgemein">Allgemeine Anfrage</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm md:text-base font-medium text-anthracite mb-2"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      defaultValue={formState.values?.message}
                      className="w-full rounded-lg border border-sand-dark bg-white px-4 py-3 text-anthracite placeholder:text-anthracite-light/50 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 transition-colors resize-y"
                      placeholder="Ihre Nachricht an uns…"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-0.5 h-5 w-5 rounded border-sand-dark text-forest focus:ring-forest/20 shrink-0"
                    />
                    <label htmlFor="privacy" className="text-sm text-anthracite-light">
                      Ich habe die{" "}
                      <a
                        href="/datenschutz"
                        className="text-forest underline hover:text-forest-light"
                      >
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und bin mit der Verarbeitung meiner Daten
                      einverstanden. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={pending}
                    className="inline-flex items-center justify-center rounded-lg bg-forest px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-forest-light shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {pending ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Wird gesendet…
                      </>
                    ) : (
                      "Nachricht senden"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-anthracite mb-8">
                Kontaktdaten
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-anthracite">Adresse</h3>
                    <address className="mt-1 not-italic text-anthracite-light leading-relaxed">
                      {site.name}
                      <br />
                      {site.address.street}
                      <br />
                      {site.address.zip} {site.address.city}
                    </address>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-anthracite">E-Mail</h3>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1 text-forest hover:text-forest-light transition-colors"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>

                {/* Phone placeholder */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-anthracite">Telefon</h3>
                    <p className="mt-1 text-anthracite-light italic text-sm">
                      Wird noch ergänzt
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10">
                <h3 className="font-serif text-lg font-bold text-anthracite mb-4">
                  Anfahrt
                </h3>
                <div className="aspect-[4/3] rounded-2xl bg-sand border border-sand-dark overflow-hidden">
                  <iframe
                    title="Standort FBG Schlaubetal — Siedlung 18, 15848 Ragow-Merz"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=14.25%2C52.15%2C14.35%2C52.22&layer=mapnik&marker=52.185%2C14.3"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-sm text-anthracite-light">
                  {formatAddress()} · Region Oder-Spree
                </p>
              </div>

              <div className="mt-8 rounded-2xl bg-sand border border-sand-dark/50 p-6">
                <h3 className="font-serif text-lg font-bold text-anthracite mb-2">
                  Ansprechpartner der FBG
                </h3>
                <p className="text-sm text-anthracite-light leading-relaxed">
                  Ihre Anfrage richten Sie an die FBG Schlaubetal unter{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-forest hover:text-forest-light transition-colors"
                  >
                    {site.email}
                  </a>
                  . Die fachliche Umsetzung forstlicher Maßnahmen erfolgt in
                  Zusammenarbeit mit {site.partner.name} — unserem Dienstleister
                  im selben Haus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
