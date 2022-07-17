import { UserApiModel } from './usersModels';

export type AuthApiModel = {
	user: UserApiModel;
	token: string;
};