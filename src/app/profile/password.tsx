"use client";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Detail from "../components/detail";

const Password = ({ data }: { data: string }) => {
	const [editPassword, setEditPassword] = useState<boolean>(false);
	const [password, setPassword] = useState<string>("");
	const [oldPassword, setOldPassword] = useState<string>("");

	const handleChangePassword = async () => {};

	return (
		<>
			{editPassword === false ? (
				<div className="relative">
					<Detail title="Password" data={data} />
					<button
						className="absolute block right-1 top-1"
						type="button"
						onClick={() => {
							setEditPassword(!editPassword);
						}}
					>
						<FontAwesomeIcon
							icon={faEdit}
							className={
								editPassword ? "text-red-600" : "text-indigo"
							}
						/>
					</button>
				</div>
			) : (
				<>
					<h2 className="px-3 text-lg font-semibold text-black">
						Password
					</h2>
					<input
						className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
						type="password"
						placeholder="Current password"
						name="oldPassword"
						id="oldPassword"
						value={oldPassword}
						onChange={(e) => {
							setOldPassword(e.target.value);
						}}
					/>
					<input
						className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
						type="password"
						placeholder="New Password"
						name="password"
						id="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>

					<div className="flex gap-1">
						<button
							className="py-2 text-white rounded-lg outline-none bg-indigo grow"
							onClick={handleChangePassword}
						>
							Save
						</button>
						<button
							className="py-2 grow rounded-lg outline-none border-[#9FA6B2] border hover:border-input-border hover:text-indigo placeholder:text-[#9FA6B2]"
							onClick={() => {
								setPassword("");
								setOldPassword("");
								setEditPassword(false);
							}}
						>
							Cancel
						</button>
					</div>
				</>
			)}
		</>
	);
};

export default Password;
