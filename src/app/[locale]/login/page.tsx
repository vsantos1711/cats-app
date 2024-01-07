import { Link } from "@/navigation";
import Image from "next/image";
import mainCat from "@/assets/img/main-cat.jpg";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import LoginForm from "@/components/loginForm";
import pick from "lodash/pick";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function LoginPage() {
  const t = useTranslations("LoginPage");
  const messages = useMessages();

  return (
    <div className="min-h-screen transition duration-300 dark:bg-slate-700 dark:text-slate-100">
      <div className="flex w-full">
        <div className="relative h-screen md:w-1/2 ">
          <Image
            src={mainCat}
            alt="A golden cat"
            fill
            className="object-cover shadow-lg animate-fade-in dark:border-none"
          />
        </div>

        <div className="flex flex-col justify-center gap-5 p-8 md:w-1/2">
          <h1 className="w-full text-5xl font-semibold text-start">
            {t("title")}
          </h1>

          <NextIntlClientProvider messages={pick(messages, "LoginPage")}>
            <LoginForm />
          </NextIntlClientProvider>

          <Link
            href="login/recovery"
            className="mb-10 font-normal text-gray-500 hover:underline decoration-solid max-w-fit dark:text-gray-200"
          >
            {t("link")}
          </Link>

          <div className="flex flex-col w-full gap-4">
            <h2 className="w-full text-3xl font-semibold text-start">
              {t("title-two")}
            </h2>
            <p className="font-normal">{t("text")}</p>
            <Link href="login/register">
              <Button variant="tertiary">{t("button-two")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
