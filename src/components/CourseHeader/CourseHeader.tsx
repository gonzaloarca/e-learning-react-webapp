import clsx from 'clsx';
import React from 'react';
import styles from '../../assets/styles/CourseHeader.module.scss';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';

type CourseHeaderProps = {
	name: string;
	owner: string;
	image: string;
};

const CourseHeader = (props: CourseHeaderProps) => {
	return (
		<div className={clsx(styles.headerContainer)}>
			<div className={clsx('w-full h-full relative')}>
				<img className={clsx(styles.headerImage)} src={props.image} alt='' />
				<div
					className={clsx(styles.courseInfo, globalStyles.contentContainer)}
					style={{ paddingBottom: 0 }}
				>
					<h1 className={clsx(styles.courseName)}>{props.name}</h1>
					<div className={clsx(styles.courseOwner)}>{props.owner}</div>
				</div>
			</div>
		</div>
	);
};

export default CourseHeader;
