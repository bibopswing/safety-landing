"use client";

import { useTranslations } from "next-intl";
import { partners } from "../../content/main-page/partners";
import Image from "next/image";
import Container from "../common/Container";
import { useEffect, useRef } from "react";
import FadeIn from "../common/FadeIn";

export default function Partners() {
  const t = useTranslations("overview.partners");
  const scrollerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const content = contentRef.current;

    if (!scroller || !content) return;

    content.innerHTML += content.innerHTML;

    let scrollPosition = 0;
    const speed = 1;

    const animate = () => {
      scrollPosition += speed;

      if (scrollPosition >= content.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scroller.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <Container>
      <FadeIn isReverse={true}>
        <div className="flex flex-col items-center gap-[1.5rem]">
          <h2 className="text-center">{t("title")}</h2>
          <p className="text-tertiary-1 text-center max-w-[480px]">
            {t("text")}
          </p>

          <div className="w-full overflow-hidden relative">
            <div
              ref={scrollerRef}
              className="flex overflow-x-scroll scrollbar-hide"
              style={{ scrollBehavior: "unset" }}
            >
              <div ref={contentRef} className="flex w-max">
                {partners.map((item, index) => (
                  <div key={index} className="px-8 flex-shrink-0">
                    <Image
                      src={item}
                      alt="logo icon"
                      className="object-contain h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
