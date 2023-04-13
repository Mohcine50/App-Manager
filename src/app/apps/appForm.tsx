"use client";
import { useFormik } from "formik";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { addApp, editApp } from "../../../utils";
import { Console } from "../../../types/types";

interface IProps {
	name?: string;
	packageName?: string;
	account?: string;
	dataId?: string;
	status?: string;
	actionType: "ADD" | "EDIT";
	consoles: Console[];
}
const AppFrom = ({
	name = "",
	packageName = "",
	account = "",
	status = "",
	actionType,
	consoles,
}: IProps) => {
	const router = useRouter();
	const { id } = useParams();
	console.log(id);
	const formik: any = useFormik({
		initialValues: {
			name: name,
			packageName: packageName,
			account: account,
			status: status,
		},
		onSubmit: async (values) => {
			if (actionType === "ADD") {
				const status = await addApp({
					name: values.name,
					packageName: values.packageName,
					account: values.account,
					status: values.status,
				});
				if (status === 200) {
					router.replace("/apps");
				}
			} else {
				const status = await editApp(
					{
						name: values.name,
						packageName: values.packageName,
						account: values.account,
						status: values.status,
					},
					id
				);
				if (status === 200) {
					router.replace("/apps");
				}
			}
		},
	});

	return (
		<form
			className="flex flex-col gap-3 px-2"
			onSubmit={formik.handleSubmit}
		>
			<div className="flex gap-5">
				<div className="flex flex-col flex-grow gap-2">
					<label htmlFor="name" className="px-2">
						App Name
					</label>
					<input
						onChange={formik.handleChange}
						type="text"
						id="name"
						value={formik.values.name}
						placeholder="App Name"
						className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					/>
				</div>
				<div className="flex flex-col flex-grow gap-2">
					<label htmlFor="email" className="px-2">
						Package Name
					</label>
					<input
						onChange={formik.handleChange}
						type="text"
						id="packageName"
						value={formik.values.packageName}
						placeholder="App Package Name"
						className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					/>
				</div>
			</div>
			<div className="flex gap-5">
				<div className="flex flex-col gap-2 basis-full">
					<label htmlFor="account" className="px-2">
						Account
					</label>
					<select
						onChange={formik.handleChange}
						id="account"
						name="account"
						placeholder="Associated console"
						value={formik.values.account}
						defaultValue={consoles[0].name}
						className="h-[50px] pl-3 bg-transparent rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					>
						<option value="" disabled selected>
							Select Console
						</option>
						{consoles.map((console, idx) => {
							return (
								<option
									className="py-2"
									value={console.id}
									key={idx}
									disabled={console.status === "Deleted"}
								>
									{console.name}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className="flex">
				<div className="flex flex-col flex-grow gap-2">
					<label htmlFor="status" className="px-2">
						Status
					</label>
					<select
						onChange={formik.handleChange}
						id="status"
						name="status"
						value={formik.values.status}
						className="h-[50px] pl-3 bg-transparent rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					>
						<option value="" disabled selected>
							Select Status
						</option>
						<option className="py-2" value="Live" selected>
							Live
						</option>
						<option className="py-2" value="Deleted">
							Deleted
						</option>
					</select>
				</div>
			</div>
			<button
				type="submit"
				className="block px-4 py-3 ml-auto mr-3 font-normal text-white rounded-md my-7 bg-indigo"
			>
				{actionType === "ADD" ? "Add an App" : "Edit App"}
			</button>
		</form>
	);
};

export default AppFrom;
