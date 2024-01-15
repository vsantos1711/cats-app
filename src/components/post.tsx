import { PostData } from "@/types/post";
import Image, { StaticImageData } from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { useRef } from "react";
import { FaEye } from "react-icons/fa";
import Logo from "./logo";
import Link from "next/link";

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
      <div className="flex flex-col md:flex-row rounded overflow-scroll md:overflow-hidden m-3 w-[900px] h-[600px] bg-[#f0f0f0] dark:bg-slate-600 ">
        <div className="relative md:w-[62%] md:min-h-full min-h-[65%]">
          <Image alt="cat" src={post.url} fill objectFit="cover" />
        </div>
        <div className="flex flex-col flex-1 gap-2 p-5 ">
          <div className="flex justify-between w-full mb-4 text-sm text-gray-400 dark:text-gray-300">
            <Link
              className="underline hover:text-blue-700 dark:hover:text-white"
              href="#"
            >
              @{post.author}
            </Link>
            <p className="flex items-center gap-1 ">
              <FaEye size={15} />
              <span>{post.views}</span>
            </p>
          </div>
          <div className="flex items-end justify-between mb-2 ">
            <h2 className="text-3xl text-decoration">{post.catInfos.name}</h2>
            <div className="flex items-center gap-1 text-end ">
              <p className="text-sm text-gray-400 text-nowrap ">
                Breed:{" "}
                <span className="text-black dark:text-white ">
                  {post.catInfos.breed ?? "N/A"}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-1 ">
              <p className="text-sm text-gray-400 ">
                Years:{" "}
                <span className="text-black dark:text-white ">
                  {post.catInfos.age}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-1">
              <p className="text-sm text-gray-400 ">
                Weight:{" "}
                <span className="text-black dark:text-white ">
                  {post.catInfos.weight}kg
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 ">
            <ScrollArea className="p-1 rounded-md h-80">
              {post.comments?.map((comment, index) => (
                <p key={index} className="my-0.5 font-semibold ">
                  {comment.author}:{" "}
                  <span className="font-light"> {comment.text}</span>
                </p>
              ))}
            </ScrollArea>
          </div>
          <div className="flex items-center justify-between h-full ">
            <Textarea
              className="p-1 bg-gray-200 rounded w-60 dark:bg-slate-500 dark:border-gray-500"
              placeholder="Add a comment..."
            />
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 transition dark:text-gray-300 hover:bg-transparent hover:text-black dark:hover:text-white dark:hover:bg-transparent"
            >
              <Logo />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
