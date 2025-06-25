"use client";

import { useTranslations } from "next-intl";
import { footer } from "../content/footer";
import Container from "./common/Container";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.svg";
import React from "react";

export default function Footer() {
  const t = useTranslations("Footer");
  const data = footer;

  return (
    <>
      <footer>
        <Container className="pt-[1.714rem] pb-[1.714rem] lg:pt-10 lg:pb-10 flex flex-col gap-[64px] lg:gap-16 text-[var(--tertiary-1)]">
          <div className="footer ">
            <div className="footer__left">
              <Link href="/" className="flex">
                <Image src={logo} alt="logo" />
              </Link>
              <div>
                {data.text.map((text, i) => (
                  <p key={`text${i}`}>{t(text)}</p>
                ))}
              </div>

              <div className="flex gap-3 items-center justify-start">
                {data.socials.map((item, k) => (
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
            <div className="footer__right">
              {footer.columns.map((links, i) => (
                <div key={`column${i}`}>
                  {links.map(({ text, href }, j) => (
                    <React.Fragment key={`item-${j}`}>
                      {!href ? (
                        <h5>{t(text)}</h5>
                      ) : (
                        <a href={href}>{t(text)}</a>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="bottom">
            <p>{t(data.bottom.text1)}</p>

            <h6>{t(data.bottom.text2)}</h6>

            <ul>
              {data.bottom.list.map(({ text, href }, n) => (
                <li key={`bottom link${n}`}>
                  <Link href={href}>{t(text)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
}
