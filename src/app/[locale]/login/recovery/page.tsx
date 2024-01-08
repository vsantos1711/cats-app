import Image from "next/image";
import registerCat from "@/assets/img/cat-eight.jpg";
import RecoveryForm from "@/components/recoveryForm";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import { pick } from "lodash";

export default function RecoveryPage() {
  const t = useTranslations("RecoveryPage");
  const messages = useMessages();
  return (
    <div className="min-h-screen transition duration-300 dark:bg-slate-700 dark:text-slate-100">
      <div className="flex w-full">
        <div className="relative h-screen md:w-1/2">
          <Image
            src={registerCat}
            alt="A golden cat"
            fill
            className="object-cover shadow-lg animate-fade-in dark:border-none"
          />
        </div>
        <div className="flex flex-col justify-center w-full gap-5 p-8 md:w-1/2">
          <h1 className="w-full text-5xl font-semibold text-start">
            {t("title")}
          </h1>
          <NextIntlClientProvider messages={pick(messages, "RecoveryPage")}>
            <RecoveryForm />
          </NextIntlClientProvider>
        </div>
      </div>
    </div>
  );
}
