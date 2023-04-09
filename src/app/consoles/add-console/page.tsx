import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ConsoleForm from "../consoleForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Apps Manager | Add Console",
	description: "Apps and consoles Manager",
};

export default async function ConsolePage() {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect("/login");
	}

	return (
		<main className="p-5 grow">
			<div className="h-full p-2 bg-white rounded-xl drop-shadow-sm">
				<ConsoleForm />
			</div>
		</main>
	);
}
