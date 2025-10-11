import { OWNER_WHATSAPP_NUMBER } from "./config";

export const sendWhatsappMessage = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
};
