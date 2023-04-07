import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const test = false;

	if (!test) {
		return NextResponse.json({ message: "user not authorised" });
	}
	return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/api/console/:path*", "/api/apps/:path*"],
};
