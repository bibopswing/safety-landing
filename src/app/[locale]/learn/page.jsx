import FirstSec from "../../../components/common/FirstSec";
import Faq from "../../../components/common/Faq";
import { learn } from "../../../content/learn/learn";
import SecondSec from "../../../components/learn/SecondSec";
import ThirdSec from "../../../components/learn/ThirdSec";
import GradientLines from "../../../components/common/GradientLines";
import { useTranslations } from "next-intl";

export default function Learn() {
  const t = useTranslations("GradientLines.learn");
  return (
    <>
      <FirstSec data={learn.firsSec} translate={"Learn"} />
      <SecondSec />
      <ThirdSec />
      <Faq />
      <GradientLines
        text={t("text")}
        title={t("title")}
        buttons={t.raw("button")}
      />
    </>
  );
}
