import axios from 'axios';
import { getSession } from '../components/utils/session';

export enum HttpMethods {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
	PATCH = 'PATCH',
}

const axiosClient = axios.create({
	// baseURL: 'http://localhost:3000',
	baseURL: 'https://jsonplaceholder.typicode.com/todos/1',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	timeout: 10000,
});

const omniAxios = async <T>(
	url: string,
	data: {},
	method: HttpMethods,
	{
		authenticated = false,
		additionalHeaders = {},
		otherAxiosParams = {},
	}: {
		authenticated?: boolean;
		additionalHeaders?: {};
		otherAxiosParams?: {};
	} = {}
) => {
	let headers: any = {};

	if (authenticated) {
		const session = getSession();
		headers['Authorization'] = `Bearer ${session}`;
	}

	headers = { ...headers, ...additionalHeaders };

	try {
		const response = await axiosClient({
			method,
			// url, // TODO: when back is up, uncomment this line
			data,
			headers,
			...otherAxiosParams,
		});

		return response.data as T;
	} catch (error) {
		// TODO: handle error or maybe retry
		throw error;
	}
};

export default omniAxios;
