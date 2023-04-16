function Switch({ toggle, setToggle }: { toggle: boolean; setToggle: any }) {
	const toggleClass = " transform translate-x-5";
	return (
		<>
			<div
				className="inline-flex items-center w-12 h-6 p-1 bg-gray-400 rounded-full cursor-pointer"
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				<div
					className={
						`${
							toggle ? "bg-indigo" : "bg-black"
						}  h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out` +
						(toggle ? toggleClass : null)
					}
				></div>
			</div>
		</>
	);
}

export default Switch;
