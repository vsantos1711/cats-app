import Link from "next/link";
import Logo from "./Logo";
import ButtonTheme from "./ButtonTheme";

export default function Header() {
  return (
    <header className="flex border h-14 bg-gray-100 relative dark:border-none dark:bg-gray-800">
      <nav className="container flex justify-between items-center text-gray-800 dark:text-gray-200">
        <Link href="/">
          <Logo size="sm" />
        </Link>
        <Link href="/login" className="text-lg font-medium">
          Entrar/ Criar
        </Link>
      </nav>
      <ButtonTheme />
    </header>
  );
}
