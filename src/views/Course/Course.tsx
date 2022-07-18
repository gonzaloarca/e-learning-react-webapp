import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CourseHeader from '../../components/CourseHeader';
import { CourseOverviewApiModel } from '../../models/coursesModels';
import CoursesService from '../../services/courses';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';
import styles from '../../assets/styles/Course.module.scss';
import clsx from 'clsx';
import CourseInfo from '../../components/CourseInfo/CourseInfo';
import { Tabs } from 'antd';
import CourseFeed from '../../components/CourseFeed';
import CourseContent from '../../components/CourseContent';
import CourseLectures from '../../components/CourseLectures';
import CourseLiveLectures from '../../components/CourseLiveLectures';
import CourseForum from '../../components/CourseForum';
import CourseTeachers from '../../components/CourseTeachers';
import CourseActions from '../../components/CourseActions';

const { TabPane } = Tabs;

type Props = {};

const tabs = [
	{
		label: 'Feed',
		key: 'feed',
		renderContent: () => <CourseFeed />,
	},
	{
		label: 'Content',
		key: 'content',
		renderContent: () => <CourseContent />,
	},
	{
		label: 'On-Demand Lectures',
		key: 'lectures',
		renderContent: () => <CourseLectures />,
	},
	{
		label: 'Live Lectures',
		key: 'live',
		renderContent: () => <CourseLiveLectures />,
	},
	{
		label: 'Forum',
		key: 'forum',
		renderContent: () => <CourseForum />,
	},
	{
		label: 'Teachers',
		key: 'teachers',
		renderContent: () => <CourseTeachers />,
	},
];

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
				<CourseInfo courseData={courseData} />
				<CourseActions />
				<div className='mt-4'>
					<Tabs defaultActiveKey={tabs[0].key}>
						{tabs.map(tab => (
							<TabPane tab={tab.label} key={tab.key}>
								{tab.renderContent()}
							</TabPane>
						))}
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default Course;
