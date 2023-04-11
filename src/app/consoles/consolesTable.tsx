"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { STATUS } from "../../../types/types.d";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import type { App, Console } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import { deleteConsole } from "../../../utils";
import Link from "next/link";

interface IProps {
	consoles: IConsole[];
}
interface IConsole extends Console {
	apps: App[];
}
const ConsolesTable = ({ consoles }: IProps) => {
	const tHead: string[] = [
		"Name",
		"Apps",
		"Created At",
		"Country",
		"Status",
		"Action",
	];
	const router = useRouter();
	const delete_console = async (id: string) => {
		const delete_ = await deleteConsole(id);
		router.refresh();
	};

	return (
		<table className="table-auto w-[100%] mx-auto">
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
			<tbody>
				{consoles.map((console: IConsole, idx) => {
					return (
						<tr key={idx} className="h-12 border-b border-gray-200">
							<td className="text-center">
								<span>{console.name}</span>
							</td>
							<td className="text-center">
								<span>{console.apps.length}</span>
							</td>
							<td className="text-center">
								<span>{`${console.createdAt}`}</span>
							</td>
							<td className="text-center">
								<span>{console.country}</span>
							</td>
							<td className="text-center">
								<span
									className={`font-medium py-2 px-4 rounded-full ${
										console.status === STATUS.Live
											? "bg-green-100 text-green-800"
											: "bg-orange-100 text-orange-800"
									}`}
								>
									{console.status}
								</span>
							</td>
							<td className="align-middle">
								<div className="flex items-center justify-center gap-2">
									<Link
										href={{
											pathname: `/consoles/edit/${console.id}`,
											query: {
												test: JSON.stringify(console),
											},
										}}
										className="flex items-center gap-1 px-2 py-1 text-green-500 border-2 border-green-500 rounded-md outline-none h-9"
									>
										<FontAwesomeIcon icon={faEdit} />
										<span>Edit</span>
									</Link>
									<button
										className="flex items-center gap-1 px-2 py-1 text-white bg-red-600 rounded-md outline-none h-9"
										onClick={() => {
											delete_console(console.id);
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
		</table>
	);
};

export default ConsolesTable;
