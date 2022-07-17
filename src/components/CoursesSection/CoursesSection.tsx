import clsx from 'clsx';
import { CourseApiModel } from '../../services/courses';
import CourseCard from '../CourseCard';
import styles from '../../assets/styles/CoursesSection.module.scss';
import { Col, Row } from 'antd';

export type CoursesSectionProps = {
	courses: CourseApiModel[];
	sectionTitle: string;
};

const CoursesSection = (props: CoursesSectionProps) => {
	const { courses, sectionTitle } = props;
	return (
		<div className={clsx(styles.CoursesSection)}>
			<h2>{sectionTitle}</h2>
			<Row className={styles.CoursesSectionContent} gutter={16}>
				{courses.map(course => {
					return (
						<Col key={course.id} span={6}>
							<CourseCard {...course} />
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default CoursesSection;
