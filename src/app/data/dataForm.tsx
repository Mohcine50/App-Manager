"use client";

import React from "react";

interface IDataForm {
	actionType: "ADD" | "EDIT";
}
const DataForm = ({ actionType }: IDataForm) => {
	return (
		<form className="flex flex-col gap-3 px-2">
			<div className="flex flex-col flex-grow gap-2">
				<label htmlFor="name" className="px-2">
					Title
				</label>
				<input
					/* onChange={formik.handleChange} */
					type="text"
					id="name"
					/* value={formik.values.name} */
					placeholder="Data Title"
					className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
				/>
			</div>
		</form>
	);
};

export default DataForm;
