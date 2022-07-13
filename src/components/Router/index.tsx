import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from '../Courses';
import OmniRoutes from './routes';

const OmniRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path={OmniRoutes.Courses.path} element={<Courses />}/>
			</Routes>
		</Router>
	);
};

export default OmniRouter;
