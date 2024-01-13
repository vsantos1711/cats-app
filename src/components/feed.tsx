"use client";

import Photo from "./photo";
import catOne from "../assets/img/cat-one.jpg";
import catTwo from "../assets/img/cat-two.jpg";
import catThree from "../assets/img/cat-three.jpg";
import catFour from "../assets/img/cat-four.jpg";
import catFive from "../assets/img/cat-five.jpg";
import catSix from "../assets/img/cat-six.jpg";

import { StaticImageData } from "next/image";
import { useState } from "react";
import Post from "./post";

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

export default function Feed() {
  const itemsPageOne: PostData[] = [
    {
      url: catSix,
      views: "123123",
      author: "John Doe",
      catInfos: {
        name: "Mimi",
        age: 1,
        breed: "Persian",
        weight: 5,
      },
      comments: [
        {
          id: 1,
          author: "Jane Doe",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
      ],
      variant: "top-right",
    },
    {
      url: catTwo,
      views: "0",
      author: "Mary may",
      catInfos: {
        name: "New Jeans",
        age: 2,
        breed: "Persian",
        weight: 2,
      },
      comments: [
        {
          id: 1,
          author: "John Doe",
          text: "It's a nice cat!",
        },
      ],
    },
    {
      url: catThree,
      views: "7533",
      author: "Mary may",
      catInfos: {
        name: "Night Cat",
        age: 2,
        breed: "Persian",
        weight: 2,
      },
      comments: [
        {
          id: 1,
          author: "John Doe",
          text: "It's a nice cat!",
        },
      ],
    },
    {
      url: catFour,
      views: "342",
      author: "Mary may",
      catInfos: {
        name: "Golden",
        age: 2,
        breed: "Persian",
        weight: 2,
      },
      comments: [
        {
          id: 1,
          author: "John Doe",
          text: "It's a nice cat!",
        },
      ],
    },
    {
      url: catFive,
      views: "98787",
      author: "Mary may",
      catInfos: {
        name: "Balerion",
        age: 2,
        breed: "Persian",
        weight: 2,
      },
      comments: [
        {
          id: 1,
          author: "John Doe",
          text: "It's a nice cat!",
        },
      ],
    },
    {
      url: catOne,
      views: "3456",
      author: "Little Dracula",
      catInfos: {
        name: "Drogo",
        age: 2,
        weight: 2,
      },
      comments: [
        {
          id: 1,
          author: "John Doe",
          text: "It's a nice cat!",
        },
      ],
    },
  ];

  const [selectedPost, setSelectedPost] = useState<PostData | null>(null);

  const handleImageClick = (post: PostData) => {
    setSelectedPost(post);
  };

  const closeImage = () => {
    setSelectedPost(null);
  };

  return (
    <main className="container flex flex-col gap-4 pt-2">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {itemsPageOne.map((post: PostData, index) => (
          <Photo
            url={post.url}
            views={post.views}
            variant={post.variant}
            key={index}
            clickEvent={() => handleImageClick(post)}
          />
        ))}
      </div>

      {selectedPost && <Post post={selectedPost} onclick={closeImage} />}
    </main>
  );
}
