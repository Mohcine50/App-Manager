import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { prisma } from "../../../../../utils/prismaClient";

export async function GET(request: NextRequest, { params }: { params: any }) {
	const { id } = params;

	const app = await prisma.app.findUnique({
		where: {
			id,
		},
		include: {
			Console: true,
		},
	});

	return new Response(JSON.stringify(app), {
		status: 200,
	});
}

export async function PUT(req: NextRequest, { params }: { params: any }) {
	const { id } = params;
	const jsonReq = await req.json();

	const { name, packageName, status, account } = jsonReq;

	try {
		const app = await prisma.app.update({
			where: {
				id,
			},
			data: {
				name,
				packageName,
				status,
				Console: {
					connect: {
						id: account,
					},
				},
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

export async function DELETE(
	request: NextRequest,
	{ params }: { params: any }
) {
	const { id } = params;

	const app = await prisma.app.findUnique({
		where: {
			id,
		},
	});

	if (!app) {
		throw new Response(JSON.stringify({ message: "app not found" }), {
			status: 204,
		});
	}
	const deletedApp = await prisma.app.delete({
		where: { id },
	});
	const deletedAds = await prisma.ads.delete({
		where: { id: deletedApp.adsId },
	});

	const deletedApplovin = await prisma.applovin.delete({
		where: { id: deletedAds.applovinId },
	});
	const deletedUnity = await prisma.unity.delete({
		where: { id: deletedAds.unityId },
	});
	const deletedAdmob = await prisma.admob.delete({
		where: { id: deletedAds.admobId },
	});
	const deletedFan = await prisma.fan.delete({
		where: { id: deletedAds.fanId },
	});

	return new Response(JSON.stringify({ message: "delete Success" }), {
		status: 202,
	});
}
