import React, { useContext, useMemo } from "react";
import { ChatContext } from "../../ChatContext";
import ChatBoxHeader from "./components/ChatBoxHeader/ChatBoxHeader";
import { StyledWrapper } from "./ChatBox.styled";
import MessagesContainer from "./components/MessagesContainer/MessagesContainer";
import MessageCreator from "./components/MessageCreator/MessageCreator";

function ChatBox() {
	const { contacts, selectedContact } = useContext(ChatContext);
	const currentContact = useMemo(() => {
		return contacts.find((c) => c.id === selectedContact);
	}, [selectedContact, contacts]);
	const fullName = useMemo(() => {
		return currentContact?.name !== undefined &&
			currentContact?.last !== undefined
			? `${currentContact?.name} ${currentContact?.last}`
			: "";
	}, [currentContact]);
	return (
		<StyledWrapper>
			<ChatBoxHeader
				selectedContact={selectedContact}
				fullname={fullName}
				isFavourite={currentContact?.favourite}
			/>
			<MessagesContainer currentContact={currentContact} />
			<MessageCreator contact={currentContact} />
		</StyledWrapper>
	);
}
export default ChatBox;
