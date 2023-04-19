import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
	title: "Apps Manager | Data",
	description: "Apps and consoles Manager",
};

export default async function DataPage() {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect("/login");
	}

	return <main>Data</main>;
}
