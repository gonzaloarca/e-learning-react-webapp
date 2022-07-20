import CoursesService from '../../services/courses';
import CoursesSection from '../../components/CoursesSection/CoursesSection';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';
import clsx from 'clsx';
import { CourseApiModel } from '../../models/coursesModels';
import { useQuery } from 'react-query';
import { Role } from '../../models/usersModels';

const MyCourses = () => {

	const {
		data: myCourses,
		isSuccess: myCoursesIsSuccess,
		isLoading: myCoursesIsLoading,
	} = useQuery<CourseApiModel[]>('MyCourses', () => CoursesService.getByUserId(Role.STUDENT));

	return (
		<div className={clsx(globalStyles.contentContainer)}>
			<h1>My Courses</h1>
			{myCoursesIsSuccess && <CoursesSection courses={myCourses} sectionTitle='' />}
		</div>
	);
};

export default MyCourses;
