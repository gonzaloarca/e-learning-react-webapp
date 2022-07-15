import axios from 'axios';
import { getSession } from '../components/utils/session';

export enum HttpMethods {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
	PATCH = 'PATCH',
};

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout: 10000,
});

const omniAxios = async <T>(url: string, data: any, method: HttpMethods, authenticated: boolean = false) => {
    const headers: any = {};

    if (authenticated) {
        const session = getSession();
        headers['Authorization'] = `Bearer ${session}`;
    }
    
	try {

        const response = await axiosClient({
            method,
            url,
            data,
            headers,
        });

        return response.data as T;
	} catch (error) {
		// TODO: handle error or maybe retry
		throw error;
	}
};

export default omniAxios;
