import axios from 'axios';
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

export type User = {
	id: string;
	name: string;
	avatarUrl: string;
};

export default AuthService;
