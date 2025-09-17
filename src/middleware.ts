import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "../i18n/routing";

// 1. Create the next-intl middleware
const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  // Run next-intl middleware first
  const response = intlMiddleware(request);

  // If next-intl returned a response (e.g. redirect to default locale), use it
  if (response) {
    return response;
  }

  // Otherwise, continue request with your custom header
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Merge both matchers into one
export const config = {
  matcher: [
    // Run intl middleware on all paths except:
    // - api routes
    // - Next.js internals
    // - any path containing a dot (static files like .png, .svg, .css, .js, fonts, etc.)
    "/((?!api|_next|.*\\..*).*)",
    "/",
  ],
};
