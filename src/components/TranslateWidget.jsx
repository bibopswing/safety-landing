"use client";

import React, { useState, useEffect } from "react";

const LANGUAGES = [
  { label: "English", value: "en" },
  { label: "Français", value: "fr" },
  { label: "Русский", value: "ru" },
  { label: "Deutsch", value: "de" },
  { label: "Español", value: "es" },
  { label: "한국어", value: "ko" },
  { label: "ไทย", value: "th" },
  { label: "Tiếng Việt", value: "vi" },
  { label: "中文 (简体)", value: "zh-CN" },
  { label: "日本語", value: "ja" },
  { label: "العربية", value: "ar" },
];

export default function TranslateWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("English");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
        },
        "google_translate_element"
      );
    };

    const langCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("googtrans="));
    if (langCookie) {
      const langCode = langCookie.split("/").pop();
      const found = LANGUAGES.find((l) => l.value === langCode);
      if (found) setCurrentLang(found.label);
    }

    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  const changeLanguage = (langCode) => {
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; domain=${window.location.hostname}; path=/`;
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-4 py-2 bg-[#111] text-white border border-gray-600 rounded-full hover:bg-[#222] transition-all notranslate "
      >
        {currentLang}
        <svg
          className="ml-1 w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full bg-[#111] border border-gray-600 rounded-xl text-white shadow-lg notranslate ">
          {LANGUAGES.map((lang) => (
            <li
              key={lang.value}
              onClick={() => changeLanguage(lang.value)}
              className="px-4 py-2 hover:bg-[#222] cursor-pointer rounded-xl"
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}

      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
}
