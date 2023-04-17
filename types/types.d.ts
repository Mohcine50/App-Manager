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

interface IAppBody {
	name: string;
	packageName: string;
	account: string;
	status: string;
	admobIds: IAdsIds;
	applovinIds: IAdsIds;
	unityIds: IAdsIds;
	fanIds: IAdsIds;
	hasAdmob: boolean;
	hasApplovin: boolean;
	hasUnity: boolean;
	hasFan: boolean;
}

interface IAdsIds {
	bannerId?: string;
	interId?: string;
	rewardId?: string;
	nativeId?: string;
}
