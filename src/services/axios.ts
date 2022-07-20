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
	baseURL: 'https://v5tn50fte4.execute-api.us-east-1.amazonaws.com/production',
	//baseURL: 'http://localhost:8080',
	//baseURL: '/production',
	//baseURL: '/',
	//baseURL: 'https://jsonplaceholder.typicode.com/todos/1',
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
		authenticated = true,
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
	}// headers['access-control-request-headers'] = '*';
	// headers['access-control-request-method'] = '*';
	// }

	headers = { ...headers, ...additionalHeaders };

	try {
		const response = await axiosClient({
			method,
			url, // TODO: when back is up, uncomment this line
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
