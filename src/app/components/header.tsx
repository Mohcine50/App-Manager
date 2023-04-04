"use client";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();
  const title = path.split("/");

  return (
    <div className="bg-white p-4 flex justify-between items-center">
      <h1 className="text-gray-500">
        {title[1] === ""
          ? "Dashboard"
          : title[1].charAt(0).toUpperCase() + title[1].substring(1)}
      </h1>
      <button
        className="bg-indigo hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full"
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default Header;
