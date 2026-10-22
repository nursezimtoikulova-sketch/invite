
import { APPS_SCRIPT_URL, WHATSAPP_NUMBER } from "../config";

export interface RsvpData {
  name: string;
  phone: string;
  attendance: string;
  guests: string;
  message: string;
}

export async function submitRsvp(data: RsvpData): Promise<void> {
  if (!APPS_SCRIPT_URL) {
    throw new Error("NO_ENDPOINT");
  }

  await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
}

export function whatsappRsvpLink(data: RsvpData): string {
  const lines = [
    "Саламатсызбы! «УЛУТТУК ДЕМ» иш-чарасы — катышуу анкетасы",
    "",
    `Аты-жөнүм: ${data.name}`,
    `Телефонум: ${data.phone}`,
    `Катышуум: ${data.attendance}`,
    `Киши саны: ${data.guests}`,
  ];

  if (data.message.trim()) {
    lines.push(`Кошумча: ${data.message}`);
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    lines.join("\n")
  )}`;
}
