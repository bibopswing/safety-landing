// import { getRequestConfig } from "next-intl/server";
// import { hasLocale } from "next-intl";
// import { routing } from "./routing";

// export default getRequestConfig(async ({ requestLocale }) => {
//   // Typically corresponds to the `[locale]` segment
//   const requested = await requestLocale;
//   const locale = hasLocale(routing.locales, requested)
//     ? requested
//     : routing.defaultLocale;

//   return {
//     locale,
//     messages: (await import(`../../messages/${locale}.json`)).default,
//   };
// });

// src/i18n/request.ts
// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return {
      locale,
      messages
    };
  } catch (error) {
    const fallbackMessages = (await import(`../../messages/en.json`)).default;
    return {
      locale,
      messages: fallbackMessages
    };
  }
});