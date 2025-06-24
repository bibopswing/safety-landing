"use client";
 
import { useState  } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "../common/Container";
import { tabs } from "../../content/main-page/tabs";
import style from "../../assets/styles/modules/gradient-container.module.scss";
import arrow from "../../assets/images/arrow-right.svg";
import grid from "../../assets/images/grid.svg";
import FadeIn from "../common/FadeIn";

export default function Tabs() {
  const t = useTranslations("Tabs");

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeKey, setActiveKey] = useState(tabs.list[0].key);
  const [prevKey, setPrevKey] = useState(null);

  // const [nextKey, setNextKey] = useState(null);

  const [isAnimating, setIsAnimating] = useState(false);

  const activeTab = tabs.list.find((tab) => tab.key === activeKey);
  const activeContent = t.raw(`list.${activeKey}`);

  const handleClick = (key, index) => {
    if (key === activeKey) return;
    setActiveIndex(index);
    setIsAnimating(true);
    setPrevKey(activeKey);

    setTimeout(() => {
      setActiveKey(key);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      const prevIndex = activeIndex - 1;
      handleClick(tabs.list[prevIndex].key, prevIndex);
    }
  };

  const handleNext = () => {
    if (activeIndex < tabs.list.length - 1) {
      const nextIndex = activeIndex + 1;
      handleClick(tabs.list[nextIndex].key, nextIndex);
    }
  };

  return (
      <FadeIn>
    <Container>
        <div className="flex items-center lg:text-left text-center flex-col gap-[1.5rem]">
          <h2 className="text-center">
            {t(tabs.title_1)} <br /> {t(tabs.title_2)}
          </h2>
          <p className="grey">{t(tabs.text)}</p>
        </div>
      
      {/* <FadeIn isReverse={true} end="bottom top"> */}
        <div className={`${style.card}`}>
          <div className="hidden lg:flex flex-col w-full max-w-[525px]">
            {tabs.list.map((tab, key) => (
              <button
                key={key}
                onClick={() => handleClick(tab.key, key)}
                className={`${style.button} ${
                  tab.key === activeKey ? style.button__active : ""
                }`}
              >
                {tab.key}
                {tab.key === activeKey && (
                  <Image src={arrow} alt="arrow button" />
                )}
              </button>
            ))}
          </div>

          {activeTab && activeContent && (
            <div
              className={`${style.content} ${
                isAnimating ? style.fadeOut : style.fadeIn
              }`}
            >
              <Image
                src={activeTab.icon}
                alt={activeKey}
                className="w-16 h-16"
              />
              <h3 className="font-bold mb-2 w-full lg:w-[80%]">{activeContent.title}</h3>
              <div>
                <ul className="w-full lg:auto">
                  {activeContent.items?.map((item, i) => (
                    <li className="grey" key={i}>
                      <Image src={arrow} alt="arrow" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className={style.grid}>
            <Image className=" w-full h-auto lg:h-auto" src={grid} alt="grid" />
          </div>
        </div>
      {/* </FadeIn> */}

      <div className=" mt-[20px] flex lg:hidden lg:mt-0 justify-end gap-2">
        <button
          type="button"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`flex transition-all duration-300 ease-in ${
            activeIndex === 0 ? "opacity-50" : "opacity-100"
          }`}
        >
          <svg
            className={`rotate-[-270deg] w-full`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 8.99907C18 8.99907 13.5811 14.999 12 14.999C10.4188 14.999 6 8.99902 6 8.99902"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={activeKey === tabs.list.length - 1}
          className={`flex transition-all duration-300 ease-in ${
            activeIndex === tabs.list.length - 1 ? "opacity-50" : "opacity-100"
          }`}
        >
          <svg
            className={`w-full rotate-[270deg] `}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 8.99907C18 8.99907 13.5811 14.999 12 14.999C10.4188 14.999 6 8.99902 6 8.99902"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </Container>
      </FadeIn>
  );
}
