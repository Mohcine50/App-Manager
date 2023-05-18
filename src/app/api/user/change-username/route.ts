import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { prisma } from "../../../../../utils/prismaClient";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function PUT(req: NextRequest) {
	const session = await getServerSession(authOptions);
	const jsonReq = await req.json();
	const { username } = jsonReq;

	try {
		const user = await prisma.user.findUnique({
			where: {
				username: session?.user?.username,
			},
		});
		if (!user) {
			return new Response(JSON.stringify({ error: "User not found" }), {
				status: 400,
			});
		}

		await prisma.user.update({
			where: {
				id: user.id,
			},
			data: {
				username,
			},
		});

		return new Response(
			JSON.stringify({ message: "username updated successfully" }),
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
