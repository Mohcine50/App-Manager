import { NextRequest, NextResponse } from "next/server";
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

export async function PUT(req: NextRequest, { params }: { params: any }) {
	const { id } = params;
	const jsonReq = await req.json();

	const { title, subData } = jsonReq;
	try {
		const data = await prisma.data.update({
			where: {
				id,
			},
			data: {
				title,
			},
		});

		subData.forEach(async (d: any) => {
			if (d.id) {
				const subdataFound = await prisma.subData.findUnique({
					where: { id: d.id },
				});
				await prisma.subData.update({
					where: { id: d.id },
					data: {
						title: d.title,
						description: d.description,
					},
				});
			} else if (!d.if) {
				await prisma.subData.create({
					data: {
						title: d.title,
						description: d.description,
						dataId: id,
					},
				});
			}
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
