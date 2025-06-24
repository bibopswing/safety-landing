import Container from "../common/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import img from "../../assets/images/Placeholder.png";
import style from "../../assets/styles/modules/foundation-co-create/herosec.module.scss";

export default function HeroSec() {
  const t = useTranslations("foundation-co-create.heroSec");
  const title = t.raw("title");
  const text = t.raw("text");

  return (
    <Container>
      <div className="flex lg:flex-row flex-col gap-[1.714rem] items-center justify-between">
        <h1 className={`${style.title}`}>
          <span className={style["gradient-text"]}>{title[0]}</span>
          <br />
          <span>{title[1]}</span>
        </h1>
        <div className="flex flex-col gap-[1rem] lg:w-[50%] w-full">
          {text.map((item, index) => (
            <p
              key={index}
              className={`${index === 1 ? "grey" : ""} w-full lg:max-w-[84%]`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <Image className="w-full h-auto mt-[5rem]" src={img} alt="placeholder" />
    </Container>
  );
}
