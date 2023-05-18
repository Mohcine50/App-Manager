import { SubData } from "@prisma/client";
import { IAppBody } from "../types/types";

const BASE_URL = process.env.NEXTAUTH_URL;

/**
 *
 * @returns consoles
 */
export const fetchConsoles = async () => {
	const res = await fetch(`${BASE_URL}api/console`, {
		cache: "no-cache",
	});
	const data = await res.json();
	return data.consoles;
};

/**
 *
 * @returns apps
 */
export const fetchApps = async () => {
	const res = await fetch(`${BASE_URL}api/apps`, {
		cache: "no-cache",
	});
	const data = await res.json();
	return data.apps;
};
export const getApp = async (id: string) => {
	const res = await fetch(`${BASE_URL}api/apps/${id}`, {
		cache: "no-cache",
	});
	const data = await res.json();
	return data;
};
export const getAppClient = async (id: string) => {
	const res = await fetch(`/api/apps/${id}`, {
		cache: "no-cache",
	});
	const data = await res.json();
	return data;
};
/**
 * Delete App
 * @param id id of app
 * @returns deleted app
 */
export const deleteApp = async (id: string) => {
	const res = await fetch(`/api/apps/${id}`, {
		method: "DELETE",
	});
	const data = await res.json();
	return data;
};

export const addApp = async (body: IAppBody) => {
	const res = await fetch("/api/apps/", {
		method: "POST",
		body: JSON.stringify(body),
	});
	return res.status;
};
export const editApp = async (body: IAppBody, id: string) => {
	const res = await fetch(`/api/apps/${id}`, {
		method: "PUT",

		body: JSON.stringify(body),
	});
	return res.status;
};

export const updateData = async (id: string, dataId: string) => {
	const res = await fetch(`/api/apps/${id}/add-data`, {
		method: "PUT",
		body: JSON.stringify({ dataId }),
	});
	return res.status;
};

interface IConsoleBody {
	name: string;
	email: string;
	password: string;
	phoneNumber: string;
	country: string;
	status: string;
	operator: string;
}

export const getConsole = async (id: string) => {
	const res = await fetch(`${BASE_URL}api/console/${id}`, {
		cache: "no-cache",
	});
	const data = await res.json();
	return data.console;
};
export const addConsole = async ({
	status = "Live",
	...body
}: IConsoleBody) => {
	const res = await fetch("/api/console/", {
		method: "POST",

		body: JSON.stringify(body),
	});
	return res.status;
};

export const editConsole = async (
	{ status = "Live", ...body }: IConsoleBody,
	id: string
) => {
	const res = await fetch(`/api/console/${id}`, {
		method: "PUT",
		body: JSON.stringify(body),
	});
	return res.status;
};

/**
 *
 * @param id id of console
 * @returns
 */

export const deleteConsole = async (id: string) => {
	const res = await fetch(`/api/console/${id}`, {
		method: "DELETE",
	});
	const data = await res.json();
	return data;
};

/**
Get Data 
 */

export const getDatas = async () => {
	const res = await fetch(`${BASE_URL}api/data`, {
		cache: "no-cache",
	});
	const data = await res.json();
	return data.data;
};

// !Handle Data API calls

export interface ISubData {
	title: string;
	image?: string | null;
	description: string;
	id?: string;
}
interface IDataBody {
	title: string;
	subData: ISubData[];
}
export const addData = async (body: IDataBody) => {
	const res = await fetch("/api/data/", {
		method: "POST",

		body: JSON.stringify(body),
	});
	return res.status;
};

export const deleteData = async (id: string) => {
	const res = await fetch(`/api/data/${id}`, {
		method: "DELETE",
	});
	const data = await res.json();
	return data;
};

export const getData = async (id: string) => {
	const res = await fetch(`${BASE_URL}api/data/${id}`, {
		cache: "no-cache",
	});
	const data = await res.json();
	return data.data;
};

export const editData = async (body: IDataBody, id: string) => {
	const res = await fetch(`/api/data/${id}`, {
		method: "PUT",
		body: JSON.stringify(body),
	});
	return res.status;
};

/* Handle username, email and password changes */

export const changeUsername = async (body: { username: string }) => {
	const res = await fetch("/api/user/change-username", {
		method: "PUT",
		body: JSON.stringify(body),
	});

	return res.status;
};

export const changeEmail = async (body: { email: string }) => {
	const res = await fetch("/api/user/change-email", {
		method: "PUT",
		body: JSON.stringify(body),
	});

	return res.status;
};

export const changePassword = async (body: {
	password: string;
	currentPassword: string;
}) => {
	const res = await fetch("/api/user/change-username", {
		method: "PUT",
		body: JSON.stringify(body),
	});

	return res.status;
};
