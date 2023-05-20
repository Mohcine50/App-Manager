"use client";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { changeUsername } from "../../../utils";
import Detail from "../components/detail";
import { toast, ToastContainer } from "react-toastify";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserName = ({ data }: { data: string }) => {
	const [editUsername, setEditUsername] = useState<boolean>(false);
	const [username, setUserName] = useState<string>("");
	const { data: session, update } = useSession();
	const router = useRouter();

	const handleChangeUsername = async () => {
		if (username !== "") {
			const status = await changeUsername({ username });
			if (status == 200) {
				setEditUsername(false);
				await update({
					...session,
					user: {
						...session?.user,
						username,
					},
				});
				router.refresh();
				toast.success("Username change Successfully", {
					position: toast.POSITION.TOP_CENTER,
				});
			} else {
				toast.error("Username didn't change, try again!", {
					position: toast.POSITION.TOP_LEFT,
				});
			}
		}
	};

	return (
		<>
			<ToastContainer />
			{editUsername === false ? (
				<div className="relative">
					<Detail title="UserName" data={data} />
					<button
						className="absolute block right-1 top-1"
						type="button"
						onClick={() => {
							setEditUsername(!editUsername);
						}}
					>
						<FontAwesomeIcon
							icon={faEdit}
							className={
								editUsername ? "text-red-600" : "text-indigo"
							}
						/>
					</button>
				</div>
			) : (
				<>
					<h2 className="px-3 text-lg font-semibold text-black">
						UserName
					</h2>
					<input
						className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
						type="text"
						placeholder="Username"
						name="username"
						id="username"
						value={username}
						onChange={(e) => {
							setUserName(e.target.value);
						}}
					/>
					<div className="flex gap-1">
						<button
							className="py-2 text-white rounded-lg outline-none bg-indigo grow"
							onClick={handleChangeUsername}
						>
							Save
						</button>
						<button
							className="py-2 grow rounded-lg outline-none border-[#9FA6B2] border hover:border-input-border hover:text-indigo placeholder:text-[#9FA6B2]"
							onClick={() => {
								setEditUsername(false);
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

export default UserName;
