import {
	MailOutlined,
	CalendarOutlined,
	AppstoreOutlined,
	SettingOutlined,
	LinkOutlined,
} from '@ant-design/icons';
import Menu, { MenuProps } from 'antd/lib/menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Role } from '../../models/authModels';
import Routes from '../../routes/routes';
import { getRole } from '../utils/session';
import { Props } from '../utils/types';

type MenuItem = Required<MenuProps>['items'][number];

const SideMenu = (props: Props) => {

	const [selectedKey, setSelectedKey] = useState<string>("1");

	const getItem = (
		label: React.ReactNode,
		key?: React.Key | null,
		icon?: React.ReactNode,
		children?: MenuItem[]
	): MenuItem => {
		return {
			key,
			icon,
			children,
			label,
		} as MenuItem;
	}

	const renderLinkItem = (label: string, route: string) => {
		return (
			<Link to={route}>{label}</Link>
		);
	};

	const items: MenuItem[] = [
		getItem(renderLinkItem("My Courses", Routes.Courses.path), '1', <MailOutlined />),
		getRole() === Role.PROFESSOR ? getItem('My Teaching', '2', <CalendarOutlined />) : null,
		getItem(renderLinkItem("Messages", Routes.Messages.path), '3', <AppstoreOutlined />),
		getItem('Settings', '4', <SettingOutlined />),
		getItem(
			<a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
				Ant Design
			</a>,
			'link',
			<LinkOutlined />
		),
	];

	const onSelectItem: MenuProps['onClick'] = (e) => {
		console.log("clicked", e.key)
		setSelectedKey(e.key);
	};

	return (
		<Menu
			// style={{ width: 256 }}
			// defaultSelectedKeys={["1"]}
			selectedKeys={[selectedKey]}
			onClick={onSelectItem}
			// defaultOpenKeys={['sub1']}
			mode='vertical'
			theme='dark'
			items={items}
		/>
	);
};

export default SideMenu;
