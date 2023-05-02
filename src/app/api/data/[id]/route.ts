import { NextRequest } from "next/server";
import { prisma } from "../../../../../utils/prismaClient";

export async function GET(request: NextRequest, { params }: { params: any }) {
	try {
		const { id } = params;
		const data = await prisma.data.findUnique({
			where: {
				id,
			},
			include: {
				subData: true,
			},
		});

		if (!data) {
			return new Response(JSON.stringify({ message: "data not found" }), {
				status: 204,
			});
		}
		return new Response(JSON.stringify({ data }), {
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

	const Data = await prisma.data.findUnique({
		where: {
			id,
		},
	});

	if (!Data) {
		throw new Response(JSON.stringify({ message: "Data not found" }), {
			status: 204,
		});
	}
	const deletedSubData = await prisma.subData.deleteMany({
		where: {
			dataId: id,
		},
	});
	const deletedData = await prisma.data.delete({
		where: { id },
	});

	return new Response(JSON.stringify({ message: "delete Success" }), {
		status: 202,
	});
}
