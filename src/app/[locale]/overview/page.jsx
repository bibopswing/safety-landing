import { useTranslations } from "next-intl";

import HeroSec from "../../../components/overview/HeroSec";
import ColoredText from "../../../components/overview/ColoredText";
import Dashboard from "../../../components/overview/Dashboard";
import KeyFunctions from "../../../components/overview/KeyFunctions";
import TokenUtility from "../../../components/overview/TokenUtility";
import EarningOpportunities from "../../../components/overview/EarningOpportunities";
import Partners from "../../../components/overview/Partners";
import Roadmap from "../../../components/overview/Roadmap";
import GradientLines from "../../../components/common/GradientLines";

export default function Overview() { 

  const t = useTranslations("GradientLines.overview");

  return (
    <>
      <HeroSec />
      <ColoredText />
      <Dashboard />
      <KeyFunctions />
      <TokenUtility />
      <EarningOpportunities />
      <Partners />
      <Roadmap />
      <GradientLines
        text={t("text")}
        title={t("title")}
        buttons={t.raw("button")}
      />
    </>
  )
}