import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_KEY, TOKEN } from "lib/auth";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/diary")) {
    const token = req.cookies.get(COOKIE_KEY)?.value;
    if (token !== TOKEN) {
      const url = req.nextUrl.clone();
      url.pathname = "/unlock";
      url.searchParams.set("redirect", pathname);
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/diary/:path*"],
};
