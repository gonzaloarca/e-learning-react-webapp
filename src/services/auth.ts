import { AuthApiModel } from '../models/authModels';
import omniAxios, { HttpMethods } from './axios';

const AuthServiceRoutes = {
	login: '/users/login',
};

const AuthService = {
	login: async (code: string): Promise<AuthApiModel> => {
		return omniAxios<AuthApiModel>(
			AuthServiceRoutes.login + `?code=${code}`,
			{ },
			HttpMethods.GET
		);
	},
};

export default AuthService;
