import { PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../utils/prismaClient";

export async function GET(req: Request) {
	const data = await prisma.data.findMany({
		include: {
			subData: true,
			App: true,
		},
	});
	return NextResponse.json({ data });
}
