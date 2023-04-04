import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function ConsolePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return <main>Console</main>;
}
