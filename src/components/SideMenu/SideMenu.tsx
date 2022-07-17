import {
	MailOutlined,
	CalendarOutlined,
	AppstoreOutlined,
	SettingOutlined,
	LinkOutlined,
} from '@ant-design/icons';
import Menu, { MenuProps } from 'antd/lib/menu';
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Role } from '../../models/authModels';
import Routes from '../../routes/routes';
import { getRole } from '../utils/session';
import { Props } from '../utils/types';

type MenuItem = Required<MenuProps>['items'][number];

const SideMenu = (props: Props) => {

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
		getItem(renderLinkItem("My Courses", Routes.Courses.path), Routes.Courses.path, <MailOutlined />),
		getRole() === Role.PROFESSOR ? getItem('My Teaching', '2', <CalendarOutlined />) : null,
		getItem(renderLinkItem("Messages", Routes.Messages.path), Routes.Messages.path, <AppstoreOutlined />),
		getItem('Settings', '4', <SettingOutlined />),
		getItem(
			<a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
				Ant Design
			</a>,
			'link',
			<LinkOutlined />
		),
	];

	const selectedKey = useMemo(() => {
		const route = window.location.pathname.split("/")[1];
		switch (route) {
			case Routes.Courses.path:
				return [Routes.Courses.path];
			case Routes.Messages.path:
				return [Routes.Messages.path];
			default:
				return [Routes.Courses.path];
		};
	}, []);

	return (
		<Menu
			// style={{ width: 256 }}
			// defaultSelectedKeys={["1"]}
			selectedKeys={selectedKey}
			// defaultOpenKeys={['sub1']}
			mode='vertical'
			theme='dark'
			items={items}
		/>
	);
};

export default SideMenu;
