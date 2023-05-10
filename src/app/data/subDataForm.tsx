"use client";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { dataItem } from "./dataForm";

const SubDataForm = ({
	setDataItems,
	index,
	dataItems,
	title = "",
	description = "",
	hideForm,
	action,
}: {
	setDataItems: any;
	index: number;
	dataItems: dataItem[];
	description?: string;
	title?: string;
	hideForm?: any;
	action: "ADD" | "EDIT";
}) => {
	const [title_, setTitle] = useState<string>(title);
	const [description_, setDescription] = useState<string>(description);
	const [edit, setEdit] = useState<boolean>(false);

	const handleSubmit = () => {
		if (title_ !== "" && description_ !== "") {
			if (action === "ADD") {
				setDataItems([
					...dataItems,
					{
						title: title_,
						description: description_,
					},
				]);
				setTitle("");
				setDescription("");
				hideForm(false);
			} else {
				const newArr = dataItems.map((item, idx) => {
					if (index === idx) {
						item.title = title_;
						item.description = description_;
					}
					return item;
				});
				setDataItems(newArr);
				setEdit(false);
			}
		}
	};

	return (
		<form>
			<div className="flex flex-col flex-grow gap-2">
				<label htmlFor="title" className="px-2">
					Title
				</label>
				<div className="relative">
					<input
						onChange={(e) => setTitle(e.target.value)}
						type="text"
						id="title"
						value={title_}
						disabled={action === "EDIT" && edit === false}
						placeholder="Data Title"
						className="h-8 w-full px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					/>
					{action === "EDIT" ? (
						<button
							className="absolute block right-1 top-1"
							type="button"
							onClick={() => {
								setEdit(!edit);
							}}
						>
							<FontAwesomeIcon
								icon={faEdit}
								className={
									edit ? "text-red-600" : "text-indigo"
								}
							/>
						</button>
					) : null}
				</div>
			</div>
			<div className="flex flex-col flex-grow gap-2">
				<label htmlFor="description" className="px-2">
					Description
				</label>
				<div className="relative">
					<textarea
						onChange={(e) => setDescription(e.target.value)}
						id="description"
						value={description_}
						disabled={action === "EDIT" && edit === false}
						placeholder="Data Title"
						className="w-full py-3 px-3 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					/>
					{action === "EDIT" ? (
						<button
							className="absolute block right-1 top-1"
							type="button"
							onClick={() => {
								setEdit(!edit);
							}}
						>
							<FontAwesomeIcon
								icon={faEdit}
								className={
									edit ? "text-red-600" : "text-indigo"
								}
							/>
						</button>
					) : null}
				</div>
			</div>
			<button
				type="button"
				onClick={handleSubmit}
				disabled={action === "EDIT" && edit === false}
				className={`block w-full px-4 py-3 mr-3 font-normal text-white rounded-md my-7 ${
					action === "EDIT" && edit === false
						? "bg-blue-400"
						: "bg-indigo"
				}`}
			>
				{action === "ADD" ? "Add" : "Edit "}
			</button>
		</form>
	);
};

export default SubDataForm;
