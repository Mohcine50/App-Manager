import React from "react";
import SelectStatus from "../components/selectStatus";

/*
name
email
password
country
phone number
status 
 */

const ConsoleForm = () => {
	return (
		<form className="flex flex-col gap-3 px-2">
			<div className="flex flex-col">
				<label htmlFor="name" className="px-2">
					Name
				</label>
				<input
					type="text"
					id="name"
					placeholder="Account Name"
					className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="email" className="px-2">
					E-mail
				</label>
				<input
					type="text"
					id="email"
					placeholder="Account Email"
					className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="password" className="px-2">
					Password
				</label>
				<input
					className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
					type="password"
					id="password"
					placeholder="Account Password"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="country" className="px-2">
					Country
				</label>
				<input
					type="text"
					id="country"
					placeholder="Account Country"
					className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="phone" className="px-2">
					Phone Number
				</label>
				<input
					type="text"
					id="phone"
					placeholder="Account Phone"
					className="h-8 px-4 py-6 rounded-lg outline-none border-[#9FA6B2] border focus:border-input-border active:border-input-border placeholder:text-[#9FA6B2]"
				/>
			</div>
			<div className="flex flex-col">
				<SelectStatus />
			</div>
		</form>
	);
};

export default ConsoleForm;
