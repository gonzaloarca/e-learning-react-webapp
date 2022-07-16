import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Navbar.module.scss';

const Navbar = () => {
	const navigate = useNavigate();

	const navigateToLogin = () => {
		navigate(`${'URL TO COGNITO LOGIN'}`);
	};

	return (
		<div className={styles.navbarContent}>
			<img
				className={styles.navbarLogo}
				alt='omni logo'
				src='img/omni-logo-white-2.svg'
			/>
			<Button onClick={navigateToLogin}>Go to the platform</Button>
		</div>
	);
};

export default Navbar;
