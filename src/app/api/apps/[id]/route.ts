import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";

const prisma = new PrismaClient();

export async function GET(
	request: NextApiRequest,
	{ params }: { params: any }
) {
	const { id } = params;

	const app = await prisma.app.findUnique({
		where: {
			id: parseInt(id),
		},
	});

	return new Response(JSON.stringify(app), {
		status: 200,
	});
}

export async function DELETE(
	request: NextApiRequest,
	{ params }: { params: any }
) {
	const { id } = params;

	const app = await prisma.app.findUnique({
		where: {
			id: parseInt(id),
		},
	});

	if (!app) {
		throw new Response(JSON.stringify({ message: "app not found" }), {
			status: 204,
		});
	}
	const deleted = await prisma.app.delete({
		where: { id: parseInt(id) },
	});
	console.log(deleted);
	return new Response(JSON.stringify({ message: "delete Success" }), {
		status: 202,
	});
}
