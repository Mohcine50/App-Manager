import React from "react";
import { fetchApps, fetchConsoles } from "../../../utils";

interface IProps {
	title: string;
}

const Card = async ({ title }: IProps) => {
	let count;
	if (title === "Consoles") {
		const consoles = await fetchConsoles();
		count = consoles.length;
	}
	if (title === "Apps") {
		const apps = await fetchApps();
		count = apps.length;
	}
	return (
		<div className="px-8 py-4 bg-white shadow-md border border-gray-400 rounded-[5px] gap-2 flex flex-col w-48">
			<p className="text-base font-bold ">Total {title}</p>
			<p className="text-xl font-bold">{count}</p>
			<p className="text-sm font-light text-gray-500">{title}</p>
		</div>
	);
};

export default Card;
