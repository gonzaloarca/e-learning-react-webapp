import { useEffect, useState } from 'react';
import CoursesService from '../../services/courses';
import CoursesSection from '../../components/CoursesSection/CoursesSection';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';
import clsx from 'clsx';
import { CourseApiModel } from '../../models/coursesModels';

const MyCourses = () => {
	const [recentlyWatched, setRecentlyWatched] = useState<CourseApiModel[]>([]);

	useEffect(() => {
		CoursesService.getRecentlyWatched().then(setRecentlyWatched);
	}, []);

	return (
		<div className={clsx(globalStyles.contentContainer)}>
			<h1>My Courses</h1>
			<CoursesSection
				courses={recentlyWatched}
				sectionTitle='Recently Watched'
			/>
			<CoursesSection
				courses={recentlyWatched}
				sectionTitle='Recently Watched'
			/>
		</div>
	);
};

export default MyCourses;
