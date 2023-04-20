import React from "react";
import DataForm from "../dataForm";

export default function AddDataPage() {
	return (
		<main className="p-5 grow">
			<div className="h-full p-2 bg-white rounded-xl drop-shadow-sm">
				<DataForm actionType="ADD" />
			</div>
		</main>
	);
}
