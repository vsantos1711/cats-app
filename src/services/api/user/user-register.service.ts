"use server";
import { api } from "../api";

type UserRegisterPayload = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const userRegister = async (payload: UserRegisterPayload) => {
  const { data } = await api.post("/user/create", payload);

  return data;
};
