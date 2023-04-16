"use client";
import { useFormik } from "formik";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { addApp, editApp } from "../../../utils";
import { Console } from "../../../types/types";
import Switch from "../components/switch";
import AdsIdField from "../components/adsForm";

interface IAdsIds {
	bannerId?: string;
	interId?: string;
	rewardId?: string;
	nativeId?: string;
}

interface IProps {
	name?: string;
	packageName?: string;
	account?: string;
	dataId?: string;
	status?: string;
	actionType: "ADD" | "EDIT";
	consoles: Console[];
	Admob?: boolean;
	Applovin?: boolean;
	Unity?: boolean;
	Fan?: boolean;
	admobIds?: IAdsIds;
	applovinIds?: IAdsIds;
	unityIds?: IAdsIds;
	fanIds?: IAdsIds;
}
const AppFrom = ({
	name = "",
	packageName = "",
	account = "",
	status = "",
	actionType,
	consoles,
	Admob = false,
	Applovin = false,
	Unity = false,
	Fan = false,
	admobIds = {},
	applovinIds = {},
	fanIds = {},
	unityIds = {},
}: IProps) => {
	const router = useRouter();
	const { id } = useParams();

	const [hasAdmob, setHasAdmob] = useState<boolean>(Admob);
	const [hasApplovin, setHasApplovin] = useState<boolean>(Applovin);
	const [hasUnity, setHasUnity] = useState<boolean>(Unity);
	const [hasFan, setHasFan] = useState<boolean>(Fan);

	const formik: any = useFormik({
		initialValues: {
			name: name,
			packageName: packageName,
			account: account,
			status: status,
			hasAdmob,
			hasApplovin,
			hasUnity,
			hasFan,
			admobIds,
			applovinIds,
			fanIds,
			unityIds,
		},
		onSubmit: async (values) => {
			if (actionType === "ADD") {
				const status = await addApp({
					name: values.name,
					packageName: values.packageName,
					account: values.account,
					status: values.status,
				});
				if (status === 200) {
					router.replace("/apps");
				}
			} else {
				const status = await editApp(
					{
						name: values.name,
						packageName: values.packageName,
						account: values.account,
						status: values.status,
					},
					id
				);
				if (status === 200) {
					router.replace("/apps");
				}
			}
		},
	});

	return (
		<form
			className="flex flex-col gap-3 px-2"
			onSubmit={formik.handleSubmit}
		>
			<div className="flex gap-5">
				<div className="flex flex-col flex-grow gap-2">
					<label htmlFor="name" className="px-2">
						App Name
					</label>
					<input
						onChange={formik.handleChange}
						type="text"
						id="name"
						value={formik.values.name}
						placeholder="App Name"
						className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					/>
				</div>
				<div className="flex flex-col flex-grow gap-2">
					<label htmlFor="packageName" className="px-2">
						Package Name
					</label>
					<input
						onChange={formik.handleChange}
						type="text"
						id="packageName"
						value={formik.values.packageName}
						placeholder="App Package Name"
						className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					/>
				</div>
			</div>
			<div className="flex gap-5">
				<div className="flex flex-col gap-2 basis-full">
					<label htmlFor="account" className="px-2">
						Account
					</label>
					<select
						onChange={formik.handleChange}
						id="account"
						name="account"
						placeholder="Associated console"
						value={formik.values.account}
						defaultValue={consoles[0].name}
						className="h-[50px] pl-3 bg-transparent rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					>
						<option value="" disabled selected>
							Select Console
						</option>
						{consoles.map((console, idx) => {
							return (
								<option
									className="py-2"
									value={console.id}
									key={idx}
									disabled={console.status === "Deleted"}
								>
									{console.name}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className="flex">
				<div className="flex flex-col flex-grow gap-2">
					<label htmlFor="status" className="px-2">
						Status
					</label>
					<select
						onChange={formik.handleChange}
						id="status"
						name="status"
						value={formik.values.status}
						className="h-[50px] pl-3 bg-transparent rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					>
						<option value="" disabled selected>
							Select Status
						</option>
						<option className="py-2" value="Live" selected>
							Live
						</option>
						<option className="py-2" value="Deleted">
							Deleted
						</option>
					</select>
				</div>
			</div>

			<div className="flex flex-col gap-5 pl-3">
				<div className="">
					<label htmlFor="admob" className="flex gap-4">
						<span>Admob</span>
						<Switch toggle={hasAdmob} setToggle={setHasAdmob} />
					</label>
					<input
						type="checkbox"
						id="admob"
						className="sr-only"
						onChange={formik.handleChange}
						checked={formik.values.hasAdmob}
					/>
					{hasAdmob && (
						<div className="transition duration-700 ease-in-out">
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.admobIds.bannerId}
								inputFor="admob"
								title="Banner Id"
							/>
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.admobIds.interId}
								inputFor="admob"
								title="Inter Id"
							/>
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.admobIds.rewardId}
								inputFor="admob"
								title="Reward Id"
							/>
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.admobIds.nativeId}
								inputFor="admob"
								title="Native Id"
							/>
						</div>
					)}
				</div>
				<div className="">
					<label htmlFor="unity" className="flex gap-4">
						<span>Unity</span>
						<Switch toggle={hasUnity} setToggle={setHasUnity} />
					</label>
					<input
						type="checkbox"
						id="unity"
						className="sr-only"
						onChange={formik.handleChange}
						checked={formik.values.hasUnity}
					/>
					{hasUnity && (
						<div className="transition duration-700 ease-in-out">
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.unityIds.bannerId}
								inputFor="unity"
								title="Banner Id"
							/>
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.unityIds.interId}
								inputFor="unity"
								title="Inter Id"
							/>
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.unityIds.rewardId}
								inputFor="unity"
								title="Reward Id"
							/>
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.unityIds.nativeId}
								inputFor="unity"
								title="Native Id"
							/>
						</div>
					)}
				</div>
				<div className="">
					<label htmlFor="fan" className="flex gap-4">
						<span>Fan</span>
						<Switch toggle={hasFan} setToggle={setHasFan} />
					</label>
					<input
						type="checkbox"
						id="fan"
						className="sr-only"
						onChange={formik.handleChange}
						checked={formik.values.hasFan}
					/>
					{hasFan && (
						<div className="transition duration-700 ease-in-out">
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.fanIds.bannerId}
								inputFor="fan"
								title="Banner Id"
							/>
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.fanIds.interId}
								inputFor="fan"
								title="Inter Id"
							/>
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.fanIds.rewardId}
								inputFor="fan"
								title="Reward Id"
							/>
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.fanIds.nativeId}
								inputFor="fan"
								title="Native Id"
							/>
						</div>
					)}
				</div>
				<div className="">
					<label htmlFor="applovin" className="flex gap-4">
						<span>Applovin</span>
						<Switch
							toggle={hasApplovin}
							setToggle={setHasApplovin}
						/>
					</label>
					<input
						type="checkbox"
						id="applovin"
						className="sr-only"
						onChange={formik.handleChange}
						checked={formik.values.hasApplovin}
					/>
					{hasApplovin && (
						<div className="transition duration-700 ease-in-out">
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.applovinIds.bannerId}
								inputFor="applovin"
								title="Banner Id"
							/>
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.applovinIds.interId}
								inputFor="applovin"
								title="Inter Id"
							/>
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.applovinIds.rewardId}
								inputFor="applovin"
								title="Reward Id"
							/>
							<AdsIdField
								onChange={formik.values.onChange}
								value={formik.values.applovinIds.nativeId}
								inputFor="applovin"
								title="Native Id"
							/>
						</div>
					)}
				</div>
			</div>
			<button
				type="submit"
				className="block px-4 py-3 ml-auto mr-3 font-normal text-white rounded-md my-7 bg-indigo"
			>
				{actionType === "ADD" ? "Add an App" : "Edit App"}
			</button>
		</form>
	);
};

export default AppFrom;
