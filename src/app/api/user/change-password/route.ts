import { compare, genSalt, hash } from "bcrypt";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { prisma } from "../../../../../utils/prismaClient";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function PUT(req: NextRequest) {
	const session = await getServerSession(authOptions);
	const jsonReq = await req.json();
	const { currentPassword, password } = jsonReq;

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
		const checkPassword = await compare(currentPassword, user.password);
		if (!checkPassword)
			return new Response(
				JSON.stringify({ error: "Current Password not correct" }),
				{
					status: 400,
				}
			);

		const salt = await genSalt(10);
		const hashedPassword = await hash(password, salt);

		await prisma.user.update({
			where: {
				id: user.id,
			},
			data: {
				password: hashedPassword,
			},
		});

		return new Response(
			JSON.stringify({
				message: "userName updated successfully",
				password: hashedPassword,
			}),
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
