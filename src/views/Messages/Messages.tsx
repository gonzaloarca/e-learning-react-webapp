import { useQuery } from 'react-query';
import MessagesContacts from '../../components/MessagesContacts';
import MessagesHeader from '../../components/MessagesHeader';
import MessagesService, { ContactApiModel } from '../../services/messages';
import clsx from 'clsx';
import globalStyles from '../../assets/styles/GlobalTheme.module.scss';

const Messages = () => {
	const {
		data: contacts,
		isSuccess: contactsIsSuccess,
		isLoading: contactsIsLoading,
	} = useQuery<ContactApiModel[]>('Contacts', MessagesService.getContacts);

	return (
		<div className={clsx(globalStyles.contentContainer)}>
			<MessagesHeader />
			{contactsIsSuccess && <MessagesContacts contacts={contacts} />}
		</div>
	);
};

export default Messages;
