import { PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

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

export async function POST(req: NextRequest, res: NextResponse) {
	try {
		const jsonReq = await req.json();
		const { name, packageName, status, account } = jsonReq;
		const token = await getToken({ req });

		const apps = await prisma.app.findMany({
			where: {
				OR: [{ packageName }, { name }],
			},
		});

		if (apps.length > 0) {
			return new Response(JSON.stringify({ message: "Duplicate App" }), {
				status: 202,
			});
		}

		const data = await prisma.app.create({
			data: {
				name: name,
				packageName: packageName,
				status: status,
				User: {
					connect: {
						id: token?.id as string,
					},
				},
				Console: {
					connect: {
						id: account,
					},
				},
			},
		});

		return new Response(JSON.stringify({ data }), {
			status: 200,
		});
	} catch (error) {
		return new Response(JSON.stringify({ error }), {
			status: 400,
		});
	}
}
