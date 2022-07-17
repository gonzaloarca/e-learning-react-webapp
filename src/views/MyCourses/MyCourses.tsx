import CoursesService from '../../services/courses';
import CoursesSection from '../../components/CoursesSection/CoursesSection';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';
import clsx from 'clsx';
import { CourseApiModel } from '../../models/coursesModels';
import { useQuery } from 'react-query';

const MyCourses = () => {

	const {
		data: recentlyWatched,
		isSuccess: recentlyWatchedIsSuccess,
		isLoading: recentlyWatchedIsLoading,
	} = useQuery<CourseApiModel[]>('RecentlyWatched', CoursesService.getRecentlyWatched);


	return (
		<div className={clsx(globalStyles.contentContainer)}>
			<h1>My Courses</h1>
			{recentlyWatchedIsSuccess && <CoursesSection courses={recentlyWatched} sectionTitle='Recently Watched' />}
		</div>
	);
};

export default MyCourses;
