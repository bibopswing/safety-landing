"use client";

import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import lottieData from "../../assets/images/overview/web3.json";
import Container from "../common/Container";
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
          <div className="w-full">
            <Lottie
              animationData={lottieData}
              loop={true}
              autoplay={true}
              style={{ width: "100%" }}
            />
          </div>
          <p className="grey text-center text-[0.9rem]">{t("text-3")}</p>
        </div>
      </FadeIn>
    </Container>
  );
}
