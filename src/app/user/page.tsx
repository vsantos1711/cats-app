import { cookies } from "next/headers";
import Logout from "@/components/logout";
import { ToggleTheme } from "@/components/toggleTheme";

export default async function UserPage() {
  let username = cookies().get("username")?.value;

  return (
    <main className="container min-h-screen py-5 transition duration-300">
      <div className="flex justify-between items center">
        <h1 className="text-4xl font-light max-w-fit ">
          Olá, <span className="font-medium text-decoration ">{username}</span>
        </h1>
        <nav>
          <ul className="flex gap-2">
            <li>
              <Logout />
            </li>
            <li>
              <ToggleTheme />
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
