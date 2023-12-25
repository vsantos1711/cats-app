import Link from "next/link";
import Logo from "./Logo";
import ButtonTheme from "./ButtonTheme";

export default function Header() {
  return (
    <header className="py-2 border flex px-10">
      <nav className="container flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <Link href="/login" className="text-lg">
          Login/ Criar
        </Link>
      </nav>
      <ButtonTheme />
    </header>
  );
}
