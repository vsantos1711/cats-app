import Image from "next/image";
import registerCat from "@/assets/img/cat-eight.jpg";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import { useTranslations } from "next-intl";

export default function RecoveryPage() {
  const t = useTranslations("RecoveryPage");
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
            {t("title")}
          </h1>
          <form className="w-full pb-5">
            <Input label={t("label-one")} id="email" type="email" />
            <div className="flex justify-between max-w-[450px]">
              <Button type="submit" variant="secondary" size="md">
                {t("button")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
