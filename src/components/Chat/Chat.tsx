import React, { useEffect, useState } from "react";
import { StyledWrapper } from "./Chat.styled";
import Navbar from "./components/Navbar/Navbar";
import ContactList from "./components/ContactList/ContactList";
import { ChatContext } from "./ChatContext";
import { fetchContactsRequest } from "../../api/fetchContactsRequest";
import {
	IContact,
	prepareContactsHandler,
} from "./utils/prepareContactsHandler";
import ChatBox from "./components/ChatBox/ChatBox";
import ContactDetail from "./components/ContactDetails/ContactDetails";

function Chat() {
	const [contacts, setContacts] = useState<IContact[]>([]);
	const [selectedContact, setSelectedContact] = useState<string | null>(null);

	const fetchContacts = async () => {
		try {
			const {
				data: { results },
			} = await fetchContactsRequest();
			const preparedData = prepareContactsHandler(results);
			setContacts(preparedData);
			setSelectedContact(preparedData[0].id);
		} catch ({ message }) {}
	};
	useEffect(() => {
		fetchContacts();
	}, []);

	return (
		<StyledWrapper>
			<ChatContext.Provider
				value={{ contacts, selectedContact, setSelectedContact, setContacts }}
			>
				<Navbar />
				<ContactList />
				<ChatBox />
				<ContactDetail />
			</ChatContext.Provider>
		</StyledWrapper>
	);
}
export default Chat;
