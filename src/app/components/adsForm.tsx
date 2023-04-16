import React from "react";

const AdsIdField = ({
	onChange,
	value,
	inputFor,
	title,
}: {
	onChange: any;
	value: any;
	inputFor: string;
	title: string;
}) => {
	return (
		<>
			<div className="flex flex-col flex-grow gap-2">
				<label htmlFor={inputFor} className="px-2">
					{title}
				</label>
				<input
					onChange={onChange}
					type="text"
					id={inputFor}
					value={value}
					placeholder={title}
					className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
				/>
			</div>
		</>
	);
};

export default AdsIdField;
