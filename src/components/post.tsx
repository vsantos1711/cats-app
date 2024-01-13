import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { FaEye } from "react-icons/fa";

type PostProps = {
  url: string | StaticImageData;
  onclick: () => void;
  views?: string | number;
};

export default function Post({ url, onclick, views = 1231234 }: PostProps) {
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
      <div className="flex items-center justify-center max-w-[500px] max-h-[500px] rounded bg-slate-400 overflow-hidden m-2.5 ">
        <div className="relative min-w-[400px] min-h-[450px]">
          <Image src={url} alt="cat" fill className="object-cover" />
        </div>
        <div>
          <div>
            <p className="text-sm font-bold text-white">Cat</p>
            <p className="flex gap-1 text-sm font-medium text-white">
              <FaEye size={20} />
              <span>{views}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
