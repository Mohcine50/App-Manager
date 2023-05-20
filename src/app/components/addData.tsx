"use client";
import { Data } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { updateData } from "../../../utils";
import Detail from "./detail";
import { toast, ToastContainer } from "react-toastify";

function AddData({
	dataId,
	data,
}: {
	dataId: string;
	data: Data[];
}): React.ReactElement {
	const [toggleData, setToggleData] = useState<boolean>(true);
	const [selectedData, setSelectedData] = useState<string>("");
	const path = usePathname();
	const router = useRouter();
	const id: string = path.split("/")[2];

	const addData = async () => {
		if (selectedData != "") {
			const status = await updateData(id, selectedData);
			if (status == 200) {
				setToggleData(!toggleData);
				router.refresh();
				toast.success(
					dataId
						? "Data Edited Successfully"
						: "Data Added Successfully",
					{
						position: toast.POSITION.TOP_CENTER,
					}
				);
			} else
				toast.error(
					dataId ? "Couldn't edited data" : "Couldn't Added data",
					{
						position: toast.POSITION.TOP_LEFT,
					}
				);
		}
	};

	return (
		<>
			<ToastContainer />
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
							{dataId ? "Edit Data" : "Add Data"}
						</button>
					</>
				) : (
					<>
						<select
							name="data"
							id="data"
							className="h-[50px] pl-3 bg-transparent  rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
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
						<div className="flex gap-1 align-middle">
							<button
								className="flex items-center gap-1 px-2 py-1 text-white rounded-md outline-none bg-red-500 h-9"
								onClick={() => {
									setToggleData(!toggleData);
								}}
							>
								Cancel
							</button>

							<button
								className="flex items-center gap-1 px-2 py-1 text-white rounded-md outline-none bg-indigo h-9"
								onClick={() => {
									addData();
								}}
							>
								Save
							</button>
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default AddData;
