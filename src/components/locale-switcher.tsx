"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FC } from "react";

const LocaleSwitcher: FC = () => {
  const t = useTranslations("Locale Switcher");
  const router = useRouter();
  const locale = useLocale();

  const switchLocale = (locale: string) => {
    document.cookie = `locale=${locale}`;
    router.refresh();
  };

  return (
    <select value={locale} onChange={(e) => switchLocale(e.target.value)}>
      <option value="en">{t("en")}</option>
      <option value="ru">{t("ru")}</option>
    </select>
  );
};

export default LocaleSwitcher;
