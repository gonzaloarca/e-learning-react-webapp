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

export enum IncludePoliciesApiModel {
	Forums = 'Forums',
	LiveLectures = 'Live Lectures',
	LiveExams = 'Live Exams',
	GradedAssignments = 'Graded Assignments',
	HoursOfOnDemandVideo = 'Hours of On-Demand Video',
	OneOnOneMeetings = 'One-on-One Meetings (paid)',
}

export type CourseOverviewApiModel = {
	id: string;
	name: string;
	description: string;
	owner: UserApiModel;
	image: string;
	numberOfStudents: number;
	numberOfTeachers: number;
	lastUpdated: string;
	learnings: string[];
	includes: IncludePoliciesApiModel[];
};