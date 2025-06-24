"use client";

import React from "react";
import FadeIn from "./FadeIn";

const AccordionItem = ({
  item,
  isMain,
  toggleQuestions,
  openIndexes,
  colIndex,
  t,
}) => {
  let content = isMain ? item.answers.slice(0, 4) : item.answers;
  return (
    <>
      {isMain ? (
        <div className="mt-6 grid gap-4">
          {content.map(({ answer, question }, index) => {
            const questionKey = `${colIndex}_${index}`;
            const isOpen = openIndexes.includes(questionKey);

            return (
              <div
                className=" flex flex-col cursor-pointer transition-all"
                key={questionKey}
                onClick={() => toggleQuestions(questionKey)}
              >
                <button className="flex items-center justify-between">
                  <span className="font-bold ">{t(question)}</span>

                  <svg
                    className={`color-[var(--secondary-2)] transition-transform ease-in duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
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

                <div
                  className={`mt-4 overflow-hidden transition-all ease-in duration-300 h-full ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p>{t(answer)}</p>
                </div>

                {isMain && (
                  <div className="mt-6 h-px w-full bg-[var(--tertiary-2)]" />
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <FadeIn   className="mt-6 grid gap-4">
          {content.map(({ answer, question }, index) => {
            const questionKey = `${colIndex}_${index}`;
            const isOpen = openIndexes.includes(questionKey);

            return (
              <FadeIn
                
                y={0}
                 onClick={() => toggleQuestions(questionKey)}
                className=" flex flex-col cursor-pointer transition-all"
                key={questionKey}
              >
                <button
                  
                  className="flex items-center justify-between"
                >
                  <span className="font-bold ">{t(question)}</span>

                  <svg
                    className={`color-[var(--secondary-2)] transition-transform ease-in duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
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

                <div
                  className={`mt-4 overflow-hidden transition-all ease-in duration-300 h-full ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p>{t(answer)}</p>
                </div>

                {isMain && (
                  <div className="mt-6 h-px w-full bg-[var(--tertiary-2)]" />
                )}
              </FadeIn>
            );
          })}
        </FadeIn>
      )}
    </>
  );
};

export default AccordionItem;
