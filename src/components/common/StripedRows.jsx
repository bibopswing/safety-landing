import FadeIn from "./FadeIn";

export default function StripedRows({ data }) {
  
  return data.map((item, index) => (
    <FadeIn >
      <div
        className={`${
          index % 2 === 1 ? "bg-secondary-2" : ""
        } flex justify-between lg:items-center items-start lg:flex-row flex-col py-[2.75rem] px-[2rem] rounded rounded-[0.8rem]`}
      >
        <p className="font-[700]">{item.subtitle}</p>
        <p className="grey">{item.subtext}</p>
      </div>
    </FadeIn>
  ));
}
