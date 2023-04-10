"use client";
import { useFormik } from "formik";
import React from "react";
import ConsoleForm from "../consoleForm";

export default async function ConsolePage() {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			country: "",
			phone: "",
			operator: "",
			status: "",
		},
		onSubmit: () => {},
	});
	return (
		<main className="p-5 grow">
			<div className="h-full p-2 bg-white rounded-xl drop-shadow-sm">
				<ConsoleForm
					handleSubmit={formik.handleSubmit}
					name={formik.values.name}
					email={formik.values.email}
					password={formik.values.password}
					phone={formik.values.phone}
					operator={formik.values.operator}
					status={formik.values.status}
					country={formik.values.country}
					handleChange={formik.handleChange}
				/>
				<button className="block px-4 py-3 ml-auto mr-3 font-normal text-white rounded-md my-7 bg-indigo">
					Add A console
				</button>
			</div>
		</main>
	);
}
