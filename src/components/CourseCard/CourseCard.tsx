import styles from '../../assets/styles/CourseCard.module.scss';
import clsx from 'clsx';
import { FaUserAlt } from 'react-icons/fa';

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
					<div className={styles.cardSubtitle}>
						<FaUserAlt className='mr-2' />
						<div className={styles.professorName}>{professor}</div>
					</div>
				</div>
			</div>
			<div className={styles.cardSecondary}>{`${attendance} - ${status}`}</div>
		</div>
	);
};

export default CourseCard;
