import AddData from "@/app/components/addData";
import AppSubHeader from "@/app/components/appSubHeader";
import Detail from "@/app/components/detail";
import React from "react";
import { getApp, getData, getDatas } from "../../../../utils";

/* { params }: { params: { id: string } } */
export default async function editAppPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;
	const app = await getApp(id);
	const data = await getDatas();
	return (
		<main className="p-5 grow">
			<div className="flex flex-col h-full gap-5 p-2 bg-white rounded-xl">
				<AppSubHeader id={app.id} />
				<div className="flex flex-col h-full gap-5">
					<Detail title="App Name" data={app.name} />
					<Detail title="Console Name" data={app.Console.name} />
					<Detail title="App Package Name" data={app.packageName} />
					<AddData dataId={app.dataId} data={data} />
				</div>
			</div>
		</main>
	);
}
