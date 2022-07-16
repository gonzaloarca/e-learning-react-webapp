import { useEffect, useState } from 'react';
import CoursesService, { CourseModel } from '../../services/courses';
import Layout from '../../components/Layout';
import CoursesSection from '../../components/CoursesSection/CoursesSection';

const Courses = () => {
	const [recentlyWatched, setRecentlyWatched] = useState<CourseModel[]>([]);

	useEffect(() => {
		CoursesService.getRecentlyWatched().then(setRecentlyWatched);
	}, []);

	return (
		<Layout>
			<CoursesSection
				courses={recentlyWatched}
				sectionTitle='Recently Watched'
			/>
			<CoursesSection
				courses={recentlyWatched}
				sectionTitle='Recently Watched'
			/>
		</Layout>
	);
};

export default Courses;
