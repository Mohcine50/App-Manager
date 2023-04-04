import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(req: Request) {
  const data = await prisma.console.count();
  return NextResponse.json({ data });
}
