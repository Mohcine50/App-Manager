import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Suspense } from "react";
import ConsoleTable from "./consoleTable";

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
			<div>
				<h2 className="text-lg font-bold">Consoles List:</h2>
				<form className="my-3">
					<label
						htmlFor="search"
						className="h-8 px-4 py-6 peer-focus/search:border-input-border peer-active/search:border-input-border rounded-lg bg-white w-[100%] border-[#9FA6B2] border placeholder:text-[#9FA6B2] inline-flex items-center gap-1 shadow-sm"
					>
						<FontAwesomeIcon
							icon={faSearch}
							style={{ fontSize: 20, color: "gray" }}
						/>
						<input
							type="text"
							placeholder="Search For console"
							id="search"
							className="peer/search w-[100%]  outline-none"
						/>
					</label>
				</form>
				<button className="px-4 py-3 font-normal text-white rounded-md bg-indigo">
					Add a Console
				</button>
			</div>
			<Suspense fallback={<h1>Load consoles...</h1>}>
				{/* @ts-expect-error Server Component */}
				<ConsoleTable />
			</Suspense>
		</main>
	);
}
