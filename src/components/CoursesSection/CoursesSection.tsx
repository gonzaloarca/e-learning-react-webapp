import clsx from 'clsx';
import CourseCard from '../CourseCard';
import styles from '../../assets/styles/CoursesSection.module.scss';
import { Col, Row } from 'antd';
import { CourseApiModel } from '../../models/coursesModels';

export type CoursesSectionProps = {
	courses: CourseApiModel[];
	sectionTitle: string;
	className?: string;
};

const CoursesSection = (props: CoursesSectionProps) => {
	const { courses, sectionTitle, className } = props;
	return (
		<div className={clsx(styles.coursesSection, className)}>
			<h2 className={clsx(styles.coursesSectionTitle)}>{sectionTitle}</h2>
			<Row className={styles.coursesSectionContent} gutter={16}>
				{courses.map(course => {
					return (
						<Col key={course.id} span={6}>
							<CourseCard course={course} />
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default CoursesSection;
