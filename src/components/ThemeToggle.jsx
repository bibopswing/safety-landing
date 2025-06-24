"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    //   <button onClick={toggleTheme}>
    //     {theme === "light" ? "☀️ Светлая" : " 🌙 Тёмная"}
    //   </button>
    // );
    <div className="theme-toggle">
      <div
        onClick={() => theme !== "light" && toggleTheme()}
        className={`theme-toggle__icon ${theme === "light" ? "active" : ""}`}
        aria-label="Светлая тема"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="translate-x-[-1px]"
        >
          <path
            d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
            stroke=""
            strokeOpacity="1"
            strokeWidth="1.5"
          />
          <path
            d="M11.9955 3H12.0045M11.9961 21H12.0051M18.3588 5.63599H18.3678M5.63409 18.364H5.64307M5.63409 5.63647H5.64307M18.3582 18.3645H18.3672M20.991 12.0006H21M3 12.0006H3.00898"
            stroke=""
            strokeOpacity="1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        onClick={() => theme !== "dark" && toggleTheme()}
        className={`theme-toggle__icon ${theme === "dark" ? "active" : ""}`}
        aria-label="Тёмная тема"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5 13.0784C19.3003 13.7189 17.9301 14.0821 16.4751 14.0821C11.7491 14.0821 7.91792 10.2509 7.91792 5.52485C7.91792 4.06986 8.28105 2.69968 8.92163 1.5C4.66765 2.49698 1.5 6.31513 1.5 10.8731C1.5 16.1899 5.8101 20.5 11.1269 20.5C15.6849 20.5 19.503 17.3324 20.5 13.0784Z"
            stroke=""
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
