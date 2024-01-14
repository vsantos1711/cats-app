import { StaticImageData } from "next/image";

type Comment = {
  id: number;
  author: string;
  text: string;
};

type CatInfos = {
  name: string;
  age?: number;
  breed?: string;
  weight?: number;
};

export type PostData = {
  url: string | StaticImageData;
  views: string;
  author?: string;
  catInfos: CatInfos;
  comments?: Comment[];
  variant?: "top-right" | "top-left" | "bot-right" | "bot-left" | undefined;
};
