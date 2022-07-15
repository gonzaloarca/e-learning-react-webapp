import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CognitoCallback from '../Cognito/Callback';
import Courses from '../Courses';
import Landing from '../Landing';
import OmniRoutes from './routes';

const OmniRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path={OmniRoutes.Landing.path} element={<Landing />} />
				<Route path={OmniRoutes.Courses.path} element={<Courses />} />
				<Route path={OmniRoutes.Cognito.callbackUrl} element={<CognitoCallback />} />
			</Routes>
		</Router>
	);
};

export default OmniRouter;
