import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  const toggleTheme = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Go to Home"
        title="Go to Home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Go to History"
        title="Go to History"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Settings"
        title="Settings"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        onClick={toggleTheme}
        href="#"
        aria-label="Change Theme"
        title="Change Theme"
      >
        <SunIcon />
      </a>
    </nav>
  );
}
