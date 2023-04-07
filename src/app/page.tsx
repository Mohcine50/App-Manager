import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { fetchApps, fetchConsoles } from "../../utils";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Card from "./components/dashCard";
import Chart from "./components/dashChart";

export default async function Home() {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect("/login");
	}

	const consoles = await fetchConsoles();
	const apps = await fetchApps();

	return (
		<main className="p-6">
			<div className="flex items-center justify-evenly ">
				<Card title="Consoles" count={consoles.length} />
				<Card title="Apps" count={apps.length} />
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
