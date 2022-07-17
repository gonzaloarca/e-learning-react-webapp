const Routes = {
	Landing: {
		id: 'landing',
		path: '/',
		chooseRole: '/choose-role',
	},
	Courses: {
		id: 'courses',
		path: 'courses',
	},
	Cognito: {
		id: 'cognito',
		path: '/cognito',
		callbackUrl: '/cognito/callback',
		logoutUrl: '/cognito/logout',
	},
	Messages: {
		id: 'messages',
		path: 'messages',
	},
	Settings: {
		id: 'settings',
		path: 'settings',
	},
	Teaching: {
		id: 'teaching',
		path: 'teaching',
	},
};

export default Routes;
