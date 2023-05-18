import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Username from "./username";
import Password from "./password";
import ApiKey from "./apikey";
import Email from "./email";

export const metadata = {
	title: "Apps Manager | Profile",
	description: "Apps and consoles Manager",
};
export default async function ProfilePage() {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect("/login");
	}

	return (
		<main className="p-5">
			<div className="flex flex-col h-full gap-5 p-2 bg-white rounded-xl">
				<Username data={session?.user?.username} />
				<Password data="**************" />
				<Email data={session?.user?.email} />
				<ApiKey title="API Key" data={session?.user?.APIKey} />
			</div>
		</main>
	);
}
