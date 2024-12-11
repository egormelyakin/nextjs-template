"use client";

import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

const ThemeSwitcher: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <button disabled>Switch Theme</button>;

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "Set to Light" : "Set to Dark"}
    </button>
  );
};

export default ThemeSwitcher;
