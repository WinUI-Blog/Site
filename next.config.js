const withNextra = require('nextra')({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
})
 
module.exports = withNextra({
  i18n: {
    locales: ['en-US', 'nl-NL', 'de-DE', 'fr-FR'],
    defaultLocale: 'en-US'
  }
})