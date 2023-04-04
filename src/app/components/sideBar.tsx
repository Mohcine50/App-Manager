"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faFileCode,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";
import NavLink from "./navLink";

const SideBar = () => {
  return (
    <div className="bg-[#0E1B6B] text-white relative max-h-screen h-screen w-72 overflow-hidden">
      <Image
        src={require("/static/images/patternHex.png")}
        alt=""
        className="absolute top-0 left-0 h-full"
      />
      <div className="w-auto bg-[#0E1B6B] relative z-10 px-7 py-5">
        <h1 className="text-2xl font-semibold ">Apps Manager</h1>
      </div>
      <div className="bg-gr-l h-[100%] flex flex-col gap-3 px-5 py-5 relative z-12 ">
        <NavLink href="/">
          <FontAwesomeIcon icon={faDashboard} style={{ fontSize: 18 }} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink href="/consoles">
          <FontAwesomeIcon icon={faFileCode} style={{ fontSize: 18 }} />
          <span>Consoles</span>
        </NavLink>
        <NavLink href="/apps">
          <FontAwesomeIcon icon={faLaptop} style={{ fontSize: 18 }} />
          <span>Apps</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
