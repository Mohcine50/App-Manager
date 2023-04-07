"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();
  const title = path.split("/");

  return (
    <div className="static flex items-center justify-between p-5 bg-white ">
      <h1 className="text-xl text-gray-500">
        {title[1] === ""
          ? "Dashboard"
          : title[1].charAt(0).toUpperCase() + title[1].substring(1)}
      </h1>
    </div>
  );
};

export default Header;
