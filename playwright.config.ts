import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "./tests/results",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:3100",
  },
  // Der Testserver wird hier gestartet, damit die Tests reproduzierbar laufen
  // und nicht von einem zufällig offenen Dev-Server abhängen.
  //
  // Entscheidend sind die leeren SMTP-Variablen: Ohne sie zieht der Server die
  // echten Zugangsdaten aus .env.local und das Kontaktformular verschickt bei
  // jedem Testlauf echte E-Mails an die FBG. Die Tests erwarten ohnehin den
  // Zustand "Versand nicht konfiguriert" — leere Werte stellen genau den her.
  // Port 3100 statt 3000: Auf Entwicklungsrechnern läuft auf 3000 häufig ein
  // anderes Projekt. Die Tests würden dann stillschweigend die falsche
  // Anwendung prüfen.
  //
  // Getestet wird gegen einen Produktionsbuild statt gegen den Dev-Server.
  // Der Dev-Server kompiliert jede Route beim ersten Aufruf; wenn drei
  // Projekte parallel testen, führt das zu sporadisch fehlschlagenden
  // Screenshots und Bild-404ern, die nichts mit der Seite zu tun haben.
  webServer: {
    command: "npm run build && npm run start -- --port 3100",
    url: "http://localhost:3100",
    reuseExistingServer: false,
    timeout: 180000,
    env: {
      SMTP_USER: "",
      SMTP_PASSWORD: "",
    },
  },
  projects: [
    {
      name: "Desktop",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
    {
      name: "Tablet",
      use: { ...devices["iPad Pro 11"] },
    },
    {
      name: "Mobile",
      use: { ...devices["iPhone 14"] },
    },
  ],
});
