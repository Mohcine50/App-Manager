import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(
	request: NextApiRequest,
	response: NextApiResponse,
	{ params }: { params: { id: number } }
) {
	const { id } = params;
	const console = prisma.console.findUnique({
		where: {
			id,
		},
	});

	if (!console) {
		response.status(401).json({ message: "No console found" });
	}
}
