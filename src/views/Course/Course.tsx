import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CourseHeader from '../../components/CourseHeader';
import { CourseOverviewApiModel, CourseOverviewOmniModel, SUBSCRIPTION_STATUS } from '../../models/coursesModels';
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
import { getUserId } from '../../components/utils/session';

const { TabPane } = Tabs;


const tabs = [
	{
		label: 'Feed',
		key: 'feed',
		renderContent: () => <CourseFeed />,
	},
	{
		label: 'Content',
		key: 'content',
		renderContent: (id: string, showDeleteButton: boolean, showDownloadButton: boolean) => <CourseContent id={id} showContentDeleteButton={showDeleteButton} showContentDownloadButton={showDownloadButton} />,
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

type Props = {
	showContentDeleteButton?: boolean;
	showContentDownloadButton?: boolean;
};

const Course = (props: Props) => {

	const {
		showContentDeleteButton = false,
		showContentDownloadButton = false,
	} = props;
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
	const [subscriptionStatus, setSubscriptionStatus] = useState<SUBSCRIPTION_STATUS>(SUBSCRIPTION_STATUS.NOT_SUBSCRIBED);

	const { data: courseData, isLoading, isSuccess } = useQuery<CourseOverviewOmniModel>(
		['course', id],
		() => CoursesService.getById(id ?? ''),
		{
			enabled: !!id,
		}
	);

	useEffect(() => {
		if (isSuccess) {
			setSubscriptionStatus(courseData!.subscriptionStatus);
		}
	}, [isSuccess]);

	const {
		mutate
	} = useMutation(CoursesService.subscribe, {
		onSuccess: () => {
			setSubscriptionStatus(SUBSCRIPTION_STATUS.SUBSCRIBED);
		},
		onError: () => {
		}
	});

	const onSubscribe = () => {
		mutate(courseData!.data.id);
	};

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
				<CourseActions subscriptionStatus={subscriptionStatus} onClickSubscribe={onSubscribe} />
				<div className='mt-4'>
					<Tabs defaultActiveKey={tabs[0].key}>
						{tabs.map(tab => (
							<TabPane tab={tab.label} key={tab.key}>
								{
									tab.renderContent(courseData!.data.id,
										showContentDeleteButton && subscriptionStatus === SUBSCRIPTION_STATUS.OWNER,
										showContentDownloadButton && subscriptionStatus !== SUBSCRIPTION_STATUS.NOT_SUBSCRIBED)
								}
							</TabPane>
						))}
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default Course;
