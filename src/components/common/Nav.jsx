"use client";

import Link from "next/link";

import { header } from "../../content/header";
import { footer } from "../../content/footer";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import ThemeToggle from "../../components/ThemeToggle";
import Button from "../../components/common/Button";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { usePathname } from "next/navigation";

export default function Nav({ isMobile, onMenuClick, menuActive }) {
  const t = useTranslations("Header");
  const data = header;
  const locale = useLocale();
  const path = usePathname();
  const Content = () => {
    return (
      <>
        <nav
          className={`
          lg:flex lg:h-full lg:items-center lg:bg-[rgba(35,35,35,0.47)] lg:rounded-full lg:gap-[0.7rem] lg:p-2 lg:backdrop-blur-[40px] flex-col
          justify-around  ${menuActive ? "header__item-active" : "hidden"}`}
        >
          {isMobile && (
            <div className="flex justify-between">
              <div className="flex gap-4">
                {/* uncomment the following lines to use light theme
                <ThemeToggle /> */}
                <LanguageSwitcher />
              </div>

              <div className="flex gap-3 items-center justify-start">
                {footer.socials.map((item, k) => (
                  <Link
                    key={`socials${k}`}
                    className="flex"
                    href={item.href}
                    target="_blank"
                  >
                    <Image src={item.icon} alt={item.alt} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-[1rem] lg:mt-0 justify-center lg:justify-around flex w-full flex-col gap-6 lg:flex-row lg:gap-[0.7rem]">
            {data.navList.map((item, key) => (
              <div className={`header__item--container`} key={key}>
                <Link
                  onClick={() => onMenuClick()}
                  className={`${
                    path.includes(item.href) ? "text-[#FFF]" : ""
                  }  `}
                  href={item.href}
                >
                  {t(item.text)}
                </Link>

                {item.linkText && (
                  <div className="dropdown">
                    <Link
                      onClick={() => onMenuClick()}
                      className="flex gap-2"
                      href={item.href}
                    >
                      <Image src={item.icon} alt={item.text} />

                      <p>{item.linkText}</p>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
        <div
          className={`lg:flex lg:items-center lg:bg-[rgba(35,35,35,0.47)] lg:rounded-full lg:gap-[0.7rem] lg:p-2 lg:backdrop-blur-[40px]  
          justify-between ${menuActive ? "header__item-active" : "hidden"}`}
        >
          {!isMobile && (
            <>
              {/* uncomment the following line to use light theme/*/}
              {/* <ThemeToggle /> */}
              <LanguageSwitcher />
            </>
          )}
          <Button
            className="  lg:mt-0 w-full lg:w-auto"
            onClick={() => onMenuClick()}
            text={t(data.button.text)}
            href="https://app.sftyhub.com/"
          />
        </div>
      </>
    );
  };

  return (
    <>
      {isMobile ? (
        <div
          className={
            "absolute z-[40]   flex-col left-0 top-[79px] h-[100vh] pt-4 w-full bg-[var(--bg-color)] px-8 " +
            " " +
            (menuActive
              ? "flex pointer-events-all"
              : "hidden pointer-events-none")
          }
        >
          <div className="w-full h-[80%] flex flex-col gap-[1rem]">
          <Content />
          </div>
        </div>
      ) : (
        <Content />
      )}
    </>
  );
}
