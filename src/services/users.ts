import { Role, UserApiModel } from './../models/usersModels';
import omniAxios, { HttpMethods } from './axios';
import { getUserId } from './../components/utils/session';

const UsersRoutes = {
	chooseRole: (userId: string) => `/users/${userId}/role`,
	byId: (userId: string) => `/users/${userId}`,
};

const UsersService = {
	chooseRole: async (role: Role) => {
		const userId = getUserId();
		await omniAxios(UsersRoutes.chooseRole(userId), { role }, HttpMethods.PUT);
	},
	getInfo: async (): Promise<UserApiModel> => {
		const userId = getUserId();
		return omniAxios<UserApiModel>(UsersRoutes.byId(userId), {}, HttpMethods.GET);
	},
};

export default UsersService;
