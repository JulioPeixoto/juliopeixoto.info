"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import styles from "@/app/styles/ui/ThemeSwitch.module.scss";
import clsx from "clsx";

// Definição do tipo de tema
type Theme = "light" | "dark";
type ThemeContextType = [Theme, (theme: Theme) => void];

export const ThemeContext = createContext<ThemeContextType>(null as any);

function Theme() {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <button
      aria-label="Switch theme"
      className={styles.container}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <FiSun size="32px" /> : <FiMoon size="32px" />}
    </button>
  );
}

function getStoredTheme(): Theme {
  const storedTheme = localStorage.getItem("theme") as Theme;
  return storedTheme ? storedTheme : "light";
}

export function ThemeProvider(props: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedTheme = getStoredTheme();
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (!storedTheme) {
      setTheme(prefersDarkMode ? "dark" : "light");
    } else {
      setTheme(storedTheme);
    }

    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);

  if (!isMounted) return null;

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className={clsx(theme && `theme--${theme}`)}>{props.children}</div>
    </ThemeContext.Provider>
  );
}

export default Theme;
