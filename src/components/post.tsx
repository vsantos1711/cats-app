import { PostData } from "@/types/post";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { FaEye } from "react-icons/fa";

type PostProps = {
  post: PostData;
  url?: string | StaticImageData;
  onclick: () => void;
  views?: string | number;
};

export default function Post({ post, onclick }: PostProps) {
  const outerDivRef = useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === outerDivRef.current) {
      onclick();
    }
  };

  return (
    <div
      ref={outerDivRef}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/1"
      onClick={handleClick}
    >
      <div className="flex flex-col md:flex-row rounded overflow-hidden m-3 w-[900px] h-[600px] bg-[#f0f0f0]">
        <div className="relative md:w-[62%] md:min-h-full min-h-[65%]">
          <Image alt="cat" src={post.url} fill objectFit="cover" />
        </div>
        <div className="flex flex-col flex-1 gap-2 px-5 py-6">
          <div className="flex justify-between w-full mb-4 text-sm text-gray-400">
            <p className="underline">@{post.author}</p>
            <p className="flex items-center gap-1 ">
              <FaEye size={15} />
              <span>{post.views}</span>
            </p>
          </div>
          <div className="flex items-end justify-between mb-2 ">
            <h2 className="text-3xl text-decoration">{post.catInfos.name}</h2>
            <div className="flex items-center gap-1 text-end ">
              <p className="text-sm text-gray-400 ">
                Breed:{" "}
                <span className="text-black">
                  {post.catInfos.breed ?? "N/A"}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-1 ">
              <p className="text-sm text-gray-400 ">
                Years: <span className="text-black">{post.catInfos.age}</span>
              </p>
            </div>

            <div className="flex items-center gap-1">
              <p className="text-sm text-gray-400 ">
                Weight:{" "}
                <span className="text-black">{post.catInfos.weight}kg</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {post.comments?.map((comment, index) => (
              <div key={index} className="font-semibold ">
                <p>
                  {comment.author}:{" "}
                  <span className="font-light"> {comment.text}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
