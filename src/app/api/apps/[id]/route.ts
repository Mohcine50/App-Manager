import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: any }) {
	const { id } = params;

	const app = await prisma.app.findUnique({
		where: {
			id,
		},
		include: {
			Console: true,
		},
	});

	return new Response(JSON.stringify(app), {
		status: 200,
	});
}

export async function PUT(req: NextRequest, { params }: { params: any }) {
	const { id } = params;
	const jsonReq = await req.json();

	const { name, packageName, status, account } = jsonReq;

	try {
		const app = await prisma.app.update({
			where: {
				id,
			},
			data: {
				name,
				packageName,
				status,
				Console: {
					connect: {
						id: account,
					},
				},
			},
		});
		return new Response(JSON.stringify({ message: "update Success" }), {
			status: 200,
		});
	} catch (error) {
		return new Response(JSON.stringify({ error }), {
			status: 400,
		});
	}
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: any }
) {
	const { id } = params;

	const app = await prisma.app.findUnique({
		where: {
			id,
		},
	});

	if (!app) {
		throw new Response(JSON.stringify({ message: "app not found" }), {
			status: 204,
		});
	}
	const deleted = await prisma.app.delete({
		where: { id },
	});
	console.log(deleted);
	return new Response(JSON.stringify({ message: "delete Success" }), {
		status: 202,
	});
}
