import {
	MailOutlined,
	CalendarOutlined,
	AppstoreOutlined,
	SettingOutlined,
	LinkOutlined,
} from '@ant-design/icons';
import Menu, { MenuProps } from 'antd/lib/menu';
import React from 'react';
import { Props } from '../utils/types';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key?: React.Key | null,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem('My Courses', '1', <MailOutlined />),
	getItem('My Teaching', '2', <CalendarOutlined />),
	getItem('Messages', 'sub1', <AppstoreOutlined />, [
		getItem('Option 3', '3'),
		getItem('Option 4', '4'),
		getItem('Submenu', 'sub1-2', null, [
			getItem('Option 5', '5'),
			getItem('Option 6', '6'),
		]),
	]),
	getItem('Settings', 'sub2', <SettingOutlined />, [
		getItem('Option 7', '7'),
		getItem('Option 8', '8'),
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),
	]),
	getItem(
		<a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
			Ant Design
		</a>,
		'link',
		<LinkOutlined />
	),
];


const SideMenu = (props: Props) => {
	return (
		<Menu
			// style={{ width: 256 }}
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['sub1']}
			mode='vertical'
			theme='dark'
			items={items}
		/>
	);
};

export default SideMenu;
