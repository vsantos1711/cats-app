import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

type PostProps = {
  url: string | StaticImageData;
  onclick: () => void;
};

export default function Post({ url, onclick }: PostProps) {
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
      <div className="flex flex-col items-center justify-center p-4 rounded bg-slate-400">
        <h1>Post</h1>
        <Image src={url} alt="cat" width={300} height={300} />
      </div>
    </div>
  );
}
