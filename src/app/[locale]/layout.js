import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TranslateWidget from "../../components/TranslateWidget";
import { Archivo } from "next/font/google";

import { ThemeProvider } from "../../context/ThemeContext";
import "../globals.css";
import "../global.scss";

const archivo = Archivo({
  subsets: ['latin', 'vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap'
})

export default async function LocaleLayout({ children, params }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider>
      <html lang={locale}>
        <body className={archivo.className}>
          <ThemeProvider>
            <Header />
            
            {children}
           <Footer/>
          </ThemeProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
