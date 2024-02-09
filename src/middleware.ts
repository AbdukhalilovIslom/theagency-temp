import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName } from "@/app/i18n/settings";

// Set the supported languages for acceptLanguage
acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|_next/image|icons|images|assets|favicon.ico|sw.js|static|fonts|videos|sitemap.xml).*)",
  ],
};

export function middleware(req: NextRequest): NextResponse {
  // Skip middleware for specific paths
  if (
    req.nextUrl.pathname.includes("icon") ||
    req.nextUrl.pathname.includes("chrome")
  ) {
    return NextResponse.next();
  }

  let lng: string | null = null;

  // Try to get language from cookie
  if (req.cookies.has(cookieName)) {
    lng = acceptLanguage.get(req.cookies.get(cookieName)!.value);
  }

  // Try to get language from Accept-Language header
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  }

  // Use fallback language if none found
  if (!lng) {
    lng = fallbackLng;
  }

  // Redirect if language in path is not supported
  if (
    !languages.some((loc) =>
      req.nextUrl.pathname.startsWith(`/${loc}`)
    ) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  // Update language cookie based on referer
  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer")!);
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );

    if (lngInReferer) {
      const response = NextResponse.next();
      response.cookies.set(cookieName, lngInReferer);
      return response;
    }
  }

  return NextResponse.next();
}
