import { ContactApiModel } from "../../models/messagesModels";
import MessageContactCard from "../MessageContactCard/MessageContactCard";

type MessagesContactsProps = {
    contacts: ContactApiModel[];
};

const MessagesContacts = (props: MessagesContactsProps) => {

    const { contacts } = props;

    return (
        <div style={{ width: "20rem" }}>
            <h1>MessagesContacts</h1>
            {contacts.map(contact => {
                return <MessageContactCard key={contact.id} {...contact} />;
            })}
        </div>
    );
};

export default MessagesContacts;