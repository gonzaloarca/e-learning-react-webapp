import styles from '../../assets/styles/CourseCard.module.scss';
import clsx from 'clsx';
import { FaUserAlt } from 'react-icons/fa';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseApiModel } from '../../services/courses';

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
	course: CourseApiModel;
};

const CourseCard = (props: CourseCardProps) => {
	const { name, professor, image, attendance, status, id } = props?.course;
	const navigate = useNavigate();

	const handleClick = useCallback(() => {
		navigate(`${id}`);
	}, [id, navigate]);

	return (
		<div className={styles.cardContainer} onClick={handleClick}>
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
