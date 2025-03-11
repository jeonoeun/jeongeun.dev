"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdSunny } from "react-icons/md";
import { IoMdDesktop } from "react-icons/io";
import { RiMoonClearFill } from "react-icons/ri";

type Theme = "system" | "light" | "dark";

export default function DarkModeToggle() {
  const getInitialTheme = (): Theme => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "system";
    }
    return "system";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const applyTheme = (mode: Theme) => {
      if (mode === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else if (mode === "light") {
        document.documentElement.setAttribute("data-theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", getSystemTheme());
      }
    };

    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    console.log("Updated theme:", theme);
  }, [theme]);

  const icons = [
    { type: "light", icon: <MdSunny size={16} /> },
    { type: "system", icon: <IoMdDesktop size={16} /> },
    { type: "dark", icon: <RiMoonClearFill size={16} /> },
  ];

  const selectedIndex = icons.findIndex(({ type }) => type === theme);

  return (
    <div className="flex items-center justify-between rounded-full p-[2px] w-[105px] h-[37px] relative border">
      <motion.div
        className="absolute w-[31px] h-[31px] rounded-full bg-[#E6E6E6] dark:bg-[#292929]"
        initial={{ x: selectedIndex * 34 }}
        animate={{ x: selectedIndex * 34 }}
        transition={{ type: "spring", stiffness: 700, damping: 50 }}
      />

      {icons.map(({ type, icon }) => (
        <button
          key={type}
          onClick={() => setTheme(type as Theme)}
          className={`w-[31px] h-[31px] flex items-center justify-center rounded-full relative z-10 text-[#171717] dark:text-[#EDEDED] hover:opacity-100 transition duration-150 cursor-pointer ${
            theme === type ? "opacity-100" : "opacity-60"
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
