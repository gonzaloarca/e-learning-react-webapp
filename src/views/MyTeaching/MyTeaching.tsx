import { Button } from 'antd';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';
import Routes from '../../routes/routes';

const MyTeaching = () => {

    const navigate = useNavigate();

    const onClickCreateNewCourse = () => {
        navigate(Routes.CreateNewCourse.path.split('/')[1]);
    };

    return (
        <div className={clsx(globalStyles.contentContainer)}>
            <h1>My Teaching</h1>
            <Button onClick={onClickCreateNewCourse}>
                Create New Course
            </Button>
        </div>
    );
};

export default MyTeaching;