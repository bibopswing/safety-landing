import HeroSec from "../../components/main-page/HeroSec";
import Dashboard from "../../components/main-page/Dashboard";
import NewValue from "../../components/main-page/NewValue";
import Tabs from "../../components/main-page/Tabs";
import Dashboard_2 from "../../components/main-page/Dashboard_2";
import Foundation from "../../components/main-page/Foundation";
import KeyMetrics from "../../components/main-page/KeyMetrics";
import Partners from "../../components/main-page/Partners";
import Faq from "../../components/common/Faq";
import GradientLines from "../../components/common/GradientLines";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("GradientLines.mainPage");
  const t2 = useTranslations("Partners");

  return (
    <>
      <HeroSec />
      <Dashboard />
      <NewValue />
      <Tabs />
      <Dashboard_2 />
      <Foundation />
      <KeyMetrics />
      <Partners
        coloredText={t2("colored-text")}
        title={t2("title")}
        text={t2("text")}
      />
      <Faq />
      <GradientLines
        text={t("text")}
        title={t("title")}
        buttons={t.raw("button")}
      />
    </>
  );
}
