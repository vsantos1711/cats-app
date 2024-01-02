import Image from "next/image";
import registerCat from "@/assets/img/cat-eight.jpg";
import { useTranslations } from "next-intl";
import RecoveryAccountForm from "@/components/RecoveryAccountForm";

export default function RecoveryPage() {
  const t = useTranslations("RecoveryPage");
  return (
    <div className="dark:bg-slate-700 min-h-screen dark:text-slate-100 transition duration-300">
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
          <RecoveryAccountForm
            labelOne={t("label-one")}
            labelTwo={t("label-two")}
            placeholderOne={t("placeholder-one")}
            placeholderTwo={t("placeholder-two")}
            textButton={t("button")}
            textButtonTwo={t("button-two")}
          />
        </div>
      </div>
    </div>
  );
}
