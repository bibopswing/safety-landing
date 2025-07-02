"use client";

import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import Container from "../common/Container";
import FadeIn from "../common/FadeIn";
import { newValue } from "../../content/main-page/new-value";

export default function NewValue() {
  const t = useTranslations("NewValue");
  const data = newValue;

  return (
    <Container>
      <FadeIn>
        <div className="flex flex-col items-center">
          <h2 className="text-center">
            {t(data.title_1)}
            <br />
            {t(data.title_2)}
          </h2>
          <p className="grey lg:text-left text-center">{t(data.text_1)}</p>
          <p className="font-700">{t(data.text_2)}</p>
        </div>
      </FadeIn>

      <div className="flex flex-col gap-[2.5rem] mt-[3.5rem]">
        {data.list.map((item, key) => (
          <FadeIn key={key}>
            <div className="flex gap-4 flex-col lg:flex-row justify-between">
              <div>
                <h3>{t(item.title)}</h3>
                <p className="grey">{t(item.text)}</p>
              </div>
              <div className="lg:w-[50%]">
                <Lottie animationData={item.img} loop={true} autoplay={true} />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}
