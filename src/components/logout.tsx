"use client";
import Link from "next/link";
import { userLogout } from "@/services/api/user/user-logout.service";
import { Button } from "./ui/button";
import { ExitIcon } from "@radix-ui/react-icons";

export default function Logout() {
  return (
    <Link onClick={() => userLogout()} href={"/"}>
      <Button variant="destructive" size="icon">
        <ExitIcon className="w-5 h-5" />
      </Button>
    </Link>
  );
}
