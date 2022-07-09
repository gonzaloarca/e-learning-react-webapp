import { Layout } from 'antd';
import React from 'react';
import SideMenu from '../SideMenu';
import styles from './App.module.scss';

const { Header, Footer, Sider, Content } = Layout;

function App() {
	return (
		<Layout>
			<Header>Header</Header>
			<Layout>
				<Sider>
					<SideMenu />
				</Sider>
				<Content>Content</Content>
			</Layout>
			<Footer>Footer</Footer>
		</Layout>
	);
}

export default App;
