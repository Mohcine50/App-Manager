import React from "react";
import { fetchConsoles, getApp } from "../../../../../utils";
import AppFrom from "../../appForm";

/* { params }: { params: { id: string } } */
export default async function editAppPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;
	const app = await getApp(id);
	const consoles = await fetchConsoles();
	console.log(app);
	return (
		<main className="p-5 grow">
			<div className="h-full p-2 bg-white rounded-xl drop-shadow-sm">
				<AppFrom
					actionType="EDIT"
					name={app.name}
					status={app.status}
					packageName={app.packageName}
					account={app?.Console?.name}
					consoles={consoles}
				/>
			</div>
		</main>
	);
}
