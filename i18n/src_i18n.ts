import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import * as Localization from "expo-localization"

export const locales = {
  de: {
    projectScreen: require("../locales/de/projectScreen.json"),
    navigation: require("../locales/de/navigation.json"),
    notifications: require("../locales/de/notifications.json"),
    dataPointScreen: require("../locales/de/dataPointScreen.json"),
    privacyScreen: require("../locales/de/privacyScreen.json"),
  },
  en: {
    projectScreen: require("../locales/en/projectScreen.json"),
    navigation: require("../locales/en/navigation.json"),
    notifications: require("../locales/en/notifications.json"),
    dataPointScreen: require("../locales/en/dataPointScreen.json"),
    privacyScreen: require("../locales/en/privacyScreen.json"),
  },
}

export const systemLanguage = Localization.locale.split("-")[0] // en-US -> en

export function changeLanguage(nextLanguage: string | null): void {
  if (nextLanguage && i18n.language !== nextLanguage) {
    i18n.changeLanguage(nextLanguage)
  }
}

i18n.use(initReactI18next).init({
  returnEmptyString: true,
  fallbackLng: "en",
  lng: systemLanguage,
  resources: locales,
  keySeparator: false,
  interpolation: {
    escapeValue: false, // react already saves from xss
  },
})

export default i18n
