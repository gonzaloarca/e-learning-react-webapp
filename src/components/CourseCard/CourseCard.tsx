import styles from '../../assets/styles/Courses.module.scss';
import { Card } from 'antd';
import clsx from 'clsx';
const { Meta } = Card;

export enum CourseStatus {
	UP_TO_DATE = 'Up to date',
	ENDED = 'Ended',
	IN_PROGRESS = 'In progress',
}

export type CourseAttendance = {
	percentageCompleted: number;
	minutesLeft: number;
};

export type CourseCardProps = {
	name: string;
	professor: string;
	image: string;
	attendance: CourseAttendance;
	status: CourseStatus;
};

const CourseCard = (props: CourseCardProps) => {
	const { name, professor, image, attendance, status } = props;
	return (
		<Card
			className={clsx(styles.CourseCard)}
			cover={<img alt='example' src={image} />}
		>
			<Meta
				title={name}
				description={`${professor} - ${attendance} - ${status}`}
			/>
		</Card>
	);
};

export default CourseCard;
