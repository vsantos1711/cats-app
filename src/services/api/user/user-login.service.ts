"use server";
import { api } from "../api";
import { cookies } from "next/headers";

type UserLoginPayload = {
  username: string;
  password: string;
};

export const userLogin = async (payload: UserLoginPayload) => {
  const { data } = await api.post("/auth/login", payload);
  cookies().set("username", data.username);
  cookies().set("token", data.access_token);
};
