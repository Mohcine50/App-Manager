"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getApp, getAppClient } from "../../../utils";

const Header = () => {
	const path = usePathname();
	const title = path.split("/");
	const [name, setName] = useState<string>("");
	const arr = [
		"edit-app",
		"add-app",
		"edit-console",
		"add-console",
		"edit-data",
		"add-data",
	];
	useEffect(() => {
		if (title.length > 2) {
			if (!arr.includes(title[2])) {
				getAppClient(title[2]).then((app) => setName(app.name));
			}
		}
	}, []);
	return (
		<div className="static flex items-center justify-between p-5 bg-white">
			<h1
				className={`text-lg font-medium ${
					title.length === 2 ? "text-indigo" : "text-gray-500"
				} `}
			>
				{title[1] === ""
					? "Dashboard"
					: title[1].charAt(0).toUpperCase() +
					  title[1].substring(1)}{" "}
				<span className="capitalize text-indigo">
					{/* neeed to fix the condition one the second part*/}
					{title[2] && name !== ""
						? " > " + name
						: " > " + title[2].replace("-", " ")}
				</span>
			</h1>
		</div>
	);
};

export default Header;
