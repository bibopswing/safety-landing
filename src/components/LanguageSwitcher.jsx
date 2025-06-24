"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import TranslateWidget from "./TranslateWidget";
import Image from "next/image";
import arrow from "../assets/images/select-arrow.svg";

export default function LanguageSwitcher() {
  
  const [isPending, startTransition] = useTransition();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const localActive = useLocale();

  
  const options = [
    { value: "en", label: "EN" },
    { value: "kr", label: "KR" },
  ];

  const onSelectChange = (value) => {
    startTransition(() => {
      router.replace(`/${value}`);
      setIsDropdownOpen(false);
    });
  };

  const renderSelect = () => (
    <select
      defaultValue={localActive}
      className="custom-select"
      onChange={(e) => onSelectChange(e.target.value)}
      disabled={isPending}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  const renderDiv = () => (
    // <div
    //   className="switcher"
    //   onClick={() => setIsDropdownOpen((prev) => !prev)}
    // >
    //   <div className="current-option">
    //     <span className="transform-y-[3px]">
    //       {options.find((option) => option.value === localActive)?.label}
    //     </span>
    //     <Image
    //       style={{ transform: isDropdownOpen ? "rotate(180deg)" : ""}}
    //       src={arrow}
    //       alt="select language arrow"
    //     />
    //   </div>
    //   {isDropdownOpen && (
    //     <div className="dropdown-options">
    //       {options
    //         .filter((option) => option.value !== localActive)
    //         .map((option) => (
    //           <div
    //             key={option.value}
    //             className="option"
    //             onClick={() => onSelectChange(option.value)}
    //             style={{ cursor: "pointer" }}
    //           >
    //             {option.label}
    //           </div>
    //         ))}
    //     </div>
    //   )}
    // </div>

    <TranslateWidget />
  );

  return (
    <>
      
      {renderDiv() }
    </>
  );
}