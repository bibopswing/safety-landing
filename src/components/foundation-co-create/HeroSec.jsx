"use client";

import Container from "../common/Container";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import Lottie from "lottie-react";
import lottieData from "../../assets/images/foundation-co-create/lottie.json";
import style from "../../assets/styles/modules/foundation-co-create/herosec.module.scss";

export default function HeroSec() {
  const t = useTranslations("foundation-co-create.heroSec");
  const title = t.raw("title");
  const text = t.raw("text");
  const lottieRef = useRef(null);

  const handleComplete = () => {
    lottieRef.current?.playSegments([330, 420], true);
  };

  return (
    <Container>
      <div className="flex lg:flex-row flex-col gap-[1.714rem] items-center justify-between">
        <h1 className={`${style.title}`}>
          <span className={style["gradient-text"]}>{title[0]}</span>
          <br />
          <span>{title[1]}</span>
        </h1>
        <div className="flex flex-col gap-[1rem] lg:w-[50%] w-full">
          {text.map((item, index) => (
            <p
              key={index}
              className={`${index === 1 ? "grey" : ""} w-full lg:max-w-[84%]`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full h-auto mt-[5rem] inline-flex justify-center">
        <Lottie
          lottieRef={lottieRef}
          animationData={lottieData}
          loop={false}
          autoplay={true}
          className="w-full sm:w-[85%] h-auto"
          onComplete={handleComplete}
        />
      </div>
    </Container>
  );
}
