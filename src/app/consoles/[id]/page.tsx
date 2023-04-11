import React from "react";
import ConsoleForm from "../consoleForm";

/* { params }: { params: { id: string } } */
export default function ConsolePage(params: any) {
	const { searchParams } = params;
	console.log(params);
	return (
		<main className="p-5 grow">
			<div className="h-full p-2 bg-white rounded-xl drop-shadow-sm">
				<ConsoleForm actionType="EDIT" />
			</div>
		</main>
	);
}
