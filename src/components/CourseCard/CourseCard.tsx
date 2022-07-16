import styles from '../../assets/styles/CourseCard.module.scss';
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
		<div className={styles.cardContainer}>
			<div className={styles.cardPrimary}>
				<img alt='example' src={image} className={styles.cardImage} />
				<div className={styles.cardPrimaryTitles}>
					<div className={styles.cardTitle}>{name}</div>
					<div className={styles.cardSubtitle}></div>
				</div>
			</div>
			<div className={styles.cardSecondary}>
				{`${professor} - ${attendance} - ${status}`}
			</div>
		</div>
	);
};

export default CourseCard;
