import { Role, UserApiModel } from './usersModels';

export type AuthApiModel = {
	user: UserApiModel;
	token: string;
};