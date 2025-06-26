'use client';

import { useTranslations } from "next-intl";
import Container from "../common/Container";
import FadeIn from "../common/FadeIn";
import Image from "next/image";
import style from "../../assets/styles/modules/key-metrice.module.scss";
import CustomAnimation from "../../components/common/CustomAnimation";

import img_1 from "../../assets/images/main-page/key-metrics/anim-1.svg";
import img_2 from "../../assets/images/main-page/key-metrics/anim-2.svg";
import img_4 from "../../assets/images/main-page/key-metrics/anim-4.svg";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDashboardDataFunction } from "../../redux/slice/dashboardSlice";

export default function KeyMetrics() {
  const t = useTranslations("KeyMetrics");
  const dispatch = useDispatch();

  const { dashboardData } = useSelector((state) => state.dashboard);
  const list = t.raw("list");

  useEffect(() => {
    dispatch(getDashboardDataFunction());
  }, [dispatch]);

  const animations = [
    {
      element: <Image className="w-full h-auto " src={img_1} alt="line" />,
      options: {
        className: "absolute w-full max-w-[90%] lg:left-[5%] bottom-[20%] pointer-events-none",
        animation: { x: -300, opacity: 0 },
        delay: 0.1,
      },
    },
    {
      element: <Image className="w-full h-auto" src={img_2} alt="circle" />,
      options: {
        className: "absolute w-full max-h-[201px] left-0 bottom-0 pointer-events-none",
        animation: { scale: 1.5, opacity: 0 },
        delay: 0.2,
      },
    },
    {
      element: (
        <div className="grid grid-cols-10 gap-[0.6rem] justify-items-center w-full">
          {Array.from({ length: 30 }, (_, i) => (
            <svg
              key={i}
              width="54"
              height="53"
              viewBox="0 0 54 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={style.svg}
            >
              <path
                opacity="0.4"
                d="M26.8117 4.37695C21.0781 4.37695 16.4167 9.03826 16.4167 14.7719C16.4167 20.3961 20.8154 24.948 26.5491 25.1449C26.7241 25.123 26.8992 25.123 27.0305 25.1449C27.0743 25.1449 27.0962 25.1449 27.1399 25.1449C27.1618 25.1449 27.1618 25.1449 27.1837 25.1449C32.786 24.948 37.1847 20.3961 37.2066 14.7719C37.2066 9.03826 32.5453 4.37695 26.8117 4.37695Z"
                fill=""
              />
              <path
                d="M37.9288 30.9659C31.8231 26.8955 21.8659 26.8955 15.7164 30.9659C12.9372 32.8261 11.4053 35.3427 11.4053 38.0345C11.4053 40.7262 12.9372 43.221 15.6945 45.0592C18.7583 47.1163 22.785 48.1449 26.8116 48.1449C30.8383 48.1449 34.865 47.1163 37.9288 45.0592C40.6861 43.1991 42.218 40.7043 42.218 37.9907C42.1961 35.299 40.6861 32.8042 37.9288 30.9659Z"
                fill=""
              />
            </svg>
          ))}
        </div>
      ),
      options: { animation: { opacity: 0 }, delay: 0.3 },
    },
    {
      element: <Image alt="Load animation" src={img_4} className="w-full h-auto max-w-[80%]" />,
      options: { animation: { x: -400, opacity: 1 }, delay: 0.4 },
    },
  ];

  const keyMap = {
    "Accounts Created": "totalUsers",
    "SAFE Points Mined": "totalMiningPoints",
    "Token Holders": "totalHolder",
    "Circulating Supply": "circulatingSupply",
  };

  const listMap = list.map((item, index) => {
    const key = keyMap[item.text];
    const value = dashboardData?.[key] ?? 0;

    return {
      text: item.text,
      digit: value,
      animationBlock: animations[index]?.element ?? null,
      animationOptions: animations[index]?.options ?? {},
    };
  });

  return (
    <Container>
      <div className="flex flex-col items-center gap-[1rem]">
        <h2>{t("title")}</h2>
        <p className="grey">{t("text")}</p>
      </div>

      <div className="grid lg:grid-cols-2 auto-rows-fr gap-[1rem] mt-[3rem]">
        {listMap.map((item, index) => (
          <FadeIn start="top bottom" key={index}>
            <div
              className={`p-[1.2rem] relative overflow-hidden flex flex-col h-full max-h-[320px] bg-[#1E1E1E] rounded-[1.2rem] ${index !== 1 || index !== 0 ? "justify-between" : "justify-start"
                }`}
            >
              <div>
                <p className="grey text-[0.9rem]">{item.text}</p>
                <h2>
                  {item.text === "Circulating Supply"
                    ? `${Number(item.digit).toLocaleString()} SAFETY`
                    : Number(item.digit).toLocaleString()}
                </h2>              </div>

              {index === 3 ? (
                <div className="w-full overflow-hidden bg-[#333] rounded-[12px] mt-[50px]">
                  <CustomAnimation {...item.animationOptions}>
                    {item.animationBlock}
                  </CustomAnimation>
                </div>
              ) : (
                <CustomAnimation {...item.animationOptions}>
                  {item.animationBlock}
                </CustomAnimation>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}
