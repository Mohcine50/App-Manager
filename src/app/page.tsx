import { App, Console, STATUS } from "@prisma/client";
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
	const liveConsolesCount = consoles.filter(
		(console: Console) => console.status === STATUS.Live
	).length;
	const deletedConsolesCount = consoles.filter(
		(console: Console) => console.status === STATUS.Deleted
	).length;
	const apps = await fetchApps();
	const liveAppsCount = apps.filter(
		(app: App) => app.status === STATUS.Live
	).length;
	const deletedAppsCount = apps.filter(
		(app: App) => app.status === STATUS.Deleted
	).length;

	return (
		<main className="p-6">
			<div className="flex items-center justify-evenly ">
				<Card title="Live Consoles" count={liveConsolesCount} />
				<Card title="Deleted Consoles" count={deletedConsolesCount} />
				<Card title="Live Apps" count={liveAppsCount} />
				<Card title="Deleted Apps" count={deletedAppsCount} />
			</div>
			<div className="flex gap-2 m-6">
				<Chart title="Downloads" />
				<Chart title="Users" />
			</div>
		</main>
	);
}
