"use client";

import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import Container from "../common/Container";
import FadeIn from "../common/FadeIn";
import { newValue } from "../../content/main-page/new-value";
import { useRef } from "react";

export default function NewValue() {
  const t = useTranslations("NewValue");
  const data = newValue;
  const lottieRef1 = useRef(null);
  const lottieRef2 = useRef(null);
  const lottieRef3 = useRef(null);

  const handleComplete = () => {
    lottieRef1.current?.playSegments([60, 180], true);
    lottieRef2.current?.playSegments([60, 180], true);
    lottieRef3.current?.playSegments([60, 180], true);
  };

  const getLottieRef = (index) => {
    switch (index) {
      case 0:
        return lottieRef1;
      case 1:
        return lottieRef2;
      case 2:
        return lottieRef3;
      default:
        return lottieRef1;
    }
  };

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
                <Lottie 
                 lottieRef={getLottieRef(key)}
                 animationData={item.img} 
                 loop={false} 
                 autoplay={true} 
                 onComplete={handleComplete}
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}
