import { useEffect, useState } from 'react';
import CoursesService, { CourseModel } from '../../services/courses';
import OmniLayout from '../../components/OmniLayout';
import CoursesSection from '../../components/CoursesSection/CoursesSection';

const Courses = () => {
	const [recentlyWatched, setRecentlyWatched] = useState<CourseModel[]>([]);

	useEffect(() => {
		CoursesService.getRecentlyWatched().then(setRecentlyWatched);
	}, []);

	return (
		<OmniLayout>
			<CoursesSection
				courses={recentlyWatched}
				sectionTitle='Recently Watched'
			/>
			<CoursesSection
				courses={recentlyWatched}
				sectionTitle='Recently Watched'
			/>
		</OmniLayout>
	);
};

export default Courses;
