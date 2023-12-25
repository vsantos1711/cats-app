import { redirect } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "pt"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) redirect("/");

  return {
    messages: (await import(`./dictionaries/${locale}.json`)).default,
  };
});
