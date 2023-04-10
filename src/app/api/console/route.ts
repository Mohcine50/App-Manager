import { PrismaClient } from "@prisma/client";
import { Select } from "@radix-ui/react-select";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(req: Request) {
	const data = await prisma.console.findMany({
		include: {
			apps: true,
		},
	});
	return NextResponse.json({ consoles: data });
}

export const config = {
	api: {
		bodyParser: true,
	},
};
export async function POST(req: NextRequest, res: NextApiResponse) {
	try {
		const jsonReq = await req.json();
		const { name, email, password, country, phoneNumber, status } = jsonReq;
		const token = await getToken({ req });
		const consoles = await prisma.console.findMany({
			where: {
				OR: [{ phoneNumber }, { email }, { name }],
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
				phoneNumber: phoneNumber,
				status: status,
				country: country,
				User: {
					connect: {
						id: token?.id as string,
					},
				},
			},
			include: {
				User: true,
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
