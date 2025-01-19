"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

const ThemeSwitcher: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations("Theme Switcher");

  useEffect(() => setMounted(true), []);
  if (!mounted) return <button disabled>{t("switch_theme")}</button>;

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? t("set_light") : t("set_dark")}
    </button>
  );
};

export default ThemeSwitcher;
