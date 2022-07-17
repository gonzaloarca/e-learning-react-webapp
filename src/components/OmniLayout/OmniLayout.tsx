import { Layout } from 'antd';
import clsx from 'clsx';
import SideMenu from '../SideMenu';
import { Props } from '../utils/types';
import Navbar from '../Navbar';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';
import { Outlet, Route, Router, Routes } from 'react-router-dom';
import OmniRoutes from '../../routes/routes';
import Messages from '../../views/Messages';
import Courses from '../../views/Courses';

const { Header, Footer, Sider, Content } = Layout;

const OmniLayout = (props: Props) => {
	const { children } = props;

	return (
		<Layout>
			<Header
				style={{
					position: 'fixed',
					width: '100%',
					zIndex: 1000,
					height: globalStyles.navbarHeight,
					padding: 0,
				}}
			>
				<Navbar />
			</Header>
			<Layout hasSider>
				<Sider
					style={{
						position: 'fixed',
						height: '100%',
						width: globalStyles.navbarWidth,
						zIndex: 1000,
						marginTop: globalStyles.navbarHeight,
					}}
				>
					<SideMenu />
				</Sider>
				<Layout
					style={{
						marginLeft: globalStyles.navbarWidth,
						marginTop: globalStyles.navbarHeight,
					}}
				>
					<Content className={clsx(globalStyles.contentContainer)}>
						<Outlet />
					</Content>
					<Footer>Footer</Footer>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default OmniLayout;
