import { NextRequest } from "next/server";
import { prisma } from "../../../../../../utils/prismaClient";

export async function PUT(req: NextRequest, { params }: { params: any }) {
	const { id } = params;
	const jsonReq = await req.json();

	const { dataId } = jsonReq;

	console.log(id, dataId);

	try {
		const app = await prisma.app.update({
			where: {
				id,
			},
			data: {
				dataId: dataId,
			},
		});
		return new Response(
			JSON.stringify({ message: "Data Added Successfully" }),
			{
				status: 200,
			}
		);
	} catch (error) {
		return new Response(JSON.stringify({ error }), {
			status: 400,
		});
	}
}
