import { CourseAttendance } from '../components/CourseCard/CourseCard';
import { CourseStatus } from '../components/CourseCard/CourseCard';

export type CourseModel = {
	id: number;
	name: string;
	description: string;
	professor: string;
	image: string;
	status: CourseStatus;
	attendance: CourseAttendance;
};

const datasource: CourseModel[] = [
	{
		id: 1,
		name: 'Introduction to Computer Science',
		description:
			'This course is designed to give students a basic understanding of the fundamental concepts of computer science.',
		professor: 'Dr. John Smith',
		image:
			'https://images.unsplash.com/photo-1452457750107-cd084dce177d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBzY2llbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		status: CourseStatus.IN_PROGRESS,
		attendance: {
			percentageCompleted: 0.5,
			minutesLeft: 10,
		},
	},
	{
		id: 2,
		name: 'Machine Learning',
		description:
			'This course is designed to give students a basic understanding of the fundamental concepts of machine learning.',
		professor: 'Dr. John Smith',
		image:
			'https://images.unsplash.com/photo-1445620466293-d6316372ab59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXIlMjBzY2llbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		status: CourseStatus.IN_PROGRESS,
		attendance: {
			percentageCompleted: 0.5,
			minutesLeft: 10,
		},
	},
];

const CoursesService = {
	getRecentlyWatched: async (): Promise<CourseModel[]> => {
		return datasource;
	},
};

export default CoursesService;