import { Button } from 'antd';
import clsx from 'clsx';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';
import CoursesSection from '../../components/CoursesSection';
import { CourseApiModel } from '../../models/coursesModels';
import Routes from '../../routes/routes';
import CoursesService from '../../services/courses';

const MyTeaching = () => {

    const navigate = useNavigate();

    const onClickCreateNewCourse = () => {
        navigate(Routes.CreateNewCourse.path.split('/')[1]);
    };

    const {
		data: recentlyWatched,
		isSuccess: recentlyWatchedIsSuccess,
		isLoading: recentlyWatchedIsLoading,
	} = useQuery<CourseApiModel[]>('RecentlyWatched', CoursesService.getByUserId);


    return (
        <div className={clsx(globalStyles.contentContainer)}>
            <h1>My Teaching</h1>
            <Button onClick={onClickCreateNewCourse}>
                Create New Course
            </Button>
            {recentlyWatchedIsSuccess && <CoursesSection courses={recentlyWatched} sectionTitle='Recently Watched' />}
        </div>
    );
};

export default MyTeaching;