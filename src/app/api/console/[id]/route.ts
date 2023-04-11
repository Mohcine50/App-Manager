import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(
	request: NextApiRequest,
	response: NextApiResponse,
	{ params }: { params: { id: string } }
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

export async function DELETE(
	request: NextApiRequest,
	{ params }: { params: any }
) {
	const { id } = params;

	const console = await prisma.console.findUnique({
		where: {
			id,
		},
	});

	if (!console) {
		throw new Response(JSON.stringify({ message: "console not found" }), {
			status: 204,
		});
	}
	const deleted = await prisma.console.delete({
		where: { id },
	});

	return new Response(JSON.stringify({ message: "delete Success" }), {
		status: 202,
	});
}

export async function PUT(req: NextApiRequest) {}
