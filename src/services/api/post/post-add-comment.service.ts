"use server";
import { api } from "../api";
import { cookies } from "next/headers";

type PostCommentPayload = {
  comment: string;
};

export const postAddComment = async (
  payload: PostCommentPayload,
  id: string,
) => {
  const token = cookies().get("token")?.value;

  console.log(`Add the comment: ${payload}`);
  console.log(`On the post with the following id: ${id}`);
  console.log(`Token do usuário que está comentando: ${token}`);

  const { data } = await api.post(
    `/post/comment/${id}`,
    {
      text: payload.comment,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};
