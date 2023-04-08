"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useEffect, useRef } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SearchForm = () => {
	const formik = useFormik({
		initialValues: {
			search: "",
		},
		onSubmit: (values) => {},
	});

	return (
		<div>
			<form
				className="my-3"
				onSubmit={(e) => {
					e.preventDefault();
					formik.handleSubmit(e);
				}}
			>
				<label
					htmlFor="search"
					className="h-8 px-4 py-6 peer-focus/search:border-input-border peer-active/search:border-input-border rounded-lg bg-white w-[100%] border-[#9FA6B2] border placeholder:text-[#9FA6B2] inline-flex items-center gap-1 shadow-sm"
				>
					<FontAwesomeIcon
						icon={faSearch}
						style={{ fontSize: 20, color: "gray" }}
					/>
					<input
						type="text"
						value={formik.values.search}
						onChange={formik.handleChange}
						placeholder="Search For console"
						id="search"
						className="peer/search w-[100%]  outline-none"
					/>
				</label>
			</form>
			<Link
				href="/consoles/add-console"
				className="px-4 py-3 font-normal text-white rounded-md bg-indigo"
			>
				Add a console
				{/* <button className="px-4 py-3 font-normal text-white rounded-md bg-indigo">
					Add a Console
				</button> */}
			</Link>
		</div>
	);
};

export default SearchForm;
