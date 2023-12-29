import { Link } from "@/navigation";
import Image from "next/image";
import registerCat from "@/assets/img/cat-eleven.jpg";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import { useTranslations } from "next-intl";

export default function RegisterPage() {
  const t = useTranslations("RegisterPage");
  return (
    <div className="dark:bg-slate-700 min-h-screen dark:text-slate-100 transition duration-300">
      <div className="flex w-full">
        <div className="relative h-screen md:w-1/2">
          <Image
            placeholder="blur"
            src={registerCat}
            alt="A golden cat"
            fill
            className="object-cover animate-fade-in  dark:border-none shadow-lg"
          />
        </div>
        <div className="flex flex-col md:w-1/2 w-full p-8 gap-5 justify-center">
          <h1 className="text-5xl font-semibold text-start w-full">
            {t("title")}
          </h1>
          <form className="w-full pb-5">
            <Input label={t("label-one")} id="text" type="text" />
            <Input label={t("label-two")} id="email" type="email" />
            <Input label={t("label-three")} id="password" type="password" />
            <div className="flex justify-between max-w-[450px] mb-5">
              <Button type="submit" variant="secondary" size="md">
                {t("button")}
              </Button>
            </div>
            <Link
              href="/login"
              className="font-normal underline decoration-solid mb-10 max-w-fit text-gray-500 dark:text-gray-200"
            >
              {t("link")}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
