import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import ChooseRole from '../../views/ChooseRole';
import CognitoCallback from '../../components/CognitoCallback';
import OmniLayout from '../../components/OmniLayout';
import Course from '../../views/Course';
import MyCourses from '../../views/MyCourses';
import Landing from '../../views/Landing';
import Messages from '../../views/Messages';
import PageNotFound from '../../views/PageNotFound';
import OmniRoutes from '../routes';
import MyTeaching from '../../views/MyTeaching';
import CreateNewCourse from '../../views/CreateNewCourse';

const OmniRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path={OmniRoutes.Landing.path} element={<Landing />} />
				<Route
					path={OmniRoutes.Cognito.callbackUrl}
					element={<CognitoCallback />}
				/>
				<Route path={OmniRoutes.PageNotFound.path} element={<PageNotFound />} />
				<Route path={OmniRoutes.Landing.chooseRole} element={<ChooseRole />} />
				<Route path='/' element={<OmniLayout />}>
					<Route path={OmniRoutes.Messages.path} element={<Messages />} />
					<Route path={OmniRoutes.Courses.path} element={<MyCourses />} />
					<Route path={OmniRoutes.Course.path} element={<Course />} />
					<Route path={OmniRoutes.Teaching.path} element={<MyTeaching />} />
					<Route path={OmniRoutes.CreateNewCourse.path} element={<CreateNewCourse />} />
				</Route>
				<Route path='*' element={<Navigate to='/404' replace />} />
			</Routes>
		</Router>
	);
};

export default OmniRouter;
