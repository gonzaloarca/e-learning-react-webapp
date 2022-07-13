import { Layout } from 'antd';
import SideMenu from "../SideMenu";
import { Props } from "../utils/types";

const { Header, Footer, Sider, Content } = Layout;

const OmniLayout = (props: Props) => {
	const { children } = props;

	return (
		<Layout>
			<Header>Header</Header>
			<Layout>
				<Sider>
					<SideMenu />
				</Sider>
				<Content>{children}</Content>
			</Layout>
			<Footer>Footer</Footer>
		</Layout>
	);
};

export default OmniLayout;