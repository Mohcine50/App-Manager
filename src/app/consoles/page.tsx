import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Suspense } from "react";
import ConsoleTable from "./consoleTable";
import SearchForm from "./searchForm";

export const metadata = {
	title: "Apps Manager | Consoles",
	description: "Apps and consoles Manager",
};

export default async function ConsolePage() {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect("/login");
	}

	return (
		<main className="p-5">
			<h2 className="text-lg font-bold">Consoles List:</h2>
			<SearchForm />
			<Suspense fallback={<h1>Load consoles...</h1>}>
				{/* @ts-expect-error Server Component */}
				<ConsoleTable />
			</Suspense>
		</main>
	);
}
