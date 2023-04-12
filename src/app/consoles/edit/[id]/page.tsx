import React from "react";
import { getConsole } from "../../../../../utils";
import ConsoleForm from "../../consoleForm";

/* { params }: { params: { id: string } } */
export default async function ConsolePage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;
	const console = await getConsole(id);

	return (
		<main className="p-5 grow">
			<div className="h-full p-2 bg-white rounded-xl drop-shadow-sm">
				<ConsoleForm
					actionType="EDIT"
					name={console.name}
					email={console.email}
					password={console.password}
					country={console.country}
					phone={console.phoneNumber.number}
					operator={console.phoneNumber.operator}
					status={console.status}
				/>
			</div>
		</main>
	);
}
