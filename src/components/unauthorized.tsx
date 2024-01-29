import Logout from "./logout";

export default function Unauthorized() {
  return (
    <main className="container min-h-screen py-5 transition duration-300">
      <h1 className="text-4xl font-light max-w-fit ">
        Você não tem permissão para acessar essa página
      </h1>
      <div className="flex items-center gap-1 text-2xl">
        clique aqui {"->"} <Logout />
      </div>
    </main>
  );
}
