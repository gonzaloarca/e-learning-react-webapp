import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import CourseHeader from '../../components/CourseHeader';
import {
	CourseApiModel,
	CourseOverviewApiModel,
} from '../../models/coursesModels';
import CoursesService from '../../services/courses';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';
import styles from '../../assets/styles/Course.module.scss';
import { MdSchool } from 'react-icons/md';
import clsx from 'clsx';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { Rate } from 'antd';
import { AiOutlineClockCircle } from 'react-icons/ai';

type Props = {};

const Course = (props: Props) => {
	/*
	 * React Router hooks
	 */
	const { id } = useParams();

	/*
	 * Local state
	 */

	/*
	 * React Query hooks
	 */

	const { data: courseData, isLoading } = useQuery<CourseOverviewApiModel>(
		['course', id],
		() => CoursesService.getById(id ?? ''),
		{
			enabled: !!id,
		}
	);

	/*
	 * Effects
	 */

	return isLoading ? (
		<div>Loading...</div>
	) : (
		<div>
			{/* Header */}
			<div style={{ height: '30vh' }}>
				<CourseHeader
					name={courseData?.data.name ?? ''}
					owner={courseData?.data.owner ?? ''}
					image={courseData?.data.image ?? ''}
				/>
			</div>
			{/* Content */}
			<div className={clsx(globalStyles.contentContainer)}>
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
			</div>
		</div>
	);
};

export default Course;
