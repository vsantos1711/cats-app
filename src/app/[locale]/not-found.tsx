import Image from "next/image";
import Link from "next/link";
import notFound from "@/assets/svg/not-found.svg";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");
  return (
    <div className="py-10 min-h-screen dark:bg-slate-700">
      <div className="container flex flex-col items-center gap-4">
        <h1 className="sm:text-4xl text-2xl font-bold text-center ">
          {t("title")}
        </h1>
        <Image src={notFound} alt="Cat walking" width={600} height={600} />
        <p className="sm:text-2xl text-lg font-bold text-center max-w-[700px]">
          {t("message")}
        </p>
        <Link href="/" className="text-2xl underline">
          {t("button")}
        </Link>
      </div>
    </div>
  );
}
