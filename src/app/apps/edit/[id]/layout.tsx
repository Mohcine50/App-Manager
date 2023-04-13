import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Apps Manager | Edit App",
	description: "Apps and consoles Manager",
};

export default async function EditAppLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect("/login");
	}

	return <section>{children}</section>;
}
