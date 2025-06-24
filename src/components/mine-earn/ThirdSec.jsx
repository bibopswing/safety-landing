import Image from "next/image";
import placeholder from "../../assets/images/Placeholder.png";
import Container from "../common/Container";
import { useTranslations } from "next-intl";
import { mine } from "../../content/mine-earn/mine";
import FadeIn from "../common/FadeIn";

export default function ThirdSec() {
  const data = mine.thirdSec;
  const t = useTranslations("mine-earn");
  const list = t.raw("thirdList");

  return (
    <>
      <FadeIn isReverse={true} end="bottom top" className="flex">
        <Container>
          <Image
            className="w-full"
            src={placeholder}
            alt="Temporal placeholder"
          />
        </Container>
      </FadeIn>

      <FadeIn isReverse={true} end="bottom top">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row items-center lg:justify-between">
            <h2 className=" w-full lg:w-[45%]">{t(data.title)}</h2>

            <div className="flex flex-col text-[var(--tertiary-1)] gap-8 w-full lg:w-[43%]">
              <p>{t(data.text1)}</p>

              <p>{t(data.text2)}</p>
            </div>
          </div>

          <div className="mt-10  gap-6 grid  lg:grid-cols-6 lg:grid-rows-2">
            {list.map((item, index) => (
              <FadeIn isReverse={true}    delay={index * 0.15} end="bottom top"
                className={`bg-[var(--tertiary-3)] p-6 rounded-2xl border border-[var(--gray)] ${
                  index === list.length - 1 || index === list.length - 2
                    ? "lg:col-span-3"
                    : "lg:col-span-2"
                }`}
                key={index}
              >
                <div className="flex justify-end">
                  <span className="font-bold text-2xl">{`${item.points} pt`}</span>
                </div>

                <div className="mt-6 grid gap-2">
                  <span className="text-xs text-[var(--tertiary-1)]">
                    {item.upperText}
                  </span>
                  <h4>{item.title}</h4>
                  <p className="text-[var(--tertiary-1)]">{item.subtext}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </FadeIn>
    </>
  );
}
