import { Link } from "@/navigation";
import Logo from "./Logo";
import ButtonTheme from "../ButtonTheme";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");
  return (
    <header className="flex border h-14 bg-gray-100 relative dark:border-none dark:bg-gray-800 transition duration-300">
      <nav className="container flex justify-between items-center text-gray-800 dark:text-gray-200 ">
        <Link href="/">
          <Logo size="sm" />
        </Link>
        <Link href={`/login`} className="text-lg font-medium">
          {t("text")}
        </Link>
      </nav>
      <ButtonTheme />
    </header>
  );
}
