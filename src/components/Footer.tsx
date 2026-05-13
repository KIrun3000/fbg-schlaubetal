import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-forest-dark text-white/80">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M17 20H7l5-16 5 16z" />
                  <path d="M12 20v-4" />
                  <path d="M9 12h6" />
                </svg>
              </div>
              <span className="font-serif text-base font-bold text-white">
                FBG Schlaubetal
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Die Forstbetriebsgemeinschaft für private Waldbesitzer im
              Schlaubetal und der Region Oder-Spree.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/ueber-uns" className="text-sm text-white/70 transition-colors hover:text-white">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="text-sm text-white/70 transition-colors hover:text-white">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/mitgliedschaft" className="text-sm text-white/70 transition-colors hover:text-white">
                  Mitglied werden
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-sm text-white/70 transition-colors hover:text-white">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Kontakt
            </h3>
            <address className="not-italic space-y-2.5 text-sm text-white/70">
              <p>Siedlung 18</p>
              <p>15848 Ragow-Merz</p>
              <p className="pt-1">
                <a
                  href="mailto:info@waldforum.de"
                  className="transition-colors hover:text-white"
                >
                  info@waldforum.de
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} FBG Schlaubetal. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="transition-colors hover:text-white/70">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-white/70">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
