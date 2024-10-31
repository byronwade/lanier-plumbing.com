import { NextResponse } from "next/server";

export function middleware(request) {
	const response = NextResponse.next();

	// Add security headers
	response.headers.set("X-DNS-Prefetch-Control", "on");
	response.headers.set("Strict-Transport-Security", "max-age=63072000");

	// Add caching headers for static assets
	if (request.nextUrl.pathname.startsWith("/_next/static")) {
		response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
	}

	return response;
}
