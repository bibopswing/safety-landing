// locale.js
import { getTranslations } from "next-intl";

export async function loadLocale(locale) {
  return await getTranslations(locale);
}
