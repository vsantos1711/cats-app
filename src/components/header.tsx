import { Link } from "@/navigation";
import Logo from "./logo";
import { ToggleTheme } from "./toggleTheme";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");
  return (
    <header className="relative flex transition duration-300 bg-gray-100 border h-14 dark:border-none dark:bg-gray-800">
      <nav className="container flex items-center justify-between text-gray-800 dark:text-gray-200 ">
        <Link href="/">
          <Logo size="sm" />
        </Link>
        <Link href={`/login`} className="text-lg font-medium">
          {t("text")}
        </Link>
      </nav>
      <ToggleTheme />
    </header>
  );
}
