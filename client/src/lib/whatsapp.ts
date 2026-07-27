export const WHATSAPP_NUMBER = "355695767445";

export const SERVICE_CONTACT_NUMBERS = {
  contact1: "355684023172",
  contact2: "355683259685",
} as const;

export function buildWhatsAppLink(
  message: string,
  number: string = WHATSAPP_NUMBER,
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
