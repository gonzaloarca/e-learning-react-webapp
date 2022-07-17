import { useQuery } from "react-query";
import MessagesContacts from "../../components/MessagesContacts";
import MessagesHeader from "../../components/MessagesHeader";
import OmniLayout from "../../components/OmniLayout";
import MessagesService, { ContactApiModel } from "../../services/messages";

const Messages = () => {

    const { data: contacts, isSuccess: contactsIsSuccess, isLoading: contactsIsLoading } = useQuery<ContactApiModel[]>("Contacts", MessagesService.getContacts);

    return (
        <OmniLayout>
            <MessagesHeader />
            {contactsIsSuccess && <MessagesContacts contacts={contacts} />}
        </OmniLayout>
    );
};

export default Messages;