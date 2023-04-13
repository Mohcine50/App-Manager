export interface Console {
	id: number;
	name: string;
	email: string;
	password: string;
	phoneNumber: string;
	country: string;
	apps: App[];
	status: STATUS;
	createdAt: String;
}
export enum STATUS {
	Live = "Live",
	Deleted = "Deleted",
}

export interface App {
	id: number;
	name: string;
	packageName: string;
	console: Console;
	status: STATUS;
}
