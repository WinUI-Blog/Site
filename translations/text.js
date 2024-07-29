import { _config } from "../_config";

/**
 * @typedef {"en-US"} DefaultLocale
 * @typedef {DefaultLocale | "nl-NL" | "de-DE" | "fr-FR"} Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
  "en-US": "English",
  "nl-NL": "Nederlands",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const titleMap = {
  "en-US": "Learn and master WinUI 3.",
  "nl-NL": "Leer en master WinUI 3",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
  "en-US": "WinUI Blog helps you learn and master WinUI 3 with a modern docs with samples and templates.",
  "nl-NL": "WinUI Blog helpt you met het leeren and mastere van het programmeer taal WinUI 3 met een moderne docs met samples and templates.",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
  "en-US": "Question? Give us feedback →",
  "nl-NL": "Vraag? Geef ons feedback →",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
  "en-US": "Edit this page on GitHub →",
  "nl-NL": "Bewerk deze pagina op github →",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

//@type {Readonly<Record<Locale, string>>} */
//export const Banner = {
//"en-US": "🐛 WinUI Blog is still in BETA you may expect bugs! Read more →",
//"nl-NL": "",
//"de-DE": "Deutsch",
//"fr-FR": "Français",
//};

/** @type {Readonly<Record<Locale, { text: string; copyright?: string }>>} */
export const footerTextMap = {
  "en-US": {
    text: "Powered by",
    copyright: `Copyright © ${new Date().getFullYear()} ${
      _config.author.name
    } (owned by Kilian Balaguer).`,
  },
  "nl-NL": {
    text: "Powered by",
    copyright: `Copyright © ${new Date().getFullYear()} ${
      _config.author.name
    } (eigendom van Kilian Balaguer).`,
  },
  "de-DE": {
    text: "Powered by",
    copyright: `Copyright © ${new Date().getFullYear()} ${
      _config.author.name
    } (im Besitz von Kilian Balaguer).`,
  },
  "fr-FR": {
    text: "Powered by",
    copyright: `Copyright © ${new Date().getFullYear()} ${
      _config.author.name
    } (propriété de Kilian Balaguer).`,
  },
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
  "en-US": "On This Page",
  "nl-NL": "Op deze pagina",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
  "en-US": "Search documentation...",
  "nl-NL": "Zoek documentatie...",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
  "en-US": "Last updated on",
  "nl-NL": "laats geupdate op",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};
