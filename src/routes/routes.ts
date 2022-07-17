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
	Course: {
		id: 'courses',
		path: 'courses/:id',
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
	AccountSettings: {
		id: 'accountSettings',
		path: 'account',
	},
	Profile: {
		id: 'profile',
		path: 'user/:id',
	},
	Teaching: {
		id: 'teaching',
		path: 'teaching',
	},
	PageNotFound: {
		id: '404',
		path: '/404',
	},
};

export default Routes;
