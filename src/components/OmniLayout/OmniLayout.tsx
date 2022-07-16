import { Layout } from 'antd';
import clsx from 'clsx';
import SideMenu from '../SideMenu';
import { Props } from '../utils/types';
import styles from '../../App.module.scss';
import Navbar from '../Navbar';

const { Header, Footer, Sider, Content } = Layout;

const OmniLayout = (props: Props) => {
	const { children } = props;

	return (
		<Layout>
			<Header>
				<Navbar />
			</Header>
			<Layout>
				<Sider>
					<SideMenu />
				</Sider>
				<Content className={clsx(styles.LayoutContent)}>{children}</Content>
			</Layout>
			<Footer>Footer</Footer>
		</Layout>
	);
};

export default OmniLayout;
