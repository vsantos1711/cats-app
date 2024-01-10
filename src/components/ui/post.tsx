import Image from "next/image";

export default function Post({ url, onclick }: any) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/1"
      onClick={onclick}
    >
      <div className="flex flex-col items-center justify-center p-4 rounded bg-slate-400">
        <h1>Post</h1>
        <Image src={url} alt="cat" width={300} height={300} />
      </div>
    </div>
  );
}
