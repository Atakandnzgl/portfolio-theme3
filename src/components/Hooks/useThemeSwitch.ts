import React, { useState, useEffect } from "react";

export function useThemeSwitch(): [string, (mode: string) => void] {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        return check;
      } else {
        setMode(mediaQuery.matches ? "dark" : "light");
        window.localStorage.setItem(
          "theme",
          mediaQuery.matches ? "dark" : "light"
        );
        if (mediaQuery.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    }

    if (mode === "light") {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [mode]);

  return [mode, setMode];
}
