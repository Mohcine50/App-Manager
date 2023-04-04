import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import SideBar from "./components/sideBar";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return <main>Dashboard</main>;
}
