
const i18n = {
  defaultLocale: 'en',
  locale: 'en',
  locales: [
    {code: 'tr', code2: 'tr', iso: 'tr_TR', file: 'tr/tr_TR.js', name: 'Türkçe'},
    {code: 'en', code2: 'us', iso: 'en_US', file: 'en/en_US.js', name: 'English'},
  ],
  lazy: true,
  langDir: 'lang/',
  vuex: {
    asyncLocale: true
  },
  detectBrowserLanguage: false,
  intervalPlural: true,
  parsePages: false
}

export default i18n
