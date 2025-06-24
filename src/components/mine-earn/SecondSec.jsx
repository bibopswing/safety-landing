import Container from "../common/Container";
import { useTranslations } from "next-intl";
import { mine } from "../../content/mine-earn/mine";
import FadeIn from "../common/FadeIn";
export default function SecondSec() {
  const t = useTranslations("mine-earn");
  const list = t.raw("secondList");

  return (
    <Container>
      <FadeIn  >
        <h2 className="gradient-text lg:w-[70%]">{t(mine.secondTitle)}</h2>
        <div className="flex justify-between mt-10 flex-wrap lg:flex-nowrap lg:items-start gap-6">
          {list.map((item, index) => (
            <FadeIn
              isReverse={true}
              key={index}
              delay={index * 0.15}
              className="w-full lg:max-w-[424px]"
            >
              <p>{item}</p>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Container>
  );
}
