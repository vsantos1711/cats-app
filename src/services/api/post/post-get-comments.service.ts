import { IComment } from "@/types/post";
import { api } from "../api";
import { useQuery } from "@tanstack/react-query";

export const postGetComments = async (id: string): Promise<IComment[]> => {
  const { data } = await api.get(`/post/listComments/${id}`);
  return data;
};

export function useFetchPostComments(id: string) {
  return useQuery({
    queryKey: ["postComments", id],
    queryFn: () => postGetComments(id),
  });
}
