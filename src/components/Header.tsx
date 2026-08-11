"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { navigation, site } from "@/lib/site";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-warmwhite/95 backdrop-blur-md shadow-sm border-b border-sand-dark" : "bg-warmwhite/80 backdrop-blur-sm border-b border-transparent"}`}>
      <nav className="mx-auto max-w-6xl px-6 lg:px-8" aria-label="Hauptnavigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Wortbildmarke */}
          <Link
            href="/"
            className="group transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/logo/logo-fbg.svg"
              alt={`${site.name}: ${site.tagline}`}
              width={337}
              height={96}
              priority
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-anthracite rounded-lg transition-colors hover:bg-sand hover:text-forest"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="ml-4 inline-flex items-center rounded-lg bg-forest px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forest-light"
            >
              Kontakt aufnehmen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-3 text-anthracite hover:bg-sand transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Hauptmenü öffnen"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 pt-2">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-anthracite transition-colors hover:bg-sand hover:text-forest"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-forest px-5 py-3 text-base font-medium text-white transition-colors hover:bg-forest-light"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
