const BASE_URL = process.env.NEXTAUTH_URL;

/**
 *
 * @returns consoles
 */
export const fetchConsoles = async () => {
	const res = await fetch(`${BASE_URL}/api/console`, {
		cache: "no-store",
	});
	const data = await res.json();
	return data.consoles;
};
/**
 *
 * @returns apps
 */
export const fetchApps = async () => {
	const res = await fetch(`${BASE_URL}/api/apps`, {
		cache: "no-store",
	});
	const data = await res.json();
	return data.apps;
};
export const getApp = async (id: string) => {
	const res = await fetch(`${BASE_URL}/api/apps/${id}`, {
		cache: "no-store",
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

interface IAppBody {
	name: string;
	packageName: string;
	account: string;
	status: string;
}
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
	const res = await fetch(`${BASE_URL}/api/console/${id}`, {
		cache: "no-store",
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
