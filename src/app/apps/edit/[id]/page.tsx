import React from "react";
import { fetchConsoles, getApp } from "../../../../../utils";
import AppFrom from "../../appForm";

/* { params }: { params: { id: string } } */
export default async function editAppPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;
	const app = await getApp(id);
	const consoles = await fetchConsoles();

	const admobIds = {
		bannerId: app?.ads?.admob?.bannerId,
		interId: app?.ads?.admob?.interId,
		rewardId: app?.ads?.admob?.rewardId,
		nativeId: app?.ads?.admob?.nativeId,
	};
	const applovinIds = {
		bannerId: app?.ads.applovin?.bannerId,
		interId: app?.ads.applovin?.interId,
		rewardId: app?.ads.applovin?.rewardId,
		nativeId: app?.ads.applovin?.nativeId,
	};
	const fanIds = {
		bannerId: app?.ads.fan?.bannerId,
		interId: app?.ads.fan?.interId,
		rewardId: app?.ads.fan?.rewardId,
		nativeId: app?.ads.fan?.nativeId,
	};
	const unityIds = {
		bannerId: app?.ads.unity?.bannerId,
		interId: app?.ads.unity?.interId,
		rewardId: app?.ads.unity?.rewardId,
		nativeId: app?.ads.unity?.nativeId,
	};
	return (
		<main className="p-5 grow">
			<div className="h-full p-2 bg-white rounded-xl drop-shadow-sm">
				<AppFrom
					actionType="EDIT"
					name={app.name}
					status={app.status}
					packageName={app.packageName}
					account={app?.Console?.name}
					consoles={consoles}
					Admob={app?.ads?.hasAdmob}
					admobIds={admobIds}
					Applovin={app?.ads?.hasApplovin}
					applovinIds={applovinIds}
					Unity={app?.ads?.hasUnity}
					unityIds={unityIds}
					fanIds={fanIds}
					Fan={app?.ads?.hasFan}
				/>
			</div>
		</main>
	);
}
