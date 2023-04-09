import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Abilities from "./Abilities";
import Contact from "./Contact";
import useTheme from "../../components/hooks/darkTheme";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function Layout() {
  const { changeDocumentTheme, theme, handleThemeButton } = useTheme();

  useEffect(() => {
    changeDocumentTheme();
  }, [theme]);

  return (
    <div className="min-h-screen bg-neutral-300 dark:bg-slate-800 dark:text-white">
      <button
        onClick={() => handleThemeButton()}
        className="absolute right-[50px] top-[20px] lg:right-[150px] lg:top-[20px]"
      >
        {theme === "light" ? (
          <BsFillSunFill className="w-[24px] h-[27px]" />
        ) : (
          <BsFillMoonFill className="w-[24px] h-[27px]" />
        )}
      </button>
      <Presentation />
      <Projects />
      <Abilities />
      <Contact />
    </div>
  );
}
