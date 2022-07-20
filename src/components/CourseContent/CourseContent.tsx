import React from 'react';
import { useQuery } from 'react-query';
import { CourseContentApiModel } from '../../models/coursesModels';
import CoursesService from '../../services/courses';
import CourseContentCard from '../CourseContentCard';

type CourseContentProps = {
	id: string;
	showContentDeleteButton?: boolean;
	showContentDownloadButton?: boolean;
};

const CourseContent = (props: CourseContentProps) => {

	const { id, showContentDeleteButton, showContentDownloadButton } = props;

	const {
		data: content,
		isSuccess: contentIsSuccess,
		refetch: contentRefetch,
	} = useQuery<CourseContentApiModel[]>(["CourseContent", id], () => CoursesService.getContent(id));

	const onDeleteContent = () => {
		contentRefetch({
			throwOnError: true
		});
	}

	return (
		<React.Fragment>
			{
				contentIsSuccess && content.map((courseContent: CourseContentApiModel) => {
					return <CourseContentCard
						key={courseContent.contentId}
						course={courseContent}
						courseId={id}
						onDeleteContent={onDeleteContent}
						showDownloadButton={true}
						showDeleteButton={true}
					/>;
				})
			}
		</React.Fragment>
	);
};

export default CourseContent;
