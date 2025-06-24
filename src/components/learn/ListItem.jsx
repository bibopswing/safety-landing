import Image from "next/image";
import Link from "next/link";
import FadeIn from "../common/FadeIn";

const ListItem = ({ item, linkText, titleStyle, textStyle, linkStyle,iconStyle }) => {
  return (
    <FadeIn  start="top bottom"  className="flex gap-5">
      <div className="w-12 h-12 flex">
        <Image src={item.img} alt={item.title} />
      </div>
      <div className="flex lg:flex-col w-full lg:w-auto justify-between gap-4">
        <div>
          <h4 className={titleStyle}>{item.title}</h4>
          <p className={`mt-2 ${textStyle}`}>{item.text}</p>
        </div>

        <Link
          href={item.href}
          className={`group py-2 w-fit flex gap-2  transition-all ease-in  duration-200 items-center justify-center border-b-0 lg:border-b ${linkStyle} hover:border-[var(--yellow)]`}
        >
          <span className="hidden lg:block">{linkText}</span>

          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all ease-in duration-200 stroke-current   ${iconStyle?iconStyle:"group-hover:stroke-[var(--bg--color)]"}`}
          >
            <path
              d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </FadeIn>
  );
};

export default ListItem;
