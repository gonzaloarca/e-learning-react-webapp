export enum Role {
	PROFESSOR = 'PROFESSOR',
	STUDENT = 'STUDENT',
	NONE = 'NONE',
}

export type AuthApiModel = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	role: Role;
	image: string;
	token: string;
};
