import React from "react";
import { fetchApps, fetchConsoles } from "../../../utils";

interface IProps {
	title: string;
	count: number;
}

const Card = ({ title, count }: IProps) => {
	return (
		<div className="p-5 w-56  bg-white shadow-md border border-gray-400 rounded-[5px] gap-2 flex flex-col">
			<p className="text-base font-bold ">Total {title}</p>
			<p className="text-xl font-bold">{count}</p>
			<p className="text-sm font-light text-gray-500">{title}</p>
		</div>
	);
};

export default Card;
