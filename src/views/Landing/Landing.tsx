import { Layout } from 'antd';
import Banner from '../../components/Banner';
import OmniHeader from '../../components/Navbar';

const { Header, Content } = Layout;

const Landing = () => {
	return (
		<Layout>
			<Header>
				<OmniHeader />
			</Header>
			<Content>
				<Banner />
				{/* TODO: add some statistics about the site or some benefits of using it */}
			</Content>
			{/* TODO: add footer */}
		</Layout>
	);
};

export default Landing;
