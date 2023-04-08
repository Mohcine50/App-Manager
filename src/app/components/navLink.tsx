import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

interface Props {
	href: string;
	children: React.ReactNode;
}
const NavLink = ({ href, children }: Props) => {
	const pathname = usePathname();
	const path = pathname.split("/");

	const class_ = "bg-[#4256D0] rounded-xl text-white";

	return (
		<Link
			className={`font-normal text-[16px] p-1.5 flex items-center gap-4 transition-all ease-out duration-500 ${
				path[1] === href.slice(1) ? class_ : "text-[#9FA6B2]"
			}`}
			href={href}
		>
			{children}
		</Link>
	);
};

export default NavLink;
