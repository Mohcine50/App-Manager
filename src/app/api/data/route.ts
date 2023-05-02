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

export async function POST(req: NextRequest) {
	try {
		const jsonReq = await req.json();
		const { title, subData } = jsonReq;
		const token = await getToken({ req });

		const data_ = await prisma.data.create({
			data: {
				title: title,
			},
		});

		subData.forEach(async (d: any) => {
			await prisma.subData.create({
				data: {
					title: d.title,
					description: d.description,
					Data: {
						connect: {
							id: data_.id,
						},
					},
				},
			});
		});

		return new Response(JSON.stringify({ data_ }), {
			status: 200,
		});
	} catch (error) {
		return new Response(JSON.stringify({ error }), {
			status: 400,
		});
	}
}
