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
  const class_ = "bg-[#4256D0] rounded-xl text-white";
  return (
    <Link
      className={`font-normal text-[16px] p-1.5 flex items-center gap-3 ${
        pathname == href ? class_ : "text-[#9FA6B2]"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
