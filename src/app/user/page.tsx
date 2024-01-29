import { cookies } from "next/headers";
import Logout from "@/components/logout";
import Unauthorized from "@/components/unauthorized";
import { ToggleTheme } from "@/components/toggleTheme";

export default async function UserPage() {
  let userData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/profile`,
    {
      headers: {
        Authorization: `Bearer ${cookies().get("token")?.value}`,
      },
    }
  );

  if (userData.status === 401) {
    return <Unauthorized />;
  }

  const { username } = await userData.json();

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
