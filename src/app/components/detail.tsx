function Detail({
	title,
	data,
}: {
	title: string;
	data: string;
}): React.ReactElement {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-lg font-semibold text-black">{title}</h2>
			<h3 className="flex align-middle text-base font-medium text-black py-3 px-4 rounded-lg  border-[#9fa6b21e] border ">
				{data}
			</h3>
		</div>
	);
}
export default Detail;
