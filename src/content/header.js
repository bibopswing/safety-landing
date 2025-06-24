import icon_1 from "../assets/images/header/icon-1.svg"
import icon_2 from "../assets/images/header/icon-2.svg"
import icon_4 from "../assets/images/header/icon-4.svg";
import icon_5 from "../assets/images/header/icon-5.svg";

export const header = {
  logo: "logo",
  navList: [
    {
      text: "hub",
      href: "/mine-earn",
      linkText: "Mine & Earn",
      icon: icon_1,
    },
    {
      text: "explore",
      href: "/overview",
      linkText: "Overview",
      icon: icon_2,
    },
    {
      text: "ecosystem",
      href: "/foundation-co-create",
      linkText: "SAFETY Foundation",
      icon: icon_4,
    },
    {
      text: "learn",
      href: "/learn",
      linkText: "Docs & FAQ",
      icon: icon_5,
    },
    // {
    //   text: "security",
    //   href: "/learn",
    //   linkText: "Docs & FAQ",
    //   icon: icon_5,
    // },
  ],
  button: {
    text: "button",
    href: "/",
  },
};