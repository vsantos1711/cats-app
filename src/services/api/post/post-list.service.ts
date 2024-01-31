import { api } from "../api";

export const postList = async (): Promise<any[]> => {
  const { data } = await api.get("/post/findAll");
  return data;
};
