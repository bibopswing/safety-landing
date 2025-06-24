import Container from "../common/Container";
import { useTranslations } from "next-intl";
import { learn } from "../../content/learn/learn";
import ListItem from "./ListItem";
import FadeIn from "../common/FadeIn";

export default function SecondSec() {
  const t = useTranslations("Learn");
  const data = learn.secondSec;
  const list = t.raw("secondSecList");

  const listWithIcons = list.map((item, index) => ({
    ...item,
    img: data.list[index].img,
    href: data.list[index].href,
  }));

  return (
    
      <Container className="flex gap-7 flex-col lg:flex-row justify-between">
        <div className="lg:w-[45%] flex flex-col gap-6">
          <h2>{t(data.title)}</h2>

          <p>{t(data.text)}</p>
        </div>

        <div className="lg:w-[45%] flex flex-col items-stretch gap-10">
          {listWithIcons.map((item, index) => (
      

            <ListItem
              item={item}
              textStyle={"text-[var(--tertiary-1)]"}
              linkText={t(learn.linkText)}
              linkStyle={"lg:border-b-[var(--text-color)]"}
   
                key={index}
              />
               
          ))}
        </div>
      </Container>
    
  );
}
