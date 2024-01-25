"use client";
import { Link } from "@/navigation";
import Logo from "./logo";
import { ToggleTheme } from "./toggleTheme";
import { useTranslations } from "next-intl";
import { userStore } from "@/store/user-store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  const t = useTranslations("Header");
  const userData = userStore((state) => state.username);
  return (
    <header className="relative flex transition duration-300 bg-gray-100 border h-14 dark:border-none dark:bg-gray-800">
      <nav className="container flex items-center justify-between text-gray-800 dark:text-gray-200 ">
        <Link href="/">
          <Logo size="sm" />
        </Link>
        {userData ? (
          <Link
            href={`/user/${userData}`}
            className="flex items-center gap-2 text-lg font-medium"
          >
            {userData}
            <Avatar>
              <AvatarImage src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        ) : (
          <Link href={`/login`} className="text-lg font-medium">
            {t("text")}
          </Link>
        )}
      </nav>
      <ToggleTheme />
    </header>
  );
}
