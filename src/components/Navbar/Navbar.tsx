import { Avatar, Button } from 'antd';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useLocation } from 'react-router-dom';
import styles from '../../assets/styles/Navbar.module.scss';
import { UserApiModel } from '../../models/usersModels';
import UsersService from '../../services/users';

const Navbar = () => {

	const navigateToLogin = () => {
		window.location.href = ("https://final-cloud-g7-auth-domain.auth.us-east-1.amazoncognito.com/login?client_id=bast2atl9hm3lopc88ie04k1&response_type=code&scope=email+openid&redirect_uri=http://localhost:3000/cognito/callback")
	};

	const location = useLocation();
	const isLandingPage = location.pathname === "/";

	const [userAvatarUrl, setUserAvatarUrl] = useState<string>('');

	const {
		mutate
	} = useMutation(UsersService.getInfo, {
		onSuccess: (data: UserApiModel) => {
			setUserAvatarUrl(data.avatarUrl);
		}, onError: (error: any) => {
			console.log(error);
		}
	});

	useEffect(() => {
		if (!isLandingPage) {
			mutate();
		}
	}, []);

	return (
		<div className={styles.navbarContent}>
			<img
				className={styles.navbarLogo}
				alt='omni logo'
				src='/img/omni-logo-white2.svg'
			/>
			{
				isLandingPage ? <Button onClick={navigateToLogin}>Go to the platform</Button> : <Avatar src={userAvatarUrl} alt="User Avatar" size={50} />
			}
		</div>
	);
};

export default Navbar;
