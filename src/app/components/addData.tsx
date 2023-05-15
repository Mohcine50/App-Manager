"use client";
import { Data } from "@prisma/client";
import React, { ReactElement, useState } from "react";
import Detail from "./detail";

function AddData({
	dataId,
	data,
}: {
	dataId: string;
	data: Data[];
}): React.ReactElement {
	const [toggleData, setToggleData] = useState<boolean>(true);
	const [selectedData, setSelectedData] = useState<string>("");
	console.log(selectedData);
	return (
		<div className="flex justify-between align-top">
			{toggleData ? (
				<>
					<Detail
						title="App Data"
						data={dataId || "No data Assigned"}
					/>
					<button
						className="flex items-center gap-1 px-2 py-1 border-2 rounded-md outline-none text-indigo h-9"
						onClick={() => {
							setToggleData(!toggleData);
						}}
					>
						Add Data
					</button>
				</>
			) : (
				<>
					<select
						name="data"
						id="data"
						onChange={(e) => {
							setSelectedData(e.target.value);
						}}
					>
						<option disabled selected>
							Select Data
						</option>
						{data.map((dataElement: Data, index: number) => {
							return (
								<option key={index} value={dataElement.id}>
									{dataElement.title}
								</option>
							);
						})}
					</select>
					<button
						className="flex items-center gap-1 px-2 py-1 text-white rounded-md outline-none bg-indigo h-9"
						onClick={() => {
							setToggleData(!toggleData);
						}}
					>
						Save
					</button>
				</>
			)}
		</div>
	);
}

export default AddData;
