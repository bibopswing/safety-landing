// import { defineRouting } from "next-intl/routing";

// export const routing = defineRouting({
//   // A list of all locales that are supported
//   locales: ["en", "kr"],

//   // Used when no locale matches
//   defaultLocale: "en",
// });


import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "kr", "ja", "zh", "ru", "fr", "de", "es", "pt"],
  defaultLocale: "en",
});