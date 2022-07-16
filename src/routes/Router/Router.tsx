import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChooseRole from '../../components/ChooseRole';
import CognitoCallback from '../../components/CognitoCallback';
import Courses from '../../views/Courses';
import Landing from '../../views/Landing';
import OmniRoutes from '../routes';

const OmniRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path={OmniRoutes.Landing.path} element={<Landing />} />
				<Route path={OmniRoutes.Courses.path} element={<Courses />} />
				<Route
					path={OmniRoutes.Cognito.callbackUrl}
					element={<CognitoCallback />}
				/>
				<Route path={OmniRoutes.Landing.chooseRole} element={<ChooseRole />} />
			</Routes>
		</Router>
	);
};

export default OmniRouter;
