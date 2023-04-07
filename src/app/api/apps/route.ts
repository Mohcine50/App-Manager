import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(req: Request) {
	const apps = await prisma.app.findMany({
		include: {
			Console: {
				select: {
					name: true,
				},
			},
		},
	});
	return NextResponse.json({ apps });
}
