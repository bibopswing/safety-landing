import { useTranslations } from "next-intl";

import HeroSec from "../../../components/foundation-co-create/HeroSec";
import ColoredRows from "../../../components/foundation-co-create/ColoredRows";
import Team from "../../../components/foundation-co-create/Team";
import Partners from "../../../components/main-page/Partners";
import GradientLines from "../../../components/common/GradientLines";
import Tokenomics from "../../../components/foundation-co-create/Tokenomics";

export default function FoundationCoCreate() { 

  const t = useTranslations("foundation-co-create.Partners");
  const t2 = useTranslations("GradientLines.foundation-co-create");

  return (
    <>
      <HeroSec />
      <ColoredRows />
      <Team />
      <Tokenomics />
      <Partners title={t("title")} text={t("text")} />
      <GradientLines
        text={t2("text")}
        title={t2("title")}
        buttons={t2.raw("button")}
      />
    </>
  );
}