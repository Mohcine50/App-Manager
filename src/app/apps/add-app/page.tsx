import React from "react";
import { fetchConsoles } from "../../../../utils";
import AppForm from "../appForm";

export default async function ConsolePage() {
	const consoles = await fetchConsoles();
	return (
		<main className="p-5 grow">
			<div className="h-full p-2 bg-white rounded-xl drop-shadow-sm">
				<AppForm actionType="ADD" consoles={consoles} />
			</div>
		</main>
	);
}
