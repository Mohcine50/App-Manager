import { PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../utils/prismaClient";

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
		const {
			name,
			packageName,
			status,
			account,
			hasAdmob,
			hasApplovin,
			hasUnity,
			hasFan,
			admobIds,
			applovinIds,
			unityIds,
			fanIds,
		} = jsonReq;
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
		const admob = await prisma.admob.create({
			data: {
				bannerId: admobIds.bannerId,
				interId: admobIds.interId,
				nativeId: admobIds.nativeId,
				rewardId: admobIds.rewardId,
				appId: packageName,
			},
		});
		const fan = await prisma.fan.create({
			data: {
				bannerId: fanIds.bannerId,
				interId: fanIds.interId,
				nativeId: fanIds.nativeId,
				rewardId: fanIds.rewardId,
			},
		});
		const applovin = await prisma.applovin.create({
			data: {
				bannerId: applovinIds.bannerId,
				interId: applovinIds.interId,
				nativeId: applovinIds.nativeId,
				rewardId: applovinIds.rewardId,
			},
		});
		const unity = await prisma.unity.create({
			data: {
				bannerId: unityIds.bannerId,
				interId: unityIds.interId,
				nativeId: unityIds.nativeId,
				rewardId: unityIds.rewardId,
			},
		});

		const ads = await prisma.ads.create({
			data: {
				hasAdmob,
				hasApplovin,
				hasFan,
				hasUnity,
				admob: {
					connect: {
						id: admob.id,
					},
				},
				unity: {
					connect: {
						id: unity.id,
					},
				},
				applovin: {
					connect: {
						id: applovin.id,
					},
				},
				fan: {
					connect: {
						id: fan.id,
					},
				},
				User: {
					connect: {
						id: token?.id as string,
					},
				},
			},
		});
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
				ads: {
					connect: {
						id: ads.id,
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
