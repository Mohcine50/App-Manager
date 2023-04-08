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
export const deleteConsole = async (id: number) => {
	const res = await fetch(`/api/console/${id}`, {
		method: "DELETE",
	});
	const data = await res.json();
	return data;
};
