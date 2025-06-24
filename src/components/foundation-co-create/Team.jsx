"use client";

import Container from "../common/Container";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Image from "next/image";
import { team } from "../../content/foundation-co-create/team";
import GridItemsWithIcons from "../common/GridItemsWithIcons";
import FadeIn from "../common/FadeIn";

export default function Team() {
  const t = useTranslations("foundation-co-create.team");
  const members = t.raw("members");
  const list = t.raw("list");

  const membersList = members.map((item, index) => {
    return {
      ...item,
      img: team.members[index],
    };
  });
  const listWithIcons = list.map((item, index) => ({
    ...item,
    icon: team.icons[index],
  }));

  const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <Container>
      <FadeIn isReverse={true} end="bottom top">
        <div className="flex items-center flex-col gap-[5rem]">
          <div className="flex lg:flex-row flex-col justify-between">
            <h2>{t("title")}</h2>
            <div className="lg:w-[50%] w-full">
              {membersList.map((item, index) => (
                <FadeIn isReverse={true} key={index}>
                  {isMobile ? (
                    <div
                      className={`flex flex-col gap-[2rem] py-[2.5rem] items-start ${
                        index == 2 ? "" : "border-b-[1px] border-tertiary-2"
                      }`}
                    >
                      <div className="flex items-center gap-[1rem]">
                        <Image src={item.img} alt={item.name} />
                        <div className="flex flex-col gap-[0.5rem]">
                          <p>{item.name}</p>
                          <p className="grey text-[0.8rem]">{item.position}</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-[200]">{item.text}</p>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`flex gap-[2rem] py-[2.5rem] items-start ${
                        index == 2 ? "" : "border-b-[1px] border-tertiary-2"
                      }`}
                    >
                      <Image src={item.img} alt={item.name} />
                      <div>
                        <div className="flex items-center justify-between mb-[1rem]">
                          <p>{item.name}</p>
                          <p className="grey text-[0.8rem]">{item.position}</p>
                        </div>
                        <p className="font-[200]">{item.text}</p>
                      </div>
                    </div>
                  )}
                </FadeIn>
              ))}
            </div>
          </div>
          <div className="lg:w-[80%] w-full">
            <GridItemsWithIcons data={listWithIcons} />
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
