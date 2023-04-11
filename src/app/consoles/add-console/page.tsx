import React from "react";
import ConsoleForm from "../consoleForm";

export default function ConsolePage() {
	return (
		<main className="p-5 grow">
			<div className="h-full p-2 bg-white rounded-xl drop-shadow-sm">
				<ConsoleForm actionType="ADD" />
			</div>
		</main>
	);
}
