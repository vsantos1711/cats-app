"use server";
import { cookies } from "next/headers";

export async function useGetCookieValue(cookieName: string) {
  const allCookies = cookies().getAll();
  const cookie = allCookies.find((cookie) => cookie.name === cookieName);
  return cookie ? cookie.value : null;
}
