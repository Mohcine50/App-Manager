"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { STATUS } from "../../../types/types.d";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import type { Data, SubData } from "@prisma/client";
import { deleteApp } from "../../../utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface IProps {
	data: IData[];
}
interface IData extends Data {
	SubData: SubData[];
}
const DataTable = ({ data }: IProps) => {
	const tHead: string[] = ["Title", "N° Apps", "Created At", "Action"];

	const router = useRouter();
	const delete_app = async (id: string) => {
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
			{data.length === 0 ? (
				<tbody>
					<tr>
						<td
							colSpan={100}
							className="font-medium text-center text-gray-300"
						>
							<span>No Data Found</span>
						</td>
					</tr>
				</tbody>
			) : (
				<tbody>
					{data.map((data: IData, idx) => {
						return (
							<tr
								key={idx}
								className="h-12 border-b border-gray-200"
							>
								<td className="text-center">
									<span>{data.title}</span>
								</td>
								<td className="text-center">
									<span>{data.SubData.length}</span>
								</td>
								<td className="text-center">
									<span>{data.SubData.length}</span>
								</td>
								<td className="text-center">
									<span>{`${data.createdAt}`}</span>
								</td>

								<td className="align-middle">
									<div className="flex items-center justify-center gap-2">
										<Link
											href={`/data/edit/${data.id}`}
											className="flex items-center gap-1 px-2 py-1 text-green-500 border-2 border-green-500 rounded-md outline-none h-9"
										>
											<FontAwesomeIcon icon={faEdit} />
											<span>Edit</span>
										</Link>
										<button
											className="flex items-center gap-1 px-2 py-1 text-white bg-red-600 rounded-md outline-none h-9"
											onClick={() => {
												delete_app(data.id);
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

export default DataTable;
