import CoursesService from '../../services/courses';
import CoursesSection from '../../components/CoursesSection/CoursesSection';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';
import clsx from 'clsx';
import { CourseApiModel } from '../../models/coursesModels';
import { useQuery } from 'react-query';

const ExploreCourses = () => {
	const {
		data: exploreCourses,
		isSuccess: exploreCoursesIsSuccess,
		isLoading: exploreCoursesIsLoading,
	} = useQuery<CourseApiModel[]>('exploreCourses', CoursesService.getAll);


	return (
		<div className={clsx(globalStyles.contentContainer)}>
			<h1>Explore Courses</h1>
			{exploreCoursesIsSuccess && <CoursesSection courses={exploreCourses} sectionTitle='' />}
		</div>
	);
}

export default ExploreCourses;