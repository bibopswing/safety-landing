import { useTranslations } from "next-intl";

import Container from "../common/Container";
import FadeIn from "../common/FadeIn";

export default function ColoredText() { 

  const t = useTranslations("overview.coloredText");

  return (
    <Container>
      <FadeIn isReverse={true}>
        <div className="flex flex-col items-center gap-[1rem]">
          <p className="text-tertiary-1 uppercase">{t("text-1")}</p>
          <h2 className="gradient-text text-center lg:w-[50%] w-full">{t("title")}</h2>
          <div className="flex flex-col items-center">
            <p className="text-tertiary-1 lg:w-[60%] w-full text-center ">
              {t("text-2")}
            </p>
            <p className="text-tertiary-1 text-center font-[700]">{t("text-3")}</p>
          </div>
        </div>
      </FadeIn>
    </Container>
  );

}