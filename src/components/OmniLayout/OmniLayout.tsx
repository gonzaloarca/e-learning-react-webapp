import { Layout } from 'antd';
import clsx from 'clsx';
import SideMenu from '../SideMenu';
import { Props } from '../utils/types';
import Navbar from '../Navbar';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';
import { Outlet } from 'react-router-dom';

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
					background: globalStyles.primary2,
					borderBottom: `1px solid rgba(255, 255, 255, 0.24)`,
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
						background: globalStyles.primary4,
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
					<Content>
						<Outlet />
					</Content>
					<Footer>Footer</Footer>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default OmniLayout;
