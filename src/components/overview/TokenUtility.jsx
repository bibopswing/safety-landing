import { useTranslations } from "next-intl";
import Image from "next/image";

import Container from "../common/Container";
import arrow from "../../assets/images/overview/arrow.svg";
import FadeIn from "../common/FadeIn";

export default function TokenUtility() { 

  const t = useTranslations("overview.tokenUtility");

  const list = t.raw("list");

  return (
    <Container>
      <div className="flex lg:flex-row flex-col items-start">
        <FadeIn isReverse={true} className="lg:w-[50%] w-full">
          <div className="flex flex-col items-start gap-[1.5rem]">
            <h2>{t("title")}</h2>
            <p>{t("text-1")}</p>
            <p className="text-tertiary-1 lg:max-w-[45%] max-w-full">{t("text-2")}</p>
          </div>
        </FadeIn>
        <div className="flex flex-col gap-[2.5rem]">
          {list.map((item, index) => (
            <FadeIn key={index} isReverse={true}>
              <div className="flex items-start gap-[1.5rem]">
                <Image className="mt-[12px]" src={arrow} alt="arrow" />
                <div>
                  <h4 className="mb-[0.5rem]">{item.title}</h4>
                  <p className="text-tertiary-1 font-[300]">{item.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  );

}