"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import style from "../../assets/styles/modules/overview/roadmap.module.scss";
import Container from "../common/Container";

export default function Roadmap() {
  const t = useTranslations("overview.roadmap");
  const list = t.raw("list");

  const [isMobile, setIsMobile] = useState(false);
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            // Сортировка слева направо сверху вниз
            return (
              a.target.getBoundingClientRect().top -
              b.target.getBoundingClientRect().top
            );
          });

        visibleEntries.forEach((entry, i) => {
          const index = parseInt(entry.target.dataset.index);
          if (!visibleItems.includes(index)) {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, i * 500); // Задержка: 0.5s * позиция
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [isMobile, visibleItems]);

  return (
    <Container>
      <h2 className="text-center">{t("title")}</h2>

      {isMobile ? (
        <div className="overflow-x-auto whitespace-nowrap flex gap-4 pb-4 scrollbar-hide h-[150px]">
          {list.map((item, index) => (
            <div
              key={index}
              style={{ transform: index % 2 === 0 ? "translateY(50px)" : "" }}
            >
              <div>
                {index % 2 !== 0 && (
                  <div className={style.item}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-[0.5rem]">
                <div className={style.circle}></div>
                <div className={style.line}></div>
              </div>
              {index % 2 === 0 && (
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.line}></div>
          {list.map((item, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`${style.animateItem} ${
                visibleItems.includes(index) ? style.visible : ""
              }`}
            >
              <div className={`${index % 2 !== 0 ? "mt-[-53px]" : ""}`}>
                {index % 2 !== 0 && (
                  <div className={style.item}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-[0.5rem]">
                <div className={style.circle}></div>
                <div className={style.line}></div>
              </div>
              {index % 2 === 0 && (
                <div className={style.item}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}

