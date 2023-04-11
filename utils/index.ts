const BASE_URL = process.env.NEXTAUTH_URL;

/**
 *
 * @returns consoles
 */
export const fetchConsoles = async () => {
	const res = await fetch(`${BASE_URL}/api/console`);
	const data = await res.json();
	return data.consoles;
};
/**
 *
 * @returns apps
 */
export const fetchApps = async () => {
	const res = await fetch(`${BASE_URL}/api/apps`);
	const data = await res.json();
	return data.apps;
};
/**
 * Delete App
 * @param id id of app
 * @returns deleted app
 */
export const deleteApp = async (id: number) => {
	const res = await fetch(`/api/apps/${id}`, {
		method: "DELETE",
	});
	const data = await res.json();
	return data;
};

interface IBody {
	name: string;
	email: string;
	password: string;
	phoneNumber: string;
	country: string;
	status: string;
}
export const addConsole = async ({ status = "Live", ...body }: IBody) => {
	const res = await fetch("/api/console/", {
		method: "POST",

		body: JSON.stringify(body),
	});
	return res.status;
};

export const editConsole = async ({ status = "Live", ...body }: IBody) => {
	const res = await fetch("/api/console/", {
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

export const deleteConsole = async (id: number) => {
	const res = await fetch(`/api/console/${id}`, {
		method: "DELETE",
	});
	const data = await res.json();
	return data;
};
