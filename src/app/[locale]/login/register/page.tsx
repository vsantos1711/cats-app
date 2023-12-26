import { Link } from "@/navigation";
import Image from "next/image";
import registerCat from "@/assets/img/cat-eleven.jpg";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

export default function RegisterPage() {
  return (
    <div className="dark:bg-slate-700 min-h-screen dark:text-slate-100 ">
      <div className="flex w-full">
        <div className="relative h-screen md:w-1/2">
          <Image
            src={registerCat}
            alt="A golden cat"
            fill
            className="object-cover animate-fade-in  dark:border-none shadow-lg"
          />
        </div>
        <div className="flex flex-col md:w-1/2 w-full p-8 gap-5 justify-center">
          <h1 className="text-5xl font-semibold text-start w-full">
            Cadastre-se
          </h1>
          <form className="w-full pb-5">
            <Input label="Usuário" id="text" type="text" />
            <Input label="Email" id="email" type="email" />
            <Input label="Senha" id="password" type="password" />
            <div className="flex justify-between max-w-[450px]">
              <Button type="submit" variant="secondary" size="md">
                Cadastrar
              </Button>
              <Link href="/login">
                <Button type="submit" variant="primary" size="md">
                  Fazer login
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
