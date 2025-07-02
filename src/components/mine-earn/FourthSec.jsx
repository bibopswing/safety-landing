"use client";

import Image from "next/image";
import Lottie from "lottie-react";
import lottieData1 from "../../assets/images/Log in.json";
import lottieData2 from "../../assets/images/Ref.json";
import lottieData3 from "../../assets/images/Confirm.json";
import arrow from "../../assets/images/arrowOrange.svg";
import Container from "../common/Container";
import { useTranslations } from "next-intl";
import { mine } from "../../content/mine-earn/mine";
import React from "react";
import FadeIn from "../common/FadeIn";
import Button from "../common/Button";

export default function FourthSec() {
  const t = useTranslations("mine-earn");
  const list = t.raw("fourthList");

  const getLottieData = (index) => {
    switch (index) {
      case 0:
        return lottieData1;
      case 1:
        return lottieData2;
      case 2:
        return lottieData3;
      default:
        return lottieData1;
    }
  };

  return (
    <FadeIn isReverse={true} end="bottom top">
      <Container className="flex items-center flex-col gap-10">
        <h2>{t(mine.fourthTitle)}</h2>

        <div className="mt-10 flex items-stretch lg:items-baseline lg:flex-row flex-col gap-4">
          {list.map((item, index) => (
            <React.Fragment key={index}>
              <FadeIn
                isReverse={true}
                end="bottom top"
                delay={index * 0.15}
                className="lg:w-1/3"
              >
                <div className="rounded-xl overflow-hidden">
                  <Lottie
                    animationData={getLottieData(index)}
                    loop={true}
                    autoplay={true}
                    style={{ width: "100%" }}
                  />
                </div>

                <div className="mt-8">
                  <h3 className="lg:w-[70%]">{item.title}</h3>

                  <p className="mt-3 lg:w-[85%]">{item.text}</p>
                </div>
              </FadeIn>

              {index !== list.length - 1 && (
                <FadeIn
                  isReverse={true}
                  end="bottom top"
                  delay={index * 0.1}
                  className="border-[1.5px] self-center lg:self-center lg:mt-[-100px]  flex justify-center items-center w-[27px] h-[27px] rounded-md  border-[var(--yellow-darker)]"
                >
                  <Image
                    className="rotate-90 lg:rotate-0"
                    src={arrow}
                    alt="Arrow"
                  />
                </FadeIn>
              )}
            </React.Fragment>
          ))}
        </div>

        <Button
          href="https://app.sftyhub.com/"
          className={"w-full lg:w-auto"}
          text={t(mine.fourthButton)}
          arrow={true}
        />
      </Container>
    </FadeIn>
  );
}
