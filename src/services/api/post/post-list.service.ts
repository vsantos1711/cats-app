import { IPost } from "@/types/post";
import { api } from "../api";

export const postList = async (): Promise<IPost[]> => {
  const { data } = await api.get("/post/findAll");
  return data;
};
