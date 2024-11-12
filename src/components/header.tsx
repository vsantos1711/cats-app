import Logo from "./logo";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetCookieValue } from "@/utils/hooks/use-cookies";

export default async function Header() {
  const username = await useGetCookieValue("username");
  return (
    <header className="flex transition duration-300 bg-gray-100 border h-14 dark:border-none dark:bg-gray-800">
      <nav className="container flex items-center justify-between text-gray-800 dark:text-gray-200 ">
        <Link href="/">
          <Logo size="sm" />
        </Link>
        {username ? (
          <Link
            href="/user"
            className="flex items-center gap-3 text-lg font-medium"
          >
            {username}
            <Avatar>
              <AvatarImage src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        ) : (
          <Link href={`/login`} className="text-lg font-medium">
            Entrar/ Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
