import { AuthApiModel } from '../models/authModels';
import omniAxios, { HttpMethods } from './axios';

const AuthServiceRoutes = {
	login: '/authentication/login',
};

const AuthService = {
	login: async (code: string): Promise<AuthApiModel> => {
		return omniAxios<AuthApiModel>(
			AuthServiceRoutes.login,
			{ code },
			HttpMethods.POST
		);
	},
};

export default AuthService;
