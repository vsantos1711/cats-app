"use server";
import { cookies } from "next/headers";

export const userLogout = async () => {
  cookies().set("username", "");
  cookies().set("token", "");
};
