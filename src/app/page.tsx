import LocaleSwitcher from "components/locale-switcher";
import ThemeSwitcher from "components/theme-switcher";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div>
      <ThemeSwitcher />
      <LocaleSwitcher />
      <p className="text-xl">{t("hello_world")}</p>
    </div>
  );
}
