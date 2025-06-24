
import { useTranslations } from "next-intl";
import Container from "../common/Container";
import Image from "next/image";
import img from "../../assets/images/Placeholder.png";
import FadeIn from "../common/FadeIn";

export default function Dashboard_2() {

  const t = useTranslations("Dashboard_2");

  return (
    <Container>
      <FadeIn  start="top 80%" delay={0.3} >
        <div className="flex flex-col items-center gap-[1rem]">
          <p className="text-[1.1rem] uppercase blue">{t("colored-text")}</p>
          <h2 className="lg:max-w-[35%] text-center">{t("title")}</h2>
          <div>
            <p className="grey">{t("text-1")}</p>
            <p className="font-[700] text-center">{t("text-2")}</p>
          </div>
        </div>
      </FadeIn>
      <FadeIn start="top 80%" >
        <Image className="w-full mt-[1rem]" src={img} alt="dashboard" />
      </FadeIn>
    </Container>
  );
}