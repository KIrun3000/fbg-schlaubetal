"use server";

import nodemailer from "nodemailer";
import { site } from "@/lib/site";

const subjectLabels: Record<string, string> = {
  mitgliedschaft: "Frage zur Mitgliedschaft",
  beratung: "Beratung / Waldfragen",
  holz: "Holzvermarktung",
  allgemein: "Allgemeine Anfrage",
  sonstiges: "Sonstiges",
};

export type ContactFormState = {
  status: "idle" | "sent" | "error";
  message?: string;
  values?: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };
};

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  // Honeypot: Bots füllen versteckte Felder aus, Menschen sehen sie nicht.
  // Wir tun so, als sei alles gut, statt dem Bot Feedback zu geben.
  if (String(formData.get("website") ?? "").length > 0) {
    return { status: "sent" };
  }

  const fail = (message: string): ContactFormState => ({
    status: "error",
    message,
    values,
  });

  if (!values.name || !values.email || !values.subject || !values.message) {
    return fail("Bitte füllen Sie alle Pflichtfelder aus.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return fail("Bitte geben Sie eine gültige E-Mail-Adresse an.");
  }

  if (formData.get("privacy") !== "on") {
    return fail("Bitte bestätigen Sie die Datenschutzerklärung.");
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!user || !pass) {
    console.error("Kontaktformular: SMTP_USER oder SMTP_PASSWORD fehlt.");
    return fail(
      `Das Formular ist derzeit nicht verfügbar. Bitte schreiben Sie uns direkt an ${site.email}.`,
    );
  }

  const subjectLabel = subjectLabels[values.subject] ?? values.subject;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.ionos.de",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      // IONOS erlaubt als Absender nur das authentifizierte Postfach.
      // Die Adresse des Absenders steckt deshalb in Reply-To.
      from: `"Kontaktformular Website" <${user}>`,
      to: process.env.CONTACT_TO ?? site.email,
      replyTo: `"${values.name}" <${values.email}>`,
      subject: `Kontaktformular: ${subjectLabel}`,
      text: [
        `Name:    ${values.name}`,
        `E-Mail:  ${values.email}`,
        `Telefon: ${values.phone || "—"}`,
        `Betreff: ${subjectLabel}`,
        "",
        values.message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Kontaktformular: Versand fehlgeschlagen.", error);
    return fail(
      `Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder schreiben Sie uns an ${site.email}.`,
    );
  }

  return { status: "sent" };
}
