import HeroAnimation from "./HeroAnimation";
import { mine } from "../../content/mine-earn/mine";
import { useTranslations } from "next-intl";
import Container from "../common/Container";
 

export default function HeroSec() {
  const data = mine.hero;
  const t = useTranslations("mine-earn");
  return (
    <section className="flex flex-col relative">
      <div className="flex">
      <HeroAnimation />
      </div>
      <div className="lg:absolute bg-transparent w-full flex items-end justify-center h-full top-0">
        <div className="flex flex-col m-x-auto m-y-0 pl-4 pr-4 text-center gap-6 lg:pb-[122px]">
          <h1>{t(data.title)}</h1>
          <p>{t(data.text)}</p>
        </div>
      </div>
    </section>
  );
}
