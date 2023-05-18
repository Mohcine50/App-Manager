"use client";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Detail from "../components/detail";

const Email = ({ data }: { data: string }) => {
	const [editEmail, setEditEmail] = useState<boolean>(false);
	const [email, setEmail] = useState<string>("");

	const handleChangeEmail = async () => {};

	return (
		<>
			{editEmail === false ? (
				<div className="relative">
					<Detail title="Email" data={data} />
					<button
						className="absolute block right-1 top-1"
						type="button"
						onClick={() => {
							setEditEmail(!editEmail);
						}}
					>
						<FontAwesomeIcon
							icon={faEdit}
							className={
								editEmail ? "text-red-600" : "text-indigo"
							}
						/>
					</button>
				</div>
			) : (
				<>
					<h2 className="px-3 text-lg font-semibold text-black">
						Email
					</h2>
					<input
						className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
						type="text"
						placeholder="Email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<div className="flex gap-1">
						<button
							className="py-2 text-white rounded-lg outline-none bg-indigo grow"
							onClick={handleChangeEmail}
						>
							Save
						</button>
						<button
							className="py-2 grow rounded-lg outline-none border-[#9FA6B2] border hover:border-input-border hover:text-indigo placeholder:text-[#9FA6B2]"
							onClick={() => {
								setEditEmail(false);
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

export default Email;
