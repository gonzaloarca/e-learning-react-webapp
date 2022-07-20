import { Avatar, Button } from 'antd';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useLocation } from 'react-router-dom';
import styles from '../../assets/styles/Navbar.module.scss';
import { UserApiModel } from '../../models/usersModels';
import UsersService from '../../services/users';

const Navbar = () => {

    const client_id = "4mve6fd0hr23mfmaud5pfkav84"
    const navigateToLogin = () => {
        //navigate(`${"URL TO COGNITO LOGIN"}`);
        window.location.href = (`https://final-cloud-g7-auth-domain.auth.us-east-1.amazoncognito.com/login?client_id=${client_id}&response_type=code&scope=email+openid&redirect_uri=https://final-cloud-g7-web.aleph51.com.ar/cognito/callback`)
    };

	const location = useLocation();
	const isLandingPage = location.pathname === "/";

	const [userAvatarUrl, setUserAvatarUrl] = useState<string>('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTl729YLKHsaDiYJ4omBiS1boX8XsbRX6X-w&usqp=CAU');

	const {
		mutate
	} = useMutation(UsersService.getInfo, {
		onSuccess: (data: UserApiModel) => {
			setUserAvatarUrl((data.avatarUrl === "" || data.avatarUrl === null || data.avatarUrl === undefined)? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTl729YLKHsaDiYJ4omBiS1boX8XsbRX6X-w&usqp=CAU" : data.avatarUrl);
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
