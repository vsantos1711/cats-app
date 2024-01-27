import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const userToken = req.cookies.get("token")?.value;

  const isAuth = !!userToken;
  if (req.nextUrl.pathname.startsWith("/user") && !isAuth) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/login") && isAuth) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
