import { Suspense } from "react";
import ConsoleTable from "./consoleTable";
import SearchForm from "./searchForm";
import Link from "next/link";

export default async function ConsolePage() {
	return (
		<main className="p-5">
			<h2 className="text-lg font-bold">Consoles List:</h2>
			<SearchForm />
			<Link
				href="/consoles/add-console"
				className="inline-block px-4 py-3 font-normal text-white rounded-md bg-indigo"
			>
				Add a console
			</Link>
			<Suspense fallback={<h1>Load consoles...</h1>}>
				{/* @ts-expect-error Server Component */}
				<ConsoleTable />
			</Suspense>
		</main>
	);
}
