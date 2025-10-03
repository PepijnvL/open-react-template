import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of test/development routes that should be blocked in production
const testRoutes = [
  '/animations-test',
  '/component-test',
  '/graphics-library',
  '/gumloop-animated',
  '/gumloop-components',
  '/gumloop-extracts',
  '/gumloop-graphics',
  '/gumloop-inspired',
  '/gumloop-inspired2',
  '/gumloop-inspired3',
  '/landing-v2',
  '/landing-v3',
  '/landing-v4',
  '/landing-v5',
  '/landing-v6',
  '/landing-v7',
  '/magicui-demo',
  '/reactflow',
  '/tools-demo',
  '/workflow-builder',
  '/workflow-demo',
  '/workflow-demo-v2',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only block test routes in production
  if (process.env.NODE_ENV === 'production') {
    // Check if the current path matches any test route
    if (testRoutes.some(route => pathname.startsWith(route))) {
      // Redirect to homepage
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
