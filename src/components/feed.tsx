"use client";

import Photo from "./Photo";
import catOne from "../assets/img/cat-one.jpg";
import catTwo from "../assets/img/cat-two.jpg";
import catThree from "../assets/img/cat-three.jpg";
import catFour from "../assets/img/cat-four.jpg";
import catFive from "../assets/img/cat-five.jpg";
import catSix from "../assets/img/cat-six.jpg";
import catSeven from "../assets/img/cat-seven.jpg";
import catEight from "../assets/img/cat-eight.jpg";
import catNine from "../assets/img/cat-nine.jpg";
import catTen from "../assets/img/cat-ten.jpg";

import { useState } from "react";
import Post from "./ui/post";

export default function Feed() {
  const itemsPageOne = [
    {
      url: catOne,
      views: "123123",
      variant: "top-right",
    },
    {
      url: catTwo,
      views: "2387",
    },
    {
      url: catThree,
      views: "2387",
    },
    {
      url: catFour,
      views: "523523",
    },
    {
      url: catFive,
      views: "4242",
    },
    {
      url: catSix,
      views: "234234",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (url: any) => {
    setSelectedImage(url);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <main className="container flex flex-col max-w-screen-xl gap-4 pt-2">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {itemsPageOne.map((item: any, index) => (
          <Photo
            url={item.url}
            views={item.views}
            variant={item.variant}
            key={index}
            clickEvent={() => handleImageClick(item.url)}
          />
        ))}
      </div>

      {selectedImage && <Post url={selectedImage} onclick={closeImage} />}
    </main>
  );
}
