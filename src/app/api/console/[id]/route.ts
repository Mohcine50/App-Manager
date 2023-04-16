import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../utils/prismaClient";

export async function GET(request: NextRequest, { params }: { params: any }) {
	try {
		const { id } = params;
		const console = await prisma.console.findUnique({
			where: {
				id,
			},
			include: {
				phoneNumber: true,
			},
		});

		if (!console) {
			return new Response(
				JSON.stringify({ message: "console not found" }),
				{
					status: 204,
				}
			);
		}
		return new Response(JSON.stringify({ console }), {
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

	const deletedConsole = await prisma.console.delete({
		where: { id },
	});

	const deletedPhone = await prisma.phoneNumber.delete({
		where: {
			id: deletedConsole.phoneNumberId,
		},
	});

	return new Response(JSON.stringify({ message: "delete Success" }), {
		status: 202,
	});
}

export async function PUT(req: NextRequest, { params }: { params: any }) {
	const { id } = params;
	const jsonReq = await req.json();

	const { name, email, password, country, phoneNumber, operator, status } =
		jsonReq;
	try {
		const console = await prisma.console.update({
			where: {
				id,
			},
			data: {
				name,
				email,
				password,
				country,
				phoneNumber: {
					update: {
						number: phoneNumber,
						operator: operator,
					},
				},
				status,
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
