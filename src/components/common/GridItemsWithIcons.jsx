import Image from "next/image";
import FadeIn from "./FadeIn";

export default function GridItemsWithIcons({ data }) {
  return (
    <FadeIn >
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-[3rem] mb-[5rem]">
        {data.map((item, key) => (
          <div key={key} className="flex lg:flex-col flex-row items-start gap-[1rem]">
            <Image src={item.icon} alt="icon" />
            <p className="font-[700]">{item.subtitle}</p>
            {item.subtext && <p className="grey">{item.subtext}</p>}
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
