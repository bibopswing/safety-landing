import Link from "next/link";
import Image from "next/image";
import arrowIcon from "../../assets/images/arrow-button-dark.svg";

export default function Button({ text, arrow = false, href, transparent, onClick, className }) {
  const content = (
    <>
      <span>{text}</span>
      {arrow && <Image src={arrowIcon} alt="arrow button" />}
    </>
  );

  return href ? (
    <Link href={href} onClick={onClick} >
      <span className={`button ${transparent ? "button-transparent" : ""} ${className}`}>{content}</span>
    </Link>
  ) : (
      <button onClick={onClick} className={`button ${transparent ? "button-transparent" : ""} ${className}`}>
        {content}
    </button>
  );
}
