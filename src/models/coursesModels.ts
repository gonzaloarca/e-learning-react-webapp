import { UserApiModel } from './usersModels';

export type CourseApiModel = {
	id: string;
	name: string;
	description: string;
	owner: string;
	image: string;
};

export type CourseOverviewApiModel = {
	data: CourseApiModel;
	owner: UserApiModel;
	numberOfStudents: number;
	numberOfTeachers: number;
	lastUpdated: string;
	learnings: string[];
};

export type CourseCreationOmniModel = {
	name: string;
	description: string;
	images: File[];
}