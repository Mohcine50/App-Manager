import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Card from "./components/dashCard";
import Chart from "./components/dashChart";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return (
    <main className="p-6">
      <div className="flex items-center justify-evenly ">
        <Card title="Consoles" count={22} />
        <Card title="Apps" count={49} />
        <Card title="Users" count={1220} />
        <Card title="Installs" count={1992} />
      </div>
      <div className="flex gap-2 m-6">
        <Chart title="Downloads" />
        <Chart title="Users" />
      </div>
    </main>
  );
}
