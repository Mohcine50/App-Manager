import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ConsoleForm from "@/app/components/consoleForm";
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
		<main className="p-5">
			<h1>Add Console</h1>
			<ConsoleForm />
		</main>
	);
}
