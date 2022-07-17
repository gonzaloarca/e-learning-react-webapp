import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import CourseHeader from '../../components/CourseHeader';
import CoursesService, { CourseApiModel } from '../../services/courses';

type Props = {};

const Course = (props: Props) => {
	/*
	 * React Router hooks
	 */
	const { id } = useParams();

	/*
	 * Local state
	 */
	const [course, setCourse] = useState<CourseApiModel>();

	/*
	 * React Query hooks
	 */
	const queryClient = useQueryClient();

	const { data: courseData, isLoading } = useQuery<CourseApiModel>(
		['course', id],
		() => CoursesService.getById(id ?? ''),
		{
			enabled: !!id,
		}
	);

	/*
	 * Effects
	 */
	useEffect(() => {
		if (id) CoursesService.getById(id).then(setCourse);
	}, [id]);

	return isLoading ? (
		<div>Loading...</div>
	) : (
		<div>
			<div style={{ height: '30vh' }}>
				<CourseHeader
					name={courseData?.name ?? ''}
					owner={courseData?.owner ?? ''}
					image={courseData?.image ?? ''}
				/>
			</div>
			<h2> about</h2>
		</div>
	);
};

export default Course;
