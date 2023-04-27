"use client";

import React, { useEffect, useState } from "react";
import SubDataForm from "./subDataForm";

interface IDataForm {
	actionType: "ADD" | "EDIT";
}
export interface dataItem {
	title: string;
	description: string;
}
const DataForm = ({ actionType }: IDataForm) => {
	const [subDataCount, setSubDataCount] = useState<number>(0);
	const [dataItems, setDataItems] = useState<dataItem[]>([]);

	useEffect(() => {
		console.log(dataItems);
	}, [dataItems]);

	return (
		<form className="flex flex-col gap-3 px-2">
			<div className="flex flex-col flex-grow gap-2">
				<label htmlFor="title" className="px-2">
					Title
				</label>
				<input
					/* onChange={formik.handleChange} */
					type="text"
					id="title"
					/* value={formik.values.name} */
					placeholder="Data Title"
					className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
				/>
			</div>
			<hr />
			<h2 className="text-base font-medium">Data Items</h2>
			<div className="flex flex-col gap-4">
				{Array(subDataCount)
					.fill(null)
					.map((i, idx) => {
						return (
							<>
								<h1 className="text-base font-medium">
									Item {idx + 1}:
								</h1>
								<SubDataForm
									key={idx}
									index={idx}
									setDataItems={setDataItems}
									dataItems={dataItems}
								/>
							</>
						);
					})}
			</div>
			<button
				onClick={(e) => {
					e.preventDefault();
					setSubDataCount((value) => value + 1);
				}}
				className="py-2 rounded-lg outline-none border-[#9FA6B2] border hover:border-input-border hover:text-indigo placeholder:text-[#9FA6B2]"
			>
				+
			</button>

			<button
				type="submit"
				className="block px-4 py-3 ml-auto mr-3 font-normal text-white rounded-md my-7 bg-indigo"
			>
				{actionType === "ADD" ? "Add data" : "Edit data"}
			</button>
		</form>
	);
};

export default DataForm;
