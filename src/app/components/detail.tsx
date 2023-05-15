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
			<h3 className="pl-3 text-base font-medium text-black">{data}</h3>
		</div>
	);
}
export default Detail;
