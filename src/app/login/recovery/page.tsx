import RecoveryForm from "@/components/recoveryForm";
import Link from "next/link";

export default function RecoveryPage() {
  return (
    <div className="min-h-screen transition duration-300 dark:bg-slate-700 dark:text-slate-100">
      <div className="flex w-full">
        <div className="relative w-0 h-screen md:w-1/2">
          <img
            src="https://cdn2.thecatapi.com/images/35ayLP9Ql.jpg"
            alt="a big cat image"
            className="object-cover w-full h-screen rounded"
          />
        </div>
        <div className="flex flex-col justify-center w-full gap-5 p-8 md:w-1/2">
          <h1 className="w-full text-5xl font-semibold text-start">
            Esqueceu a Senha?
          </h1>
          <RecoveryForm />
          <Link
            href="/login"
            className="mb-10 font-normal text-gray-500 underline hover:text-gray-700 decoration-solid max-w-fit dark:text-gray-200 dark:hover:text-gray-400 "
          >
            Voltar para o login
          </Link>
        </div>
      </div>
    </div>
  );
}
