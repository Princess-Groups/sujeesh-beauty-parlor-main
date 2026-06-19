export const SITE = {
  name: "Sujess Beauty Salon & Academy",
  phone: "9842554248",
  phones: ["9842554248", "9942947289", "9842055611"],
  whatsapp: "919842554248",
  location: "Mettupalayam, Karamadai & Velankanni",
};

export const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
