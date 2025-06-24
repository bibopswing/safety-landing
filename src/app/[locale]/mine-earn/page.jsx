import HeroSec from "../../../components/mine-earn/HeroSec";
import SecondSec from "../../../components/mine-earn/SecondSec";
import ThirdSec from "../../../components/mine-earn/ThirdSec";
import FourthSec from "../../../components/mine-earn/FourthSec";
import GradientLines from "../../../components/common/GradientLines";
import { useTranslations } from "next-intl";
export default function MineEarn() {
  const t = useTranslations("GradientLines.mine&earn");
  return (
    <>
      <HeroSec />
      <SecondSec />
      <ThirdSec />
      <FourthSec />
      <GradientLines title={t("title")} buttons={t.raw("button")} />
    </>
  );
}
