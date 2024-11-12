"use server";
import { api } from "../api";
import { cookies } from "next/headers";

type PostCommentPayload = {
  comment: string;
};

export const postAddComment = async (
  payload: PostCommentPayload,
  id: string
) => {
  const token = cookies().get("token")?.value;
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
