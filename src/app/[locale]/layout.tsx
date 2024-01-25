import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";
import Providers from "@/providers/provider";
import Footer from "@/components/footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { pick } from "lodash";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "900"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Cats",
  description: "A social media for cats",
  icons: {
    icon: "/svg/cat-full-walk.svg",
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
          <NextIntlClientProvider messages={pick(messages, "Header")}>
            <Header />
          </NextIntlClientProvider>

          {children}
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
