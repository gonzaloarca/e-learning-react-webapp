import { UserApiModel } from './usersModels';

export enum CourseStatusApiModel {
	UP_TO_DATE = 'Up to date',
	ENDED = 'Ended',
	IN_PROGRESS = 'In progress',
}

export type CourseAttendanceApiModel = {
	percentageCompleted: number;
	minutesLeft: number;
};

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
	image: string;
}