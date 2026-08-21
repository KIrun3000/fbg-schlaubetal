import type { NextConfig } from "next";

// Bewusst ohne images.remotePatterns: Alle Bilder werden lokal ausgeliefert.
// Damit ist technisch ausgeschlossen, dass Bilder von Dritt-CDNs geladen
// werden — so, wie es die Datenschutzerklärung zusichert.
const nextConfig: NextConfig = {};

export default nextConfig;
