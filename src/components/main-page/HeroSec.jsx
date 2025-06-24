"use client";

import { useEffect, useState, useRef } from "react";
import style from "../../assets/styles/modules/herosec.module.scss";
import Image from "next/image";
import Stars from "../main-page/Stars";
import Container from "../common/Container";
import Button from "../common/Button";
import FadeIn from "../common/FadeIn";
import { useCurrentWidth } from "../../hooks/use-current-width";
import { useDraggable } from "react-use-draggable-scroll";
import Gradient from "../main-page/Gradient";

import icon_1 from "../../assets/images/main-page/hero-sec/icon-1.svg";
import icon_2 from "../../assets/images/main-page/hero-sec/icon-2.svg";
import icon_3 from "../../assets/images/main-page/hero-sec/icon-3.svg";
import icon_4 from "../../assets/images/main-page/hero-sec/icon-4.svg";
import icon_5 from "../../assets/images/main-page/hero-sec/icon-5.svg";
import icon_6 from "../../assets/images/main-page/hero-sec/icon-6.svg";
import icon_7 from "../../assets/images/main-page/hero-sec/icon-7.svg";

import logo_1 from "../../assets/images/main-page/hero-sec/logo-1.svg";
import logo_2 from "../../assets/images/main-page/hero-sec/logo-2.svg";
import logo_3 from "../../assets/images/main-page/hero-sec/logo-3.svg";
import logo_4 from "../../assets/images/main-page/hero-sec/logo-4.svg";
import logo_5 from "../../assets/images/main-page/hero-sec/logo-5.svg";
import logo_6 from "../../assets/images/main-page/hero-sec/logo-6.svg";
import logo_7 from "../../assets/images/main-page/hero-sec/logo-7.svg";

import gridImg from "../../assets/images/main-page/hero-sec/grid.svg";

export default function HeroSec() {
  const [showGradient, setShowGradient] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowGradient(true), 300);
    setTimeout(() => setShowTitle(true), 800);
    setTimeout(() => setShowSubtitle(true), 1300);
    setTimeout(() => setShowText(true), 1800);
    setTimeout(() => setShowButton(true), 2300);
  }, []);

  useEffect(() => {
    const icons = document.querySelectorAll(".magnet-icon");
    const radius = 300;
    const maxOffset = 50;

    const onMouseMove = (e) => {
      icons.forEach((icon) => {
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

  const logos = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_7];

  const ref = useRef();
  const width = useCurrentWidth();
  const [isMobile, setIsMobile] = useState(false);
  const { events } = useDraggable(ref);

  useEffect(() => setIsMobile(width < 1024), [width]);
  return (
    <section className="relative pt-[80px] lg:pt-0">
      <Stars style={style} />
      <Container
        customStyle={{
          marginTop: isMobile ? "0" : "-28%",
          position: "relative",
          paddingLeft: isMobile ? "0" : "",
          paddingRight: isMobile ? "0" : "",
        }}
      >
        <div className={style.icons}>
          <div className={style.icons__left}>
            <Image className="magnet-icon" src={icon_1} alt="hero icon 1" />

            <div className="lg:ml-[10rem] flex flex-col  lg:gap-[10rem]">
              <Image
                className="magnet-icon translate-x-[-30px] lg:translate-x-0"
                src={icon_2}
                alt="hero icon 2"
              />
              <Image className="magnet-icon" src={icon_3} alt="hero icon 3" />
            </div>
          </div>
          <div className="flex lg:items-start items-end">
            <Image
              className="magnet-icon translate-x-[-14px] max-w-[80px] max-h-[80px] lg:max-w-[102px] lg:max-h-[108px]"
              src={icon_4}
              alt="hero icon 4"
            />
          </div>
          <div className={style.icons__right}>
            <div className="lg:mr-[15rem] flex flex-col  lg:gap-[10rem]">
              <Image
                className="magnet-icon translate-x-[-25px] lg:translate-x-[-50px]"
                src={icon_5}
                alt="hero icon 5"
              />
              <Image className="magnet-icon" src={icon_6} alt="hero icon 6" />
            </div>
            <Image className="magnet-icon" src={icon_7} alt="hero icon 7" />
          </div>
        </div>

        {/* <div className={style.gradient_container}>
          <Gradient />
          <div className={style.gradient_container__text}>
            <p className="text-[1.1rem] uppercase">
              It stacks. It pays. Get started.
            </p>
            <h1>Web3 doesn’t have to be risky. Just make it safe.</h1>
            <p>
              Start mining. Learn what matters. Send and spend without borders.
              <br />
              <span>One tap. One token. Simple as that.</span>
            </p>
            <Button arrow text={"Get Started"} />
          </div>
        </div> */}
        <div
          className={`${
            style.gradient_container
          } min-h-[460px] lg:min-h-[680px]  transition-all ease-in ${
            showGradient ? "opacity-100" : "opacity-0"
          } `}
        >
          {showGradient && <Gradient />}

          <div className={`${style.gradient_container__text}   mt-[-20px] lg:mt-0`}>
            <p
              className={`w-full lg:auto bg-[var(--black)] lg:bg-transparent text-[1.1rem] uppercase transition-opacity duration-500 ${
                showSubtitle ? "opacity-100" : "opacity-0"
              }`}
            >
              It stacks. It pays. Get started.
            </p>
            <div className="flex flex-col gap-4 px-8 lg:px-0">

            <h1
              className={`bg-[var(--black)] transition-opacity duration-500 ${
                showTitle ? "opacity-100" : "opacity-0"
              }`}
              >
              Web3 doesn’t have to be risky. Just make it safe.
            </h1>
            <p
              className={`transition-opacity duration-500 ${
                showText ? "opacity-100" : "opacity-0"
              }`}
              >
              Start mining. Learn what matters. Send and spend without borders.
              <br />
              <span>One tap. One token. Simple as that.</span>
            </p>
              </div>
            <div
              className={`transition-opacity duration-500 ${
                showButton ? "opacity-100" : "opacity-0"
              }`}
            >
              <Button arrow text={"Get Started"} />
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full flex items-end lg:items-center justify-center lg:translate-y-[-130px] relative">
        <Image
          className="absolute z-[-1] lg:static w-full"
          style={{ backgroundColor: "#0f0f10" }}
          src={gridImg}
          alt="grid image"
        />

        <div
          {...events}
          ref={ref}
          className="static lg:absolute w-full flex items-center justify-start overflow-x-scroll scrollbar-hide lg:justify-between gap-[2rem] bottom-0 lg:bottom-[10px]"
        >
          {logos.map((logo, key) => (
            <FadeIn
              key={key}
              className=" g:min-h-[100%] lg:p-2 flex justify-center items-center "
            >
              <a
                href="/"
                className="w-full h-full flex min-w-[168px]  max-h-[57px]"
              >
                <Image
                  className="w-full h-auto object-contain"
                  src={logo}
                  alt="partner logo"
                />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
