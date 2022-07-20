import { UserApiModel } from './usersModels';

export type CourseApiModel = {
	id: string;
	name: string;
	description: string;
	owner: string;
	image: string;
	rating: number;
};

export interface CourseOverviewApiModel {
	data: CourseApiModel;
	owner: UserApiModel;
	numberOfStudents: number;
	numberOfTeachers: number;
	lastUpdated: string;
	subscribed: boolean;
}

export type CourseContentApiModel = {
	contentId: string;
	content: Partial<Content>;
	uploaded: string;
	downloadUrl: string;
};

export type Content = {
	name: string;
	base64: string;
	type: string;
	size: number;
};

export type CourseCreationOmniModel = {
	name: string;
	description: string;
	image: Partial<Content>;
};

export type CourseUploadContentOmniModel = {
	id: string;
	content: Partial<Content>;
	file: FormData;
};

export enum SUBSCRIPTION_STATUS {
	SUBSCRIBED = 'SUBSCRIBED',
	NOT_SUBSCRIBED = 'NOT SUBSCRIBED',
	OWNER = 'OWNER',
}
export interface CourseOverviewOmniModel extends CourseOverviewApiModel {
	subscriptionStatus: SUBSCRIPTION_STATUS;
}
