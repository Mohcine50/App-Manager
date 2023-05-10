import React from "react";
import { getApp } from "../../../../utils";

/* { params }: { params: { id: string } } */
export default async function editAppPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;
	const app = await getApp(id);

	return (
		<main className="p-5 grow">
			<div className="h-full p-2 bg-white rounded-xl">
				<div>
					<h2>App Name</h2>
					<h3>{app.name}</h3>
				</div>
				<div>
					<h2>Console Name</h2>
					<h3>{app.Console.name}</h3>
				</div>
				<div>
					<h2>Package Name</h2>
					<h3>{app.packageName}</h3>
				</div>
			</div>
		</main>
	);
}
