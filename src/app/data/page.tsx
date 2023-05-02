import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getData } from "../../../utils";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DataTable from "./dataTable";

export const metadata = {
	title: "Apps Manager | Data",
	description: "Apps and consoles Manager",
};

export default async function DataPage() {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect("/login");
	}

	const data = await getData();

	return (
		<main className="p-5">
			<div>
				<h2 className="text-lg font-bold">Data List:</h2>
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
							placeholder="Search For an App"
							id="search"
							className="peer/search w-[100%]  outline-none"
						/>
					</label>
				</form>
				<Link
					href="/data/add-data"
					className="inline-block px-4 py-3 font-normal text-white rounded-md bg-indigo"
				>
					Add Data
				</Link>
			</div>
			<div className="p-5 mt-5 bg-white rounded-lg">
				<DataTable datas={data} />
			</div>
		</main>
	);
}
