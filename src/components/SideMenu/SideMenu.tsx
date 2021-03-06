import {
	MessageOutlined,
	CalendarOutlined,
	AppstoreOutlined,
	SettingOutlined,
	LinkOutlined,
} from '@ant-design/icons';
import Menu, { MenuProps } from 'antd/lib/menu';
import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Routes from '../../routes/routes';
import { getRole } from '../utils/session';
import { Props } from '../utils/types';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';
import { Role } from '../../models/usersModels';

type MenuItem = Required<MenuProps>['items'][number];

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
};
const SideMenu = (props: Props) => {
	const renderLinkItem = (label: string, route: string) => {
		return <Link to={route}>{label}</Link>;
	};

	const items: MenuItem[] = [
		getItem(
			renderLinkItem('My Courses', Routes.Courses.path),
			Routes.Courses.id,
			<AppstoreOutlined />
		),
		getRole() === Role.TEACHER
			? getItem(renderLinkItem('My Teaching', Routes.Teaching.path)
				, Routes.Teaching.id, <CalendarOutlined />)
			: null,
		getItem(
			renderLinkItem('Explore', Routes.Explore.path),
			Routes.Explore.id,
			<AppstoreOutlined />
		),
		getItem(
			renderLinkItem('Messages', Routes.Messages.path),
			Routes.Messages.id,
			<MessageOutlined />
		),
		getItem('Account Settings', Routes.AccountSettings.id, <SettingOutlined />),
	];

	const location = useLocation();

	const selectedKey = useMemo(() => {
		const route = location.pathname.split('/')[1];
		switch (route) {
			case Routes.Courses.id:
				return [Routes.Courses.id];
			case Routes.Messages.id:
				return [Routes.Messages.id];
			case Routes.AccountSettings.id:
				return [Routes.AccountSettings.id];
			case Routes.Teaching.id:
				return [Routes.Teaching.id];
			case Routes.Explore.id:
				return [Routes.Explore.id];
			default:
				return [Routes.Courses.id];
		}
	}, [location]);

	return (
		<Menu
			// defaultSelectedKeys={["1"]}
			selectedKeys={selectedKey}
			// defaultOpenKeys={['sub1']}
			mode='vertical'
			theme='dark'
			items={items}
			style={{ backgroundColor: globalStyles.primary4 }}
		/>
	);
};

export default SideMenu;
