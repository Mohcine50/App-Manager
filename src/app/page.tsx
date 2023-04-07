import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
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
				<Suspense fallback={<h1>Loading...</h1>}>
					{/* @ts-expect-error Server Component */}
					<Card title="Consoles" />
				</Suspense>
				<Suspense fallback={<h1>Loading...</h1>}>
					{/* @ts-expect-error Server Component */}
					<Card title="Apps" />
				</Suspense>
				<Suspense fallback={<h1>Loading...</h1>}>
					{/* @ts-expect-error Server Component */}
					<Card title="Users" />
				</Suspense>
				<Suspense fallback={<h1>Loading...</h1>}>
					{/* @ts-expect-error Server Component */}
					<Card title="Installs" />
				</Suspense>
			</div>
			<div className="flex gap-2 m-6">
				<Chart title="Downloads" />
				<Chart title="Users" />
			</div>
		</main>
	);
}
