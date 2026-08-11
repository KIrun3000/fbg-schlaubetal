import Image from "next/image";
import Link from "next/link";
import { footerNavigation, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest-dark text-white/80">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: About */}
          <div>
            <Image
              src="/images/logo/logo-fbg-invers.svg"
              alt={site.name}
              width={337}
              height={96}
              className="h-14 w-auto mb-5"
            />
            <div className="h-px w-10 bg-earth mb-5" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-white/70">
              Wald verstehen. Zukunft gestalten. Gemeinsam handeln.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Die Forstbetriebsgemeinschaft für private Waldbesitzer in ganz
              Brandenburg.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Kontakt
            </h3>
            <address className="not-italic space-y-2.5 text-sm text-white/70">
              <p>{site.address.street}</p>
              <p>
                {site.address.zip} {site.address.city}
              </p>
              <p className="pt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </p>
            </address>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mt-8 mb-4">
              Partner und Verbände
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a
                  href={site.partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Waldform GmbH
                </a>
              </li>
              <li>
                <a
                  href={site.associations.waldbesitzerverband.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {site.associations.waldbesitzerverband.name}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/satzung" className="transition-colors hover:text-white/70">
              Satzung
            </Link>
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
