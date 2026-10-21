import { APPS_SCRIPT_URL, WHATSAPP_NUMBER } from "../config";

export interface RsvpData {
  name: string;
  phone: string;
  attendance: string;
  guests: string;
  message: string;
}

/* Google Apps Script (Web App) — doPost(e) менен жөнөтүү.
   'text/plain' body CORS-preflight талап кылбайт, redirect өзү ээрчит. */
export async function submitRsvp(data: RsvpData): Promise<void> {
  if (!APPS_SCRIPT_URL) {
    throw new Error("NO_ENDPOINT");
  }
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(data),
  });
  const text = await res.text();
  let json: { success?: boolean; message?: string };
  try {
    json = JSON.parse(text);
  } catch {
    json = { success: res.ok };
  }
  if (!json.success) {
    throw new Error(json.message || "SERVER_ERROR");
  }
}

/* Эгер Apps Script даяр болбосо — WhatsApp аркылуу күбөлүк жөнөтүү */
export function whatsappRsvpLink(data: RsvpData): string {
  const lines = [
    "Саламатсызбы! «УЛУТТУК ДЕМ» иш-чарасы — катышуу анкетасы",
    "",
    `Аты-жөнүм: ${data.name}`,
    `Телефонум: ${data.phone}`,
    `Катышуум: ${data.attendance}`,
    `Киши саны: ${data.guests}`,
  ];
  if (data.message.trim()) lines.push(`Кошумча: ${data.message}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
