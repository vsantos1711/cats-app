import { useQueryClient, useMutation } from "@tanstack/react-query";
import { api } from "../api";
import { useGetCookieValue } from "@/utils/hooks/use-cookies";

type PostCommentPayload = {
  comment: string;
};

const addComment = async (payload: PostCommentPayload, id: string) => {
  const token = await useGetCookieValue("token");
  const { data } = await api.post(
    `/post/comment/${id}`,
    { text: payload.comment },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const useAddComment = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: PostCommentPayload) => addComment(payload, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postComments"] });
    },
  });
};
