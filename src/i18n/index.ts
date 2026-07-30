import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from './locales/en/common.json'
import enHome from './locales/en/home.json'
import enHomeHowItWorks from './locales/en/homeHowItWorks.json'
import enHomeWhyChooseUs from './locales/en/homeWhyChooseUs.json'
import enHomeOverview from './locales/en/homeOverview.json'
import enHomeFeatures from './locales/en/homeFeatures.json'
import enHomeScreenshots from './locales/en/homeScreenshots.json'
import enHomeTestimonials from './locales/en/homeTestimonials.json'
import enHomeFAQ from './locales/en/homeFAQ.json'
import enHomeCTA from './locales/en/homeCTA.json'
import enHomeContact from './locales/en/homeContact.json'
import enFeaturesPage from './locales/en/featuresPage.json'
import enHowItWorksPage from './locales/en/howItWorksPage.json'
import enUseCasesPage from './locales/en/useCasesPage.json'
import enAboutPage from './locales/en/aboutPage.json'
import enDocsPage from './locales/en/docsPage.json'
import enContactPage from './locales/en/contactPage.json'
import enPrivacyPage from './locales/en/privacyPage.json'
import enTermsPage from './locales/en/termsPage.json'
import enScreenshotMockups from './locales/en/screenshotMockups.json'

import arCommon from './locales/ar/common.json'
import arHome from './locales/ar/home.json'
import arHomeHowItWorks from './locales/ar/homeHowItWorks.json'
import arHomeWhyChooseUs from './locales/ar/homeWhyChooseUs.json'
import arHomeOverview from './locales/ar/homeOverview.json'
import arHomeFeatures from './locales/ar/homeFeatures.json'
import arHomeScreenshots from './locales/ar/homeScreenshots.json'
import arHomeTestimonials from './locales/ar/homeTestimonials.json'
import arHomeFAQ from './locales/ar/homeFAQ.json'
import arHomeCTA from './locales/ar/homeCTA.json'
import arHomeContact from './locales/ar/homeContact.json'
import arFeaturesPage from './locales/ar/featuresPage.json'
import arHowItWorksPage from './locales/ar/howItWorksPage.json'
import arUseCasesPage from './locales/ar/useCasesPage.json'
import arAboutPage from './locales/ar/aboutPage.json'
import arDocsPage from './locales/ar/docsPage.json'
import arContactPage from './locales/ar/contactPage.json'
import arPrivacyPage from './locales/ar/privacyPage.json'
import arTermsPage from './locales/ar/termsPage.json'
import arScreenshotMockups from './locales/ar/screenshotMockups.json'

export const RTL_LANGUAGES = ['ar']

const STORAGE_KEY = 'voicebridge-lang'

function getInitialLanguage(): string {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'ar') return saved
  return 'en'
}

export function applyDocumentDirection(lang: string) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = lang
  document.documentElement.dir = RTL_LANGUAGES.includes(lang) ? 'rtl' : 'ltr'
}

// Each page/section owns its own locale file pair (en/xxx.json + ar/xxx.json)
// so independent translation work never touches the same file.
const en = {
  ...enCommon,
  home: enHome,
  homeHowItWorks: enHomeHowItWorks,
  homeWhyChooseUs: enHomeWhyChooseUs,
  homeOverview: enHomeOverview,
  homeFeatures: enHomeFeatures,
  homeScreenshots: enHomeScreenshots,
  homeTestimonials: enHomeTestimonials,
  homeFAQ: enHomeFAQ,
  homeCTA: enHomeCTA,
  homeContact: enHomeContact,
  featuresPage: enFeaturesPage,
  howItWorksPage: enHowItWorksPage,
  useCasesPage: enUseCasesPage,
  aboutPage: enAboutPage,
  docsPage: enDocsPage,
  contactPage: enContactPage,
  privacyPage: enPrivacyPage,
  termsPage: enTermsPage,
  screenshotMockups: enScreenshotMockups,
}

const ar = {
  ...arCommon,
  home: arHome,
  homeHowItWorks: arHomeHowItWorks,
  homeWhyChooseUs: arHomeWhyChooseUs,
  homeOverview: arHomeOverview,
  homeFeatures: arHomeFeatures,
  homeScreenshots: arHomeScreenshots,
  homeTestimonials: arHomeTestimonials,
  homeFAQ: arHomeFAQ,
  homeCTA: arHomeCTA,
  homeContact: arHomeContact,
  featuresPage: arFeaturesPage,
  howItWorksPage: arHowItWorksPage,
  useCasesPage: arUseCasesPage,
  aboutPage: arAboutPage,
  docsPage: arDocsPage,
  contactPage: arContactPage,
  privacyPage: arPrivacyPage,
  termsPage: arTermsPage,
  screenshotMockups: arScreenshotMockups,
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lang) => {
  window.localStorage.setItem(STORAGE_KEY, lang)
  applyDocumentDirection(lang)
})

applyDocumentDirection(i18n.language)

export default i18n
