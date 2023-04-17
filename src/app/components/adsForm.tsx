import { Field, FormikProvider } from "formik";
import React from "react";

const AdsIdField = ({
	onChange,
	value,
	inputFor,
	title,
	name,
	formik,
}: {
	onChange?: any;
	value?: any;
	inputFor?: string;
	title?: string;
	name?: string;
	formik: any;
}) => {
	return (
		<>
			<FormikProvider value={formik}>
				<div className="flex flex-col flex-grow gap-2">
					<label htmlFor={inputFor} className="px-2">
						{title}
					</label>
					{/* <input
					onChange={onChange}
					type="text"
					id={inputFor}
					name={name}
					value={value}
					placeholder={title}
					className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
				/> */}
					<Field
						name={name}
						placeholder={title}
						component={MyInput}
						className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					/>
				</div>
			</FormikProvider>
		</>
	);
};

export default AdsIdField;

const MyInput = ({ field, form, ...props }: any) => {
	return <input {...field} {...props} />;
};
