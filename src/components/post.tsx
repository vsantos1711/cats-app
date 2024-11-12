import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRef } from "react";
import { FaEye } from "react-icons/fa";
import { useFetchPostComments } from "@/services/api/post/post-get-comments.service";

const Root = ({
  children,
  onclick,
}: {
  children: React.ReactNode;
  onclick: () => void;
}) => {
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
      <div
        className="flex flex-col md:flex-row rounded overflow-scroll 
      md:overflow-hidden m-3 w-[900px] h-[600px] bg-[#f0f0f0] dark:bg-slate-600 "
      >
        {children}
      </div>
    </div>
  );
};

const ImageWrapper = ({ url }: { url: string }) => {
  return (
    <img
      alt="cat"
      src={url}
      className="object-cover w-full md:w-[62%] h-[50%] sm:min-h-full "
    />
  );
};

const InfoWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-around flex-1 h-full p-5">
      {children}
    </div>
  );
};

const LinkWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between w-full mb-4 text-sm text-gray-400 dark:text-gray-300">
      {children}
    </div>
  );
};

const Author = ({ author }: { author: string }) => {
  return (
    <Link
      className="underline hover:text-blue-700 dark:hover:text-white"
      href="#"
    >
      @{author}
    </Link>
  );
};

const Views = ({ views }: { views: string | number }) => {
  return (
    <p className="flex items-center gap-1 ">
      <FaEye size={15} />
      <span>{views}</span>
    </p>
  );
};

const TitleWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-end justify-between mb-2 ">{children}</div>;
};

const Title = ({ title }: { title: string }) => {
  return <h2 className="text-3xl text-decoration">{title}</h2>;
};

const CatBread = ({ catBread }: { catBread: string }) => {
  return (
    <div className="flex items-center gap-1 text-end ">
      <p className="text-sm text-gray-400 text-nowrap ">
        Breed:{" "}
        <span className="text-black dark:text-white ">{catBread ?? "N/A"}</span>
      </p>
    </div>
  );
};

const CatInfoWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-4 ">{children}</div>;
};

const CatInfo = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-sm text-gray-400 ">
        {label}: <span className="text-black dark:text-white ">{value}</span>
      </p>
    </div>
  );
};

const CommentsWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <ScrollArea className="p-1 py-5 rounded-md h-60 sm:py-2 sm:h-80">
        {children}
      </ScrollArea>
    </div>
  );
};

const Comments = ({ id }: { id: string }) => {
  const fetchPostComments = useFetchPostComments(id);

  if (fetchPostComments.isLoading) return <p>Loading comments...</p>;
  if (fetchPostComments.error) return <p>Error loading comments</p>;

  return fetchPostComments?.data?.map((comment) => (
    <p key={comment.id} className="my-0.5 font-semibold ">
      {comment.author.username}:{" "}
      <span className="font-light"> {comment.text}</span>
    </p>
  ));
};

export const Post = {
  Root,
  ImageWrapper,
  InfoWrapper,
  LinkWrapper,
  Author,
  Views,
  TitleWrapper,
  Title,
  CatBread,
  CatInfoWrapper,
  CatInfo,
  CommentsWrapper,
  Comments,
};
