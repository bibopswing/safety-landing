import { useTranslations } from "next-intl";
import Image from "next/image";

import Container from "../common/Container";
import img from "../../assets/images/Placeholder.png"
import FadeIn from "../common/FadeIn";

export default function Dashboard() { 

  const t = useTranslations("overview.dashboard");

  return (
    <Container>
      <FadeIn isReverse={true}>
        <div className="flex flex-col gap-[1rem]">
          <h2 className="text-center">{t("title")}</h2>
          <div className="flex flex-col gap-[0.2rem]">
            <p className="text-center grey">{t("text-1")}</p>
            <p className="text-center">{t("text-2")}</p>
          </div>
        </div>
      </FadeIn>
      <FadeIn isReverse={true}>
        <div className="flex flex-col gap-[1rem] mt-[2.5rem]">
          <Image className="w-full" src={img} alt="placeholder" />
          <p className="grey text-center text-[0.9rem]">{t("text-3") }</p>
        </div>
      </FadeIn>
    </Container>
  );
}