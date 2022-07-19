import { Role } from './../models/usersModels';
import omniAxios, { HttpMethods } from './axios';
import { getUserDataFromJwt, getSession } from './../components/utils/session';

const UsersRoutes = {
	chooseRole: (userId: string) => `/users/${userId}/role`,
};

const UsersService = {
	chooseRole: async (role: Role) => {
		const { id } = getUserDataFromJwt(getSession());
		await omniAxios(UsersRoutes.chooseRole(id), { role }, HttpMethods.PUT);
	},
};

export default UsersService;
