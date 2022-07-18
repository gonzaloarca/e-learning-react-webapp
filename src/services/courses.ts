import {
	CourseApiModel,
	CourseCreationOmniModel,
	CourseOverviewApiModel,
	CourseUploadContentOmniModel,
} from '../models/coursesModels';
import omniAxios, { HttpMethods } from './axios';
import { Role } from '../models/usersModels';

const CoursesRoutes = {
	recentlyWatched: '/courses/recently-watched',
	byId: (id: string) => `/courses/${id}`,
	courses: '/courses',
	contentById: (id: string) => `/courses/${id}/content`,
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
		rating: 4.3,
	},
	{
		id: '2',
		name: 'Machine Learning',
		description:
			'This course is designed to give students a basic understanding of the fundamental concepts of machine learning.',
		owner: 'Dr. John Smith',
		image:
			'https://images.unsplash.com/photo-1445620466293-d6316372ab59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXIlMjBzY2llbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		rating: 4.3,
	},
	{
		id: '3',
		name: 'Machine Learning',
		description:
			'This course is designed to give students a basic understanding of the fundamental concepts of machine learning.',
		owner: 'Dr. John Smith',
		image:
			'https://images.unsplash.com/photo-1445620466293-d6316372ab59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXIlMjBzY2llbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		rating: 4.3,
	},
	{
		id: '4',
		name: 'Machine Learning',
		description:
			'This course is designed to give students a basic understanding of the fundamental concepts of machine learning.',
		owner: 'Dr. John Smith',
		image:
			'https://images.unsplash.com/photo-1445620466293-d6316372ab59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXIlMjBzY2llbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		rating: 4.3,
	},
	{
		id: '5',
		name: 'Machine Learning',
		description:
			'This course is designed to give students a basic understanding of the fundamental concepts of machine learning.',
		owner: 'Dr. John Smith',
		image:
			'https://images.unsplash.com/photo-1445620466293-d6316372ab59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXIlMjBzY2llbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		rating: 4.3,
	},
];

const CoursesService = {
	getRecentlyWatched: async (): Promise<CourseApiModel[]> => {
		await omniAxios(CoursesRoutes.recentlyWatched, {}, HttpMethods.GET);
		return datasource;
	},
	getById: async (id: string): Promise<CourseOverviewApiModel> => {
		await omniAxios(CoursesRoutes.byId(id), {}, HttpMethods.GET);
		return {
			data: datasource[0],
			owner: {
				id: '1',
				name: 'John Smith',
				email: 'john@smith.com',
				avatarUrl:
					'https://edtech4beginnerscom.files.wordpress.com/2021/05/1.png',
				role: Role.TEACHER,
			},
			numberOfStudents: 10,
			numberOfTeachers: 2,
			lastUpdated: '2020-05-01T00:00:00.000Z',
		};
	},
	create: async (course: CourseCreationOmniModel): Promise<void> => {
		await omniAxios(CoursesRoutes.courses, { ...course }, HttpMethods.POST);
	},
	uploadContent: async (
		courseContent: CourseUploadContentOmniModel
	): Promise<void> => {
		const { file, content } = courseContent;
		await omniAxios(
			CoursesRoutes.contentById(courseContent.id),
			{ file, content },
			HttpMethods.PUT,
			{
				additionalHeaders: {
					'Content-Type': 'multipart/form-data',
				},
			}
		);
	},
};

export default CoursesService;
