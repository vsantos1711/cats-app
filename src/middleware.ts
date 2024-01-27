import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get("token")?.value;
  console.log("userToken", userToken);
}

export const config = {
  matcher: ["/", "/(en|pt)/:path*"],
};
