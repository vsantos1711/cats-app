import RegisterForm from "@/components/registerForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen transition duration-300 dark:bg-slate-700 dark:text-slate-100">
      <div className="flex w-full">
        <div className="relative w-0 h-screen md:w-1/2">
          <img
            src="https://cdn2.thecatapi.com/images/nqS9tUT3i.jpg"
            alt="a big cat image"
            className="object-cover w-full h-screen rounded"
          />
        </div>
        <div className="flex flex-col justify-center w-full gap-5 p-8 md:w-1/2">
          <h1 className="w-full text-5xl font-semibold text-start">
            Cadastre-se
          </h1>
          <RegisterForm />
          <Link
            href="/login"
            className="mb-10 font-normal text-gray-500 underline hover:text-gray-700 decoration-solid max-w-fit dark:text-gray-200 dark:hover:text-gray-400 "
          >
            Já possui uma conta? Acesse o site.
          </Link>
        </div>
      </div>
    </div>
  );
}
