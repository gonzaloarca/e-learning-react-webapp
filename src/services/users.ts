import { Role } from './../models/usersModels';
import omniAxios, { HttpMethods } from './axios';
import { getUserDataFromJwt, getSession, getUserId } from './../components/utils/session';

const UsersRoutes = {
	chooseRole: (userId: string) => `/users/${userId}/role`,
};

const UsersService = {
	chooseRole: async (role: Role) => {
		const userId = getUserId();
		await omniAxios(UsersRoutes.chooseRole(userId), { role }, HttpMethods.PUT);
	},
};

export default UsersService;
