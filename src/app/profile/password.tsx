"use client";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { changePassword } from "../../../utils";
import Detail from "../components/detail";

const Password = ({ data }: { data: string }) => {
	const [editPassword, setEditPassword] = useState<boolean>(false);
	const [password, setPassword] = useState<string>("");
	const [oldPassword, setOldPassword] = useState<string>("");
	const { data: session, update } = useSession();
	const router = useRouter();

	const handleChangePassword = async () => {
		if (password !== "" && oldPassword !== password) {
			const [status, hashedPassword] = await changePassword({
				password,
				currentPassword: oldPassword,
			});
			if (status == 200) {
				setEditPassword(false);
				await update({
					...session,
					user: {
						...session?.user,
						password: hashedPassword,
					},
				});
				router.refresh();
				toast.success("Password change Successfully", {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				toast.error("Password didn't change, try again!", {
					position: toast.POSITION.TOP_LEFT,
				});
			}
		}
	};

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
