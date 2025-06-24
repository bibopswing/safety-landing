"use client";

import { useTranslations, useLocale } from "next-intl";
import { header } from "../content/header";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.svg";
import { usePathname } from "next/navigation";
import { useCurrentWidth } from "../hooks/use-current-width";
import { useState, useEffect } from "react";
import Nav from "./common/Nav";
import Burger from "./common/Burger";
export default function Header() {
  const width = useCurrentWidth();
  const [menuActive, setMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < 1024);
    if (width > 1024) {
      setMenuActive(false);
    }
  }, [width]);

  let scrollPosition = 0;

  const fixScroll = () => {
    scrollPosition = window.pageYOffset;
    document.body.classList.add("no-scroll");
    document.body.style.top = `-${scrollPosition}px`;
  };

  const unFixScroll = () => {
    document.body.classList.remove("no-scroll");
    // document.body.style.top = "";
    // window.scrollTo(0, scrollPosition);
  };


const onMenuClick=()=> {
  unFixScroll();
  setMenuActive(false);
}

  const toggleMenu = () => {
    setMenuActive((prev) => {
      const nextState = !prev;
      if (nextState) {
        fixScroll();
      } else {
        unFixScroll();
      }

      return nextState;
    });
  };

  const t = useTranslations("Header");
  const data = header;
  const path = usePathname();
  const locale = useLocale();

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link href="/" className="header__item justify-center">
            <Image src={logo} alt="logo" />
          </Link>
          <Nav
            isMobile={isMobile}
            onMenuClick={onMenuClick}
            menuActive={menuActive}
          />
          <Burger active={menuActive} toggleMenu={toggleMenu} />
        </div>
      </header>
      <div
        className={`w-full ${
          path === `/${locale}` ? "h-[80px] " : "h-[80px] lg:h-[100px]"
        }`}
      ></div>
    </>
  );
}
