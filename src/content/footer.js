import telegram from "../assets/images/footer/telegram.svg";
import medium from "../assets/images/footer/medium.svg";
import x from "../assets/images/footer/x.svg";
import playMarket from "../assets/images/footer/playMarket.svg";

export const footer = {
  logo: "logo",
  text: ["left-text-1", "left-text-2"],
  socials: [
    {
      icon: telegram,
      href: "/",
      alt: "Telegram icon",
    },
    {
      icon: medium,
      href: "/",
      alt: "Medium icon",
    },
    {
      icon: x,
      href: "/",
      alt: "X icon",
    },
    {
      icon: playMarket,
      href: "/",
      alt: "Play Market icon",
    },
  ],
  columns: [
    [
      {
        text: "platform",
      },
      {
        text: "dashboard",
        href: "/dashboard",
      },
      {
        text: "mining",
        href: "/mining",
      },
      {
        text: "rewards",
        href: "/rewards",
      },
      {
        text: "referral",
        href: "/referral",
      },
    ],
    [
      {
        text: "explore",
      },
      {
        text: "overview",
        href: "/overview",
      },
      {
        text: "dApp Integration",
        href: "/dApp Integration",
      },
    ],
    [
      {
        text: "community",
      },
      {
        text: "foundation",
        href: "/foundation",
      },
      {
        text: "partners",
        href: "/partners",
      },
    ],
    [
      {
        text: "support",
      },
      {
        text: "f&q",
        href: "/f&q",
      },
      {
        text: "docs",
        href: "/docs",
      },
      {
        text: "security",
        href: "/security",
      },
      {
        text: "contact",
        href: "/contact",
      },
    ],
  ],

  bottom: {
    text1: "bottom-text-1",

    text2: "bottom-text-2",

    list: [
      {
        text: "privacy",
        href: "/privacy",
      },

      {
        text: "terms",
        href: "/terms",
      },
      {
        text: "cookies",
        href: "/cookies",
      },
    ],
  },
};
