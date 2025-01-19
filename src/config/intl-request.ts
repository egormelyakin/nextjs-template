import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

const determineLocale = async (locales: string[], defaultLocale: string) => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value;

  if (locale && locales.includes(locale)) {
    return locale;
  }

  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language");
  const preferredLocale = acceptLanguage?.split(",")[0].split("-")[0];

  if (preferredLocale && locales.includes(preferredLocale)) {
    return preferredLocale;
  }

  return defaultLocale;
};

export default getRequestConfig(async () => {
  const locale = await determineLocale(["en", "ru"], "en");

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
