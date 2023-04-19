"use client";

import { SessionProvider, useSession } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
