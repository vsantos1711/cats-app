import { api } from "../api";

type UserRegisterPayload = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const userRegister = async (payload: UserRegisterPayload) => {
  try {
    const { data } = await api.post("/user/create", payload);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
