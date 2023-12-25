import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex flex-col pt-10 items-center min-h-screen gap-4">
      <h1 className="sm:text-4xl text-2xl font-bold text-center ">
        404: Página não encontrada
      </h1>
      <Image
        src="/svg/status/not-found.svg"
        alt="Cat walking"
        width={600}
        height={600}
      />
      <p className="sm:text-2xl text-lg font-bold text-center max-w-[700px]">
        Ops! Parece que um gato curioso passou por aqui e levou essa página!
        Estamos rastreando suas pegadas. 🐱🐾
      </p>
      <Link href="/" className="text-2xl">
        Voltar para casa
      </Link>
    </div>
  );
}
