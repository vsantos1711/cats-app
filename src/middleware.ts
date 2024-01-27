import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get("token")?.value;
  console.log("userToken", userToken);

  return i18n(request);
}

const i18n = createMiddleware({
  locales: ["en", "pt"],

  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|pt)/:path*"],
};
