"use client";
import Image from "next/image";
import { tokenomics } from "../../content/foundation-co-create/tokenomics";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import style from "../../assets/styles/modules/foundation-co-create/tokenmics.module.scss";
import Stars from "../main-page/Stars";
import Container from "../common/Container";

import logo from "../../assets/images/foundation-co-create/tokenomics/logo.svg";
import icon_1 from "../../assets/images/foundation-co-create/tokenomics/icon-1.svg";
import icon_2 from "../../assets/images/foundation-co-create/tokenomics/icon-2.svg";
import icon_3 from "../../assets/images/foundation-co-create/tokenomics/icon-3.svg";
import icon_4 from "../../assets/images/foundation-co-create/tokenomics/icon-4.svg";
import FadeIn from "../common/FadeIn";

export default function Tokenomics() {
  const t = useTranslations("foundation-co-create.Tokenomics");
  const modals = t.raw("modals");

  const path = tokenomics.path;
  const value = tokenomics.value;

  const modalsMap = modals.map((item, index) => {
    return {
      ...item,
      ...path[index],
    };
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // useEffect(() => {
  //   const icons = document.querySelectorAll(".magnet-icon");
  //   const radius = 300;
  //   const maxOffset = 20;

  //   const onMouseMove = (e) => {
  //     icons.forEach((icon) => {
  //       const rect = icon.getBoundingClientRect();
  //       const iconX = rect.left + rect.width / 2;
  //       const iconY = rect.top + rect.height / 2;

  //       const dx = e.clientX - iconX;
  //       const dy = e.clientY - iconY;
  //       const distance = Math.sqrt(dx * dx + dy * dy);

  //       if (distance < radius) {
  //         const strength = (1 - distance / radius) * maxOffset;
  //         const moveX = (dx / distance) * strength;
  //         const moveY = (dy / distance) * strength;
  //         icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
  //       } else {
  //         icon.style.transform = "translate(0px, 0px)";
  //       }
  //     });
  //   };

  //   document.addEventListener("mousemove", onMouseMove);
  //   return () => {
  //     document.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);
  useEffect(() => {
    const icons = document.querySelectorAll(".magnet-icon");
    const radius = 300;
    const maxOffset = 20;

    const onMouseMove = (e) => {
      icons.forEach((icon) => {
        // Пропускаем центральный логотип
        if (icon.classList.contains("magnet-icon--center")) {
          return;
        }

        const rect = icon.getBoundingClientRect();
        const iconX = rect.left + rect.width / 2;
        const iconY = rect.top + rect.height / 2;

        const dx = e.clientX - iconX;
        const dy = e.clientY - iconY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
          const strength = (1 - distance / radius) * maxOffset;
          const moveX = (dx / distance) * strength;
          const moveY = (dy / distance) * strength;
          icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          icon.style.transform = "translate(0px, 0px)";
        }
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  
  return (
    <Container>
      <FadeIn isReverse={true}>
        <h2 className="mb-[5rem]">Tokenomics</h2>
      </FadeIn>
      <FadeIn isReverse={true} end="top bottom">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[1rem]">
          <div className="flex flex-col gap-[1rem]">
            <div className="bg-primary-1 p-[1.5rem] rounded-[1.2rem] grid grid-cols-2 gap-[1rem]">
              {value.map((item, index) => (
                <div key={index}>
                  <p
                    style={{ color: "rgba(138, 138, 138, 1)" }}
                    className="text-[0.8rem]"
                  >
                    {item.colored}
                  </p>
                  <p className="text-black text-[1.2rem] font-[700]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-[1.2rem] border-solid border-2 border-secondary-2 relative max-h-[400px]">
              <Stars />
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none">
                <Image src={logo} className="magnet-icon" alt="Logo" />
              </div>
              <Image
                src={icon_1}
                className="absolute top-[50px] left-[30px] magnet-icon "
                alt="Icon 2"
              />
              <Image
                src={icon_2}
                className="absolute bottom-[50px] left-[60px] magnet-icon "
                alt="Icon 3"
              />
              <Image
                src={icon_3}
                className="absolute top-[70px] right-[100px] magnet-icon "
                alt="Icon 4"
              />
              <Image
                src={icon_4}
                className="absolute bottom-[120px] right-[80px] magnet-icon "
                alt="Icon 5"
              />
            </div>
          </div>
          <div className="relative lg:static  bg-secondary-2 p-[1.5rem] rounded-[1.2rem] flex flex-col gap-[1rem] items-center">
            <h4>Token Allocation</h4>
            <div className="lg:relative w-fit">
              <svg
                width="256"
                height="255"
                viewBox="0 0 256 255"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_705_2403)">
                  <circle cx="128.178" cy="127.177" r="127.5" fill="#000A24" />

                  {modalsMap.map((path, index) => (
                    <path
                      key={index}
                      className={style.path}
                      d={path.d}
                      fill={path.fill}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />
                  ))}
                </g>
                <defs>
                  <clipPath id="clip0_705_2403">
                    <rect
                      width="255"
                      height="255"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              {modalsMap.map(
                (modal, index) =>
                  hoveredIndex === index && (
                    <div
                      key={index}
                      className="bg-primary-1 p-[0.8rem]  rounded-[0.8rem] flex items-start gap-[0.5rem] w-[92%] lg:w-full lg:max-w-[280px] absolute lg:top-[0%] lg:bottom-0 bottom-full left-[13px] lg:left-[-250px]"
                    >
                      <div
                        style={{ backgroundColor: modal.fill }}
                        className=" border-2 border-[#FFFFFF33]  rounded-[4px] w-[12px] h-[12px]"
                      ></div>
                      <div className="flex flex-col items-start gap-[0.4rem]">
                        <p className="text-[0.9rem] text-secondary-1 font-[700]">
                          {modal.title}
                        </p>
                        <p className="text-tertiary-2 text-[0.9rem]">
                          {modal.modalText}
                        </p>
                        <p className="text-gray font-[700] flex gap-[0.2rem] items-center">
                          <span>{modal.digit}</span>
                          <span className="bg-gray w-[6px] h-[6px] rounded-full"></span>
                          <span>{modal.safety}</span>
                        </p>
                      </div>
                    </div>
                  )
              )}
            </div>
            <div className="grid lg:grid-cols-2 gap-[0.5rem] w-full">
              {modalsMap.map((item, index) => (
                <div key={index} className="flex items-center gap-[0.5rem]">
                  <div
                    style={{ backgroundColor: item.fill }}
                    className=" border-2 border-[#FFFFFF33]  rounded-[4px] w-[12px] h-[12px]"
                  ></div>
                  <p className="text-tertiary-1 text-[0.8rem]">{item.title}</p>
                  <span className="bg-[#FFFFFFCC] w-[6px] h-[6px] rounded-full"></span>
                  <p className="font-[600]">{item.digit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
