import React from "react";
import { getData } from "../../../../../utils";
import DataForm from "../../dataForm";

/* { params }: { params: { id: string } } */
export default async function EditDataPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;
	const data = await getData(id);

	return (
		<main className="p-5 grow">
			<div className="h-full p-2 bg-white rounded-xl drop-shadow-sm">
				<DataForm
					actionType="EDIT"
					title={data.title}
					subData={data.subData}
				/>
			</div>
		</main>
	);
}
