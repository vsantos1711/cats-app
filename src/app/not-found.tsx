import Image from "next/image";
import Link from "next/link";
import notFound from "@/assets/svg/not-found.svg";

export default function NotFound() {
  return (
    <div className="min-h-screen py-10 dark:bg-slate-700">
      <div className="container flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-center sm:text-4xl ">
          404: Página não encontrada
        </h1>
        <Image src={notFound} alt="Cat walking" width={600} height={600} />
        <p className="sm:text-2xl text-lg font-bold text-center max-w-[700px]">
          Ops! Parece que um gato curioso passou por aqui e levou essa página!
          Estamos rastreando suas pegadas. 🐱🐾
        </p>
        <Link href="/" className="text-2xl underline">
          Voltar para casa
        </Link>
      </div>
    </div>
  );
}
