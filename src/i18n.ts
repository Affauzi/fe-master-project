import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import id from "./translation/id/translation.json";
import en from "./translation/en/translation.json";

i18n
	.use(initReactI18next) // bind react-i18next to the instance
	.init({
		fallbackLng: "en",
		debug: false,

		interpolation: {
			escapeValue: false, // not needed for react!!
		},
		resources: {
			id: {
				translation: id,
			},
			en: {
				translation: en,
			},
		},

		// react i18next special options (optional)
		// override if needed - omit if ok with defaults
		/*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
    */
	});

export default i18n;
