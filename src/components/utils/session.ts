import jwt_decode from 'jwt-decode';
import { JwtTokenApiModel, Role } from "../../models/usersModels";

const SESSION_KEY = 'OMNI_SESSION';

export const getSession = () => {
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) {
        throw new Error('Session not found');
    }
    return session;
};

export const setSession = (session: string) => {
    localStorage.setItem(SESSION_KEY, session);
};

export const clearSession = () => {
    localStorage.removeItem(SESSION_KEY);
};

const ROLE = "OMNI_ROLE";

export const getRole = () => {
    const role = localStorage.getItem(ROLE);
    if (!role) {
        return Role.TEACHER;
    }
    return role;
};

export const setRole = (role: Role) => {
    localStorage.setItem(ROLE, role);
};

export const clearRole = () => {
    localStorage.removeItem(ROLE);
};

export const getUserDataFromJwt = (jwt: string): JwtTokenApiModel => {
    return jwt_decode<JwtTokenApiModel>(jwt);
};