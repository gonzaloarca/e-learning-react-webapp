import { User } from './auth';
import omniAxios, { HttpMethods } from './axios';

const CoursesRoutes = {
	recentlyWatched: '/courses/recently-watched',
	byId: (id: string) => `/courses/${id}`,
};

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
	owner: User;
	image: string;
	numberOfStudents: number;
	numberOfTeachers: number;
	lastUpdated: string;
	learnings: string[];
	includes: IncludePoliciesApiModel[];
};

const datasource: CourseApiModel[] = [
	{
		id: '1',
		name: 'Introduction to Computer Science',
		description:
			'This course is designed to give students a basic understanding of the fundamental concepts of computer science.',
		owner: 'Dr. John Smith',
		image:
			'https://images.unsplash.com/photo-1452457750107-cd084dce177d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBzY2llbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
	},
	{
		id: '2',
		name: 'Machine Learning',
		description:
			'This course is designed to give students a basic understanding of the fundamental concepts of machine learning.',
		owner: 'Dr. John Smith',
		image:
			'https://images.unsplash.com/photo-1445620466293-d6316372ab59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXIlMjBzY2llbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
	},
];

const CoursesService = {
	getRecentlyWatched: async (): Promise<CourseApiModel[]> => {
		await omniAxios(CoursesRoutes.recentlyWatched, {}, HttpMethods.GET);
		return datasource;
	},
	getById: async (id: string): Promise<CourseApiModel> => {
		await omniAxios(CoursesRoutes.byId(id), {}, HttpMethods.GET);
		return datasource[0];
	},
};

export default CoursesService;
