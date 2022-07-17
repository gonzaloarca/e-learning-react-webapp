import omniAxios, { HttpMethods } from './axios';

const MessagesRoutes = {
	contacts: '/messages/contacts',
};

export type ContactApiModel = {
	id: string;
	name: string;
	email: string;
	lastMessage: string;
	lastMessageTime: string;
	unreadMessages: number;
	hasUnreadMessages: boolean;
	avatar: string;
};

const datasource = [
	{
		id: '1',
		name: 'Jane Doe',
		email: 'jdoe@gmail.com',
		lastMessage: 'Hello!',
		lastMessageTime: '1 hour ago',
		unreadMessages: 0,
		hasUnreadMessages: false,
		avatar:
			'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
	},
	{
		id: '2',
		name: 'John Claude',
		email: 'jclaude@gmail.com',
		lastMessage: 'Bye!',
		lastMessageTime: '1 hour ago',
		unreadMessages: 1,
		hasUnreadMessages: true,
		avatar:
			'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
	},
];

const MessagesService = {
	getContacts: async (): Promise<ContactApiModel[]> => {
		await omniAxios(MessagesRoutes.contacts, {}, HttpMethods.GET);
		return datasource;
	},
};

export default MessagesService;
