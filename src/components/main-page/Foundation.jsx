import { useTranslations } from "next-intl";

import { foundation } from "../../content/main-page/foundation";

import GridItemsWithIcons from "../common/GridItemsWithIcons";
import StripedRows from "../common/StripedRows";
import Container from "../common/Container";
import Button from "../common/Button";
import FadeIn from "../common/FadeIn";

export default function Foundation() {
  const t = useTranslations("Foundation");

  const list1 = t.raw("list_1");
  const list2 = t.raw("list_2");

  const listWithIcons = list2.map((item, index) => ({
    ...item,
    icon: foundation[index],
  }));

  return (
    <Container>
      <div className="flex items-center flex-col justify-center">
        <FadeIn >
          <div className="flex flex-col items-center gap-[1rem]">
            <p className="yellow uppercase">{t("colored-text")}</p>
            <h2>{t("title")}</h2>
            <p className="grey text-center lg:max-w-[70%]">{t("text")}</p>
          </div>
        </FadeIn>
        <div className="w-full flex flex-col gap-[1rem] lg:max-w-[70%]">
          <StripedRows data={list1} />
        </div>
        <div></div>
        <div className="w-full lg:max-w-[80%]">
          <FadeIn>
            <div className="flex flex-col items-center">
              <h4 className="text-center mt-[5rem] mb-[2.5rem]">
                {t("subtitle")}
              </h4>
              {/* <div className="grid grid-cols-4 gap-[3rem]  mb-[5rem]">
                {listWithIcons.map((item, key) => (
                  <div
                    key={key}
                    className="flex flex-col items-start gap-[1rem]"
                  >
                    <Image src={item.icon} alt="icon"/>
                    <p className="font-[700]">{item.subtitle}</p>
                    <p className="grey">{item.subtext}</p>
                  </div>
                ))}
              </div> */}
              <GridItemsWithIcons data={listWithIcons} />
              <Button className={"w-full lg:w-auto"} transparent={true} text={t("button")} />
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}
