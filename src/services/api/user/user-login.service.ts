import { api } from "../api";

type UserLoginPayload = {
  username: string;
  password: string;
};

export const userLogin = async (payload: UserLoginPayload) => {
  const { data } = await api.post("/auth/login", payload);

  return data;
};
