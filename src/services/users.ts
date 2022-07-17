import { Role } from './../models/usersModels';
import omniAxios, { HttpMethods } from './axios';

const UsersRoutes = {
	chooseRole: '/users/role',
};

const UsersService = {
	chooseRole: async (role: Role) => {
		await omniAxios(UsersRoutes.chooseRole, { role }, HttpMethods.PUT);
	},
};

export default UsersService;
