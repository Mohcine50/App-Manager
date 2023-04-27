"use client";
import React, { useEffect, useState } from "react";
import { dataItem } from "./dataForm";

const SubDataForm = ({
	setDataItems,
	index,
	dataItems,
}: {
	setDataItems: any;
	index: number;
	dataItems: dataItem[];
}) => {
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	useEffect(() => {
		const updateArray = (index: number, value: dataItem) => {
			const newArray = [...dataItems];
			newArray[index] = value;
			setDataItems(newArray);
		};
		if (title !== "" && description !== "")
			updateArray(index, { title: title, description: description });
	}, [description, setDataItems]);

	return (
		<form>
			<div className="flex flex-col flex-grow gap-2">
				<label htmlFor="title" className="px-2">
					Title
				</label>
				<input
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					id="title"
					value={title}
					placeholder="Data Title"
					className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
				/>
			</div>
			<div className="flex flex-col flex-grow gap-2">
				<label htmlFor="description" className="px-2">
					Description
				</label>
				<textarea
					onChange={(e) => setDescription(e.target.value)}
					id="description"
					value={description}
					placeholder="Data Title"
					className="py-3 px-3 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
				/>
			</div>
		</form>
	);
};

export default SubDataForm;
