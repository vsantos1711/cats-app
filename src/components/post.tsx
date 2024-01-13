import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { FaEye } from "react-icons/fa";
import { PostData } from "./feed";
import { userAgent } from "next/server";

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
      <div className="flex flex-col md:flex-row rounded overflow-hidden m-3 w-[890px] h-[570px] bg-[#f0f0f0]">
        <div className="relative md:w-[65%] md:min-h-full min-h-[65%]">
          <Image alt="cat" src={post.url} fill objectFit="cover" />
        </div>
        <div className="flex flex-col flex-1 gap-2 px-5 py-6"></div>
      </div>
    </div>
  );
}
