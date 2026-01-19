export type Lang = "sv" | "en";

export const t = {
  sv: {
    navServices: "Tjänster",
    navPrices: "Priser",
    navAbout: "Om oss",
    navContact: "Kontakt",
    bookNow: "Boka nu",

    servicesLabel: "Våra tjänster",
    servicesTitle: "Vad vi erbjuder",
    servicesDesc: "Vi erbjuder ett komplett utbud av städ- och flyttjänster i hela Blekinge",

    alsoTitle: "Vi erbjuder även",
    alsoDesc: "Kompletterande tjänster för hem, fastighet och utemiljö med samma höga kvalitet.",
  },
  en: {
    navServices: "Services",
    navPrices: "Prices",
    navAbout: "About",
    navContact: "Contact",
    bookNow: "Book now",

    servicesLabel: "Our services",
    servicesTitle: "What we offer",
    servicesDesc: "We offer a complete range of cleaning and moving services across Blekinge",

    alsoTitle: "We also offer",
    alsoDesc: "Additional services for home, property and outdoor areas with the same high quality.",
  },
} as const;
