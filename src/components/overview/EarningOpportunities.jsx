import { useTranslations } from "next-intl";
import Image from "next/image";

import Container from "../common/Container";
import StripedRows from "../common/StripedRows";
import FadeIn from "../common/FadeIn";

import GridItemsWithIcons from "../common/GridItemsWithIcons";

import img from "../../assets/images/Placeholder.png";
import icon_1 from "../../assets/images/overview/earning-opportunities/icon-1.svg";
import icon_2 from "../../assets/images/overview/earning-opportunities/icon-2.svg";
import icon_3 from "../../assets/images/overview/earning-opportunities/icon-3.svg";
import icon_4 from "../../assets/images/overview/earning-opportunities/icon-4.svg";

export default function EarningOpportunities() {

  const t = useTranslations("overview.earningOpportunities");
  const list = t.raw("list");
  const list_2 = t.raw("list-2");

  const icons = [
    icon_1,
    icon_2,
    icon_3,
    icon_4,
  ];

  const listWithIcons = list_2.map((item, index) => ({
    ...item,
    icon: icons[index],
  }));

  return (
    <Container>
      <div className="flex flex-col items-center gap-[2.5rem] text-center">
        <p className="uppercase text-tertiary-1">{t("text-1")}</p>
        <h2>{t("title")}</h2>
        <p className="text-tertiary-1">{t("text-2")}</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col lg:w-[60%] w-full">
          <StripedRows data={list} />
        </div>
      </div>
      <FadeIn isReverse={true}>
        <Image className="w-full my-[5rem]" src={img} alt="placeholder" />
      </FadeIn>
      <div className="flex flex-col items-center gap-[2.5rem]">
        <h3 className="text-center">{t("subtitle")}</h3>
        <div className="lg:w-[60%] w-full">
          <GridItemsWithIcons data={listWithIcons} />
        </div>
        <p className="text-center text-tertiary-1">{t("subtext")}</p>
      </div>
    </Container>
  );
}