"use client";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons"
import { useMounted } from "@/hooks/use-mounted";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ToggleTheme() {
  const { theme, themes, setTheme } = useTheme();

  const mounted = useMounted();
  useEffect(() => {
    console.log("Curent theme: ", theme);
    return () => {};
  }, [theme, themes]);
  if (!mounted) return null;
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      id="theme-toggle"
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      {theme === "dark" ? (
       <FontAwesomeIcon icon={faMoon} />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
    </button>
  );
}
