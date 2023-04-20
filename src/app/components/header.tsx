"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
	const path = usePathname();
	const title = path.split("/");
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
					{title[2] && " > " + title[2].replace("-", " ")}
				</span>
			</h1>
		</div>
	);
};

export default Header;
