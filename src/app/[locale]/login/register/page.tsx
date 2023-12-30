import Image from "next/image";
import registerCat from "@/assets/img/cat-eleven.jpg";
import SignUpForm from "@/components/SignUpForm";
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
          <SignUpForm
            labelOne={t("label-one")}
            labelTwo={t("label-two")}
            labelThree={t("label-three")}
            labelFour={t("label-four")}
            textButton={t("button")}
            textLink={t("link")}
          />
        </div>
      </div>
    </div>
  );
}
