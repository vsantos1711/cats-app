import { Link } from "@/navigation";
import Image from "next/image";
import mainCat from "@/assets/img/main-cat.jpg";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

export default function LoginPage() {
  return (
    <div className="dark:bg-slate-700 min-h-screen dark:text-slate-100 ">
      <div className="flex w-full">
        <div className="relative h-screen md:w-1/2">
          <Image
            src={mainCat}
            alt="A golden cat"
            fill
            className="object-cover animate-fade-in  dark:border-none shadow-lg"
          />
        </div>
        <div className="flex flex-col md:w-1/2 w-full p-8 gap-5 justify-center">
          <h1 className="text-5xl font-semibold text-start w-full">Login</h1>
          <form className="w-full  pb-5">
            <Input label="Usuário" id="text" type="text" />

            <Input label="Senha" id="password" type="password" />
            <Button type="submit" variant="primary" size="md">
              Entrar
            </Button>
          </form>
          <Link
            href="/"
            className="font-normal underline decoration-solid pb-10 max-w-fit text-gray-500"
          >
            Perdeu a Senha?
          </Link>
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-3xl font-semibold text-start w-full">
              Cadastre-se
            </h2>
            <p className="font-normal">
              Ainda não possui conta? Cadastre-se no site.
            </p>
            <Link href="login/register" className="w-full">
              <Button variant="secondary" size="md">
                Cadastrar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
