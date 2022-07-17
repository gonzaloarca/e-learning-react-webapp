import { useEffect, useState } from 'react';
import CoursesService, { CourseApiModel } from '../../services/courses';
import CoursesSection from '../../components/CoursesSection/CoursesSection';

const Courses = () => {
	const [recentlyWatched, setRecentlyWatched] = useState<CourseApiModel[]>([]);

	useEffect(() => {
		CoursesService.getRecentlyWatched().then(setRecentlyWatched);
	}, []);

	return (
		<>
			<CoursesSection
				courses={recentlyWatched}
				sectionTitle='Recently Watched'
			/>
			<CoursesSection
				courses={recentlyWatched}
				sectionTitle='Recently Watched'
			/>
		</>
	);
};

export default Courses;
