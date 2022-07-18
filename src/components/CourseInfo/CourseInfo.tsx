import { CourseOverviewApiModel } from '../../models/coursesModels';
import styles from '../../assets/styles/CourseInfo.module.scss';
import { Button, Rate } from 'antd';
import clsx from 'clsx';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

type CourseInfoProps = {
	courseData?: CourseOverviewApiModel;
};

const CourseInfo = (props: CourseInfoProps) => {
	const { courseData } = props;

	return (
		<div className={clsx(styles.courseInfo)}>
			{/* Image */}
			<img
				className={clsx(styles.courseImage, 'mr-4')}
				src={courseData?.data.image ?? ''}
				alt=''
			/>
			{/* Course Metadata */}
			<div className={clsx(styles.courseMetadata)}>
				{/* Description */}
				<div className={clsx(styles.courseDescription)}>
					{courseData?.data.description ?? ''}
				</div>

				<div className={clsx(styles.courseStats)}>
					{/* Student count */}
					<div className={clsx(styles.courseStat, 'mr-4')}>
						<MdSchool className='mr-1' />
						{`${courseData?.numberOfStudents ?? 0} student${
							courseData?.numberOfStudents === 1 ? '' : 's'
						}`}
					</div>
					{/* Teacher count */}
					<div className={clsx(styles.courseStat)}>
						<FaChalkboardTeacher className='mr-1' />
						{`${courseData?.numberOfTeachers ?? 0} teacher${
							courseData?.numberOfTeachers === 1 ? '' : 's'
						}`}
					</div>
				</div>

				{/* Last updated */}
				<div className={clsx(styles.courseLastUpdated)}>
					<AiOutlineClockCircle className='mr-1' />{' '}
					{`Last updated ${courseData?.lastUpdated.toString() ?? ''}`}
				</div>

				{/* Rating */}
				<div className={clsx(styles.courseRating)}>
					{courseData?.data.rating ?? 0}
					<div className='ml-2'>
						<Rate
							allowHalf
							disabled
							defaultValue={courseData?.data.rating ?? 0}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
