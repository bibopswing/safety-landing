import { useTranslations } from "next-intl";
import Image from "next/image";

import Container from "../common/Container";
import FadeIn from "../common/FadeIn";

import icon_1 from "../../assets/images/overview/key-functions/icon-1.svg";
import icon_2 from "../../assets/images/overview/key-functions/icon-2.svg";
import icon_3 from "../../assets/images/overview/key-functions/icon-3.svg";
import icon_4 from "../../assets/images/overview/key-functions/icon-4.svg";
import icon_5 from "../../assets/images/overview/key-functions/icon-5.svg";
import icon_6 from "../../assets/images/overview/key-functions/icon-6.svg";

export default function KeyFunctions() {
  
  const t = useTranslations("overview.keyFunctions");

  const textData = t.raw("list");

  const icons = [icon_1, icon_2, icon_3, icon_4, icon_5, icon_6];

  const listMap = textData.map((item, index) => {
    return {
      ...item,
      icon: icons[index],
    };
  });

  return (
    <Container>
      <FadeIn isReverse={true}>
        <h2 className="text-center mb-[4rem]">{t("title")}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1.5rem]">
          {listMap.map((item, index) => (
            <FadeIn isReverse={true} key={index}>
              <div className="flex flex-col gap-[0.6rem] items-start">
                <Image src={item.icon} alt={item.title} />
                <p className="font-[700]">{item.title}</p>
                <p className="text-tertiary-1 font-[300]">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Container>
  );
}
