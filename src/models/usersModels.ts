export enum Role {
	PROFESSOR = 'PROFESSOR',
	STUDENT = 'STUDENT',
	NONE = 'NONE',
}

export type UserApiModel = {
	id: string;
	name: string;
	email: string;
	avatarUrl: string;
	role: Role;
};
