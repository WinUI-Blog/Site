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
  "en-US": "Simple package manager for Zsh.",
  "nl-NL": "Nederlands",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
  "en-US": "Zshmgr is a simple package manager for Zsh. It allows users to easily install, uninstall, update, and list packages. The tool is designed to work seamlessly with GitHub repositories, making it easy to manage your Zsh scripts and tools.",
  "nl-NL": "Nederlands",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
  "en-US": "Question? Give us feedback →",
  "nl-NL": "Nederlands",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
  "en-US": "Edit this page on GitHub →",
  "nl-NL": "Nederlands",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

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
  "nl-NL": "Nederlands",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
  "en-US": "Search documentation...",
  "nl-NL": "Nederlands",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
  "en-US": "Last updated on",
  "nl-NL": "Nederlands",
  "de-DE": "Deutsch",
  "fr-FR": "Français",
};
