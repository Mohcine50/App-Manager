import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(
  request: NextApiRequest,
  { params }: { params: any }
) {
  const { id } = params;

  return NextResponse.json({ id: id });
}
