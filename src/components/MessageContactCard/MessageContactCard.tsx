import { Avatar } from "antd";

export type MessageContactCardProps = {
    name: string,
    avatar: string,
    lastMessage: string,
    lastMessageTime: string,
    hasUnreadMessages: boolean,
};


const MessageContactCard = (props: MessageContactCardProps) => {

    const { name, avatar, lastMessage, lastMessageTime, hasUnreadMessages } = props;

    return (
        <div>
            <Avatar src={avatar} alt={name} size={50}/>
            <div>
                <h1>{name}</h1>
                <p>{lastMessage}</p>
            </div>
        </div>
    );
};

export default MessageContactCard;