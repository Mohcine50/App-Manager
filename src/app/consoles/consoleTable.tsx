import React from "react";
import { fetchConsoles } from "../../../utils";
import ConsolesTable from "./consolesTable";

const ConsoleTable = async () => {
	const consoles = await fetchConsoles();
	return (
		<div className="p-5 mt-5 bg-white rounded-lg">
			<ConsolesTable consoles={consoles} />
		</div>
	);
};

export default ConsoleTable;
