"use client";

import Container from "./Container";
import { useTranslations } from "next-intl";
import { faq } from "../../content/faq";
import { useState, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { usePathname } from "next/navigation";
import React from "react";
import Button from "./Button";
import AccordionItem from "./AccordionItem";
import FadeIn from "./FadeIn";

export default function Faq() {
  const path = usePathname();
  const ref = useRef();
  const [openIndexes, setOpenIndexes] = useState([]);
  let isMain = path.length<=3;
  const t = useTranslations("Faq");
  const data = faq;
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState(data.menu[0]);
  const { events } = useDraggable(ref);
  
  const handleFilterClick = (item, index) => {
    if (filter === item) {
      setFilter("menu0");
      setActive(0);
      return;
    } else {
      setFilter(item);
      setActive(index);
    }
  };

  const toggleQuestions = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  let filteredQuestions = data.columns.filter((column) => {
    if (filter === "menu0") return true;
    return column.title.includes(filter);
  });

  return (
    <FadeIn>
      <Container
        className={`flex gap-10 ${
          isMain ? "flex-col items-start lg:flex-row" : "flex-col items-center"
        }`}
      >
        <div className={isMain ? "text-left" : "text-center"}>
          <h2>{t(data.title)}</h2>
          <p className="mt-6">{isMain ? t(data.textMain) : t(data.text)}</p>
        </div>

        <div className="relative w-full">
          <div
            {...events}
            ref={ref}
            className={`w-full justify-start flex-row gap-3 flex-nowrap overflow-x-scroll scrollbar-hide scroll-smooth  ${
              isMain ? "hidden pointer-events-none" : "flex pointer-events-auto"
            }`}
          >
            {data.menu.map((text, index) => (
              <button
                className={` transition-all duration-300 border-transparent border-[2px] rounded-lg px-4 py-2 text-nowrap hover:border-[var(--primary-1)]   
            ${
              index === active
                ? "bg-[var(--primary-1)] text-[var(--secondary-2)]"
                : "bg-[var(--tertiary-2)] text-[var(--primary-1)]"
            }
            `}
                key={index}
                onClick={() => handleFilterClick(text, index)}
              >
                <span>{t(text)}</span>
              </button>
            ))}
          </div>
        </div>
        {!isMain&&<div className="self-end lg:block hidden">
          <button
            className="  cursor-pointer"
            onClick={() => {
              if (ref.current) ref.current.scrollTo({
                left: ref.current.scrollLeft - 150,
                behavior: "smooth",
              });;
            }}
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[var(--tertiary-1)] rotate-180"
            >
              <path
                d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className=" cursor-pointer"
            onClick={() => {
              if (ref.current)
                ref.current.scrollTo({
                  left: ref.current.scrollLeft + 150,
                  behavior: "smooth",
                });
            
            }}
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[var(--tertiary-1)] "
            >
              <path
                d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
}
        <div className="grid w-full gap-10">
          {isMain ? (
            <>
              <AccordionItem
                item={filteredQuestions[0]}
                t={t}
                colIndex={1}
                openIndexes={openIndexes}
                toggleQuestions={toggleQuestions}
                isMain={isMain}
              />

              <Button
                text={t(data.buttonMain)}
                transparent={true}
                className={"w-full lg:w-fit"}
              ></Button>
            </>
          ) : (
            filteredQuestions.map((item, key) => (
              <FadeIn start="top bottom" key={key}>
                <div>
                  <h3>{t(item.title)}</h3>

                  <AccordionItem
                    item={item}
                    key={key}
                    t={t}
                    colIndex={key}
                    openIndexes={openIndexes}
                    toggleQuestions={toggleQuestions}
                    isMain={isMain}
                  />
                </div>

                {key !== filteredQuestions.length - 1 && !isMain && (
                  <div className="h-px w-full bg-[var(--tertiary-2)]" />
                )}
              </FadeIn>
            ))
          )}
        </div>
      </Container>
    </FadeIn>
  );
}
