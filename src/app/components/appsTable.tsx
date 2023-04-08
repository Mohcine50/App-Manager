"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { STATUS } from "../../../types/types.d";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import type { App, Console } from "@prisma/client";
import { deleteApp } from "../../../utils";
import { useRouter } from "next/navigation";

interface IProps {
	apps: IApp[];
}
interface IApp extends App {
	Console: Console;
}
const AppsTable = ({ apps }: IProps) => {
	const tHead: string[] = [
		"Name",
		"packageName",
		"Installs",
		"Created At",
		"Console",
		"Status",
		"Action",
	];

	const router = useRouter();
	const delete_app = async (id: number) => {
		const delete_ = await deleteApp(id);
		router.refresh();
	};
	return (
		<table className="table-auto w-[100%]">
			<thead>
				<tr>
					{tHead.map((title, idx) => {
						return (
							<th
								key={idx}
								className="py-3 text-base font-medium text-center text-gray-400 capitalize"
							>
								{title}
							</th>
						);
					})}
				</tr>
			</thead>
			{apps.length === 0 ? (
				<tbody>
					<tr>
						<td
							colSpan={100}
							className="text-center text-gray-300 font-medium"
						>
							<span>No apps Found</span>
						</td>
					</tr>
				</tbody>
			) : (
				<tbody>
					{apps.map((app: IApp, idx) => {
						return (
							<tr
								key={idx}
								className="h-12 border-b border-gray-200"
							>
								<td className="text-center">
									<span>{app.name}</span>
								</td>
								<td className="text-center">
									<span>{app.packageName}</span>
								</td>
								<td className="text-center">
									<span>0</span>
								</td>
								<td className="text-center">
									<span>{`${app.createdAt}`}</span>
								</td>
								<td className="text-center">
									<span>{app.Console.name}</span>
								</td>
								<td className="text-center">
									<span
										className={`font-medium py-2 px-4 rounded-full ${
											app.status === STATUS.Live
												? "bg-green-100 text-green-800"
												: "bg-orange-100 text-orange-800"
										}`}
									>
										{app.status}
									</span>
								</td>
								<td className="align-middle">
									<div className="flex items-center justify-center gap-2">
										<button className="flex items-center gap-1 px-2 py-1 text-green-500 border-2 border-green-500 rounded-md outline-none h-9">
											<FontAwesomeIcon icon={faEdit} />
											<span>Edit</span>
										</button>
										<button
											className="flex items-center gap-1 px-2 py-1 text-white bg-red-600 rounded-md outline-none h-9"
											onClick={() => {
												delete_app(app.id);
											}}
										>
											<FontAwesomeIcon icon={faTrash} />
											<span>Delete</span>
										</button>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			)}
		</table>
	);
};

export default AppsTable;
