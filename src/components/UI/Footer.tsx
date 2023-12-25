import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="flex h-14 border justify-center items-center bg-gray-100 dark:bg-gray-800 dark:border-none">
      <p className="text-gray-600 dark:text-gray-400">
        {t("text")}
        <a
          href="https://github.com/vsantos1711"
          target="_blank"
          className="font-bold"
        >
          Vinícius Santos
        </a>
      </p>
    </footer>
  );
}
