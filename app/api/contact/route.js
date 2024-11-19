import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request) {
	const data = await request.json();

	try {
		// Process contact form submission
		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
