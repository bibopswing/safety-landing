"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

import Container from "../common/Container";
import Image from "next/image";

import img from "../../assets/images/Placeholder.png";
import style from "../../assets/styles/modules/overview/herosec.module.scss";

export default function HeroSec() {
  const t = useTranslations("overview.heroSec");
  const images = [img, img, img];

  const scrollUpRef = useRef(null);
  const scrollDownRef = useRef(null);

  useEffect(() => {
    const setupScroll = (containerRef, direction = "up") => {
      const container = containerRef.current;
      if (!container) return;

      let scrollPosition = 0;
      const speed = 1;
      let isPaused = false;
      let animationId;

      const isMobile = window.innerWidth <= 768;
      const scrollSize = isMobile
        ? container.scrollWidth / 2
        : container.scrollHeight / 2;

      const animate = () => {
        if (!isPaused) {
          scrollPosition += speed;
          if (scrollPosition >= scrollSize) {
            scrollPosition = 0;
          }

          if (isMobile) {
            container.scrollLeft =
              direction === "up" ? scrollPosition : scrollSize - scrollPosition;
          } else {
            container.scrollTop =
              direction === "up" ? scrollPosition : scrollSize - scrollPosition;
          }
        }

        animationId = requestAnimationFrame(animate);
      };
      container.addEventListener("mouseenter", () => {
        isPaused = true;
      });
      container.addEventListener("mouseleave", () => {
        isPaused = false;
      });

      animationId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationId);
        container.removeEventListener("mouseenter", () => {});
        container.removeEventListener("mouseleave", () => {});
      };
    };

    const cleanUpUp = setupScroll(scrollUpRef, "up");
    const cleanUpDown = setupScroll(scrollDownRef, "down");

    return () => {
      cleanUpUp?.();
      cleanUpDown?.();
    };
  }, []);
  

  return (
    <Container>
      <div className="flex lg:flex-row flex-col items-center justify-between gap-[2rem]">
        <div className="flex flex-col gap-[1.5rem] lg:w-[40%] w-full">
          <h1>{t("title")}</h1>
          <p className="font-[700]">{t("text-1")}</p>
          <p className="text-tertiary-1 font-[200]">{t("text-2")}</p>
        </div>

        <div className={style.scroll}>
          <div
            className="overflow-hidden h-[auto] w-[40%] lg:h-[700px] lg:w-[40%] w-full"
            ref={scrollUpRef}
          >
            <div className={`${style.scrollUpInner}`}>
              {[...images, ...images].map((imgSrc, i) => (
                <Image key={`up-${i}`} src={imgSrc} alt="placeholder" />
              ))}
            </div>
          </div>

          <div
            className="overflow-hidden h-[auto] w-[40%] lg:h-[700px] lg:w-[40%] w-full"
            ref={scrollDownRef}
          >
            <div className={`${style.scrollDownInner}`}>
              {[...images, ...images].map((imgSrc, i) => (
                <Image key={`down-${i}`} src={imgSrc} alt="placeholder" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
