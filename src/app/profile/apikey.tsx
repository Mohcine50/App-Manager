"use client";

import { MouseEvent, useEffect, useState } from "react";

function ApiKey({
	title,
	data,
}: {
	title: string;
	data: string;
}): React.ReactElement {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [copyText, setCopyText] = useState<string>("Click To Copy");
	const getPositions = (e: MouseEvent) => {
		const currentTargetPosition = e.currentTarget.getBoundingClientRect();
		setMousePosition({
			x: e.clientX - currentTargetPosition.left,
			y: e.clientY - currentTargetPosition.top,
		});
	};

	const copyToClipBoard = (e: MouseEvent<HTMLHeadingElement>) => {
		navigator.clipboard
			.writeText(e.currentTarget.firstChild?.textContent as string)
			.then(() => {
				setCopyText("ApiKey Copied Successfully!");
				setTimeout(() => {
					setCopyText("Click To Copy");
				}, 5000);
			});
	};

	return (
		<div className="flex flex-col gap-2 ">
			<h2 className="px-3 text-lg font-semibold text-black">{title}</h2>
			<h3
				onMouseMove={getPositions}
				onClick={copyToClipBoard}
				className="relative group flex  align-middle text-base font-medium text-gray-600 cursor-pointer py-3 px-4 rounded-lg  border-[#9fa6b21e] border "
			>
				<span>{data}</span>
				<div
					className={`absolute invisible rounded-xl px-2 py-1  text-gray-700 border border-gray-300 bg-slate-200 group-hover:visible transition-[width] duration-600 ease-in overflow-hidden`}
					style={{
						left: mousePosition.x,
						top: mousePosition.y - 38,
						translate: "-50%",
					}}
				>
					{copyText}
				</div>
			</h3>
		</div>
	);
}
export default ApiKey;
