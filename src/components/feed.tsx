"use client";

import Photo from "./Photo";
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
  age?: number;
  breed?: string;
  weight?: number;
};

type Photo = {
  url: string | StaticImageData;
  views: string;
  author?: string;
  catInfos?: CatInfos;
  comments?: Comment[];
  variant?: "top-right" | "top-left" | "bot-right" | "bot-left" | undefined;
};

export default function Feed() {
  const itemsPageOne: Photo[] = [
    {
      url: catSix,
      views: "123123",
      author: "John Doe",
      catInfos: {
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
      views: "1233",
      author: "Mary may",
      catInfos: {
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
      views: "1233",
      author: "Mary may",
      catInfos: {
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
      views: "1233",
      author: "Mary may",
      catInfos: {
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
      views: "1233",
      author: "Mary may",
      catInfos: {
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
      views: "1233",
      author: "Little Dracula",
      catInfos: {
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

  const [selectedImage, setSelectedImage] = useState<string | StaticImageData>(
    ""
  );

  const handleImageClick = (url: string | StaticImageData) => {
    setSelectedImage(url);
  };

  const closeImage = () => {
    setSelectedImage("");
  };

  return (
    <main className="container flex flex-col gap-4 pt-2">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {itemsPageOne.map((photo: Photo, index) => (
          <Photo
            url={photo.url}
            views={photo.views}
            variant={photo.variant}
            key={index}
            clickEvent={() => handleImageClick(photo.url)}
          />
        ))}
      </div>

      {selectedImage && <Post url={selectedImage} onclick={closeImage} />}
    </main>
  );
}
