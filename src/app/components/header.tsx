"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const Header = () => {
  const { data: session } = useSession();
  const signOut_ = () => {
    signOut({
      callbackUrl: window.location.origin,
    });
  };
  return (
    <div>
      <h1 className="text-lg font-bold">
        Welcom To <span className="text-red-700">App Manager</span>
      </h1>
      <button
        onClick={() => {
          signOut_();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Header;
