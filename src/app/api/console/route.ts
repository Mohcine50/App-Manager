import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../utils/prismaClient";

export async function GET(req: Request) {
	const data = await prisma.console.findMany({
		include: {
			apps: true,
		},
	});
	return NextResponse.json({ consoles: data });
}

export async function POST(req: NextRequest, res: NextApiResponse) {
	try {
		const jsonReq = await req.json();
		const {
			name,
			email,
			password,
			country,
			phoneNumber,
			operator,
			status,
		} = jsonReq;
		const token = await getToken({ req });
		console.log("before consoles");
		const consoles = await prisma.console.findMany({
			where: {
				OR: [
					{ phoneNumber: { number: phoneNumber } },
					{ email },
					{ name },
				],
			},
		});

		if (consoles.length > 0) {
			return new Response(
				JSON.stringify({ message: "Duplicate Console" }),
				{
					status: 202,
				}
			);
		}

		const data = await prisma.console.create({
			data: {
				name: name,
				email: email,
				password: password,
				status: status,
				country: country,
				phoneNumber: {
					connectOrCreate: {
						where: {
							number: phoneNumber,
						},
						create: {
							number: phoneNumber,
							operator,
							User: {
								connect: {
									id: token?.id as string,
								},
							},
						},
					},
				},
				User: {
					connect: {
						id: token?.id as string,
					},
				},
			},
			include: {
				User: true,
				phoneNumber: true,
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
