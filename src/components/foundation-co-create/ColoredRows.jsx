import Container from "../common/Container";
import { useTranslations } from "next-intl";
import StripedRows from "../common/StripedRows";

export default function ColoredRows() { 

  const t = useTranslations("foundation-co-create.rows");
  const list = t.raw("list");

  return (
    <Container>
      <div className="flex flex-col items-center gap-[5rem]">
        <div className="flex flex-col items-center justify-center gap-[1rem]">
          <h2 className="text-center">{t("title")}</h2>
          <p className="text-center grey">{t("text")}</p>
        </div>
        <div className="w-full flex flex-col gap-[1rem] lg:max-w-[70%] max-w-full">
          <StripedRows data={list} />
        </div>
      </div>
    </Container>
  );

}