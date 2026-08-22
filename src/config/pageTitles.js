// Central TR/EN <title> map for every routed page. Each page reads its
// own entry via the shared language context so document.title stays in
// sync with route + language without duplicating the switch logic.
export const PAGE_TITLES = {
  home: {
    tr: "Uluslararası Fuar Temsilciliği | VIAFA",
    en: "International Exhibition Representation | VIAFA",
  },
  exhibitions: {
    tr: "Uluslararası Fuarlar | VIAFA",
    en: "International Exhibitions | VIAFA",
  },
  industries: {
    tr: "Hizmet Verdiğimiz Sektörler | VIAFA",
    en: "Industries We Serve | VIAFA",
  },
  about: {
    tr: "VIAFA Hakkında",
    en: "About VIAFA",
  },
  services: {
    tr: "Uluslararası Fuar Hizmetleri | VIAFA",
    en: "International Exhibition Services | VIAFA",
  },
  viamate: {
    tr: "VIAMATE | VIAFA",
    en: "VIAMATE | VIAFA",
  },
  viamatePrivacy: {
    tr: "VIAMATE Gizlilik Politikası | VIAFA",
    en: "VIAMATE Privacy Policy | VIAFA",
  },
  viawa: {
    tr: "VIAWA | VIAFA",
    en: "VIAWA | VIAFA",
  },
  contact: {
    tr: "İletişim | VIAFA",
    en: "Contact | VIAFA",
  },
};
