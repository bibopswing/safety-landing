"use client";
import Container from "./Container";
import { useTranslations } from "next-intl";
import FadeIn from "../common/FadeIn";

export default function FirstSec({
  data,
  translate,
  isFirstTextDecorate = false,
}) {
  const t = useTranslations(translate);

  return (
    <Container className="flex flex-col gap-6 lg:flex-row items-center lg:justify-between">
      <FadeIn start="top bottom" className=" w-full lg:w-[45%]">
        <h1 className="flex flex-col w-full">
          <span className={isFirstTextDecorate ? "gradient-text" : ""}>
            {t(data.title1)}
          </span>
          <span className={!isFirstTextDecorate ? "gradient-text" : ""}>
            {t(data.title2)}
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.4} start="top bottom" className="flex flex-col gap-8 w-full lg:w-[43%]">
        <p
          className={
            isFirstTextDecorate ? "text-bold" : "text-[var(--tertiary-1)]"
          }
        >
          {t(data.text1)}
        </p>

        <p
          className={
            !isFirstTextDecorate ? "text-bold" : "text-[var(--tertiary-1)]"
          }
        >
          {t(data.text2)}
        </p>
      </FadeIn>
    </Container>
  );
}
