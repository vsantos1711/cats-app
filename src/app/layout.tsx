import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/header";
import Providers from "@/providers/provider";
import Footer from "@/components/footer";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${poppins.className} dark:bg-slate-700`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
