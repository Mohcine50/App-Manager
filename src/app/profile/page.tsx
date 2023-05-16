import Detail from "../components/detail";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

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
				<Detail title="UserName" data={session?.user?.username} />
				<Detail title="Password" data="**************" />
				<Detail
					title="API Key"
					data="8d86df7d4a6198b7ab80c10cfd844202f8bb4c0540865804853e3d69330f9ae7"
				/>
				<Detail title="E-mail" data="shegami24@gmail.com" />
			</div>
		</main>
	);
}
