import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Apps Manager | Edit Data",
	description: "Apps and consoles Manager",
};

export default async function EditDataLayout({
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
