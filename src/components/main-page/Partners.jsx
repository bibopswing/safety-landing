"use client";

import { useTranslations } from "next-intl";

import Container from "../common/Container";
import { partners } from "../../content/main-page/partners";
import Button from "../common/Button";
import Image from "next/image";
import FadeIn from "../common/FadeIn";

export default function Partners({ coloredText, title, text }) {
  const t = useTranslations("Partners");

  return (
    <Container>
      <div className="flex lg:items-center   flex-col lg:flex-row  justify-between">
        <FadeIn className="flex flex-col items-start text-center lg:text-left gap-[1rem]  lg:max-w-[40%]">
          {coloredText && (
            <p className="uppercase text-[1.2rem] text-tertiary-1 w-full lg:w-auto">
              {t("colored-text")}
            </p>
          )}
          <h2 className="w-full lg:max-w-[90%]">{title}</h2>
          <p className="grey w-full lg:max-w-[86%]">{text}</p>
        </FadeIn>
        <div className="lg:w-[40%] mt-[2.286rem] lg:mt-0  grid grid-cols-2 gap-[1.5rem]">
          {partners.map((item, key) => (
            <FadeIn
              className={` flex justify-center items-center  ${
                key === partners.length - 1 ? "col-span-2   lg:col-span-1" : ""
              }`}
              key={key}
            >
              <Image src={item} alt="partner" />
            </FadeIn>
          ))}
          <FadeIn className="col-span-2 flex justify-center items-center lg:col-span-1">
            <Button
              className={"w-full lg:w-fit"}
              transparent={true}
              text={t("button")}
            />
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}
