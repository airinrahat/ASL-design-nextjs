import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const defaultLocale = "en";
  const supportedLocales = ["en", "bn"];

  // চেক করুন যে locale সেট করা আছে কি না
  const locale = supportedLocales.find((loc) => pathname.startsWith(`/${loc}`));

  if (!locale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
}
