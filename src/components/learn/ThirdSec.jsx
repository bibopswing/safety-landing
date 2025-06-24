import Container from "../common/Container";
import { useTranslations } from "next-intl";
import { learn } from "../../content/learn/learn";
import ListItem from "./ListItem";
import FadeIn from "../common/FadeIn";

export default function ThirdSec() {
  const t = useTranslations("Learn");
  const data = learn.thirdSec;
  const list = t.raw("thirdSecList");

  const listWithIcons = list.map((item, index) => ({
    ...item,
    img: data.list[index].img,
    href: data.list[index].href,
  }));

  return (
    <FadeIn
      start="top bottom"
      className="bg-[var(--yellow-darker)] text-[var(--gray)]"
    >
      <Container className="flex flex-col items-center justify-center">
        <div className="text-center flex flex-col justify-center items-center">
          <h2 className="text-[var(--black)] lg:w-[80%] ">{t(data.title)}</h2>
          <p className="mt-6 lg:w-[60%]">{t(data.text)}</p>
        </div>

        <div className="w-full gap-y-10 mt-10 grid lg:auto-cols-auto lg:grid-flow-col lg:grid-rows-4">
          {listWithIcons.map((item, index) => (
            <ListItem
              item={item}
              textStyle={"text-[var(--gray)"}
              titleStyle={"text-[var(--black)]"}
              linkText={t(learn.linkText)}
              linkStyle={"text-[var(--black)] lg:border-b-[var(--black)]"}
              iconStyle={"group-hover:stroke-[var(--black)]"}
              key={index}
            />
          ))}
        </div>
      </Container>
    </FadeIn>
  );
}
