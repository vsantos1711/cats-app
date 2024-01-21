export type PostComment = {
  id: number;
  author: string;
  text: string;
};

export type CatInfos = {
  name: string;
  age: string;
  breed: string;
  weight: string;
};

export type PostData = {
  url: string;
  views: string;
  author: string;
  catInfos: CatInfos;
  comments: PostComment[];
  variant?: "top-right" | "top-left" | "bot-right" | "bot-left" | undefined;
};
