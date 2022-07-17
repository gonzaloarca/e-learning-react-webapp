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