import RecoveryForm from "@/components/recoveryForm";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import { pick } from "lodash";
import { Link } from "@/navigation";

export default function RecoveryPage() {
  const t = useTranslations("RecoveryPage");
  const messages = useMessages();
  return (
    <div className="min-h-screen transition duration-300 dark:bg-slate-700 dark:text-slate-100">
      <div className="flex w-full">
        <div className="relative h-screen md:w-1/2">
          <img
            src="https://cdn2.thecatapi.com/images/35ayLP9Ql.jpg"
            alt="a big cat image"
            className="object-cover w-full h-screen rounded"
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
