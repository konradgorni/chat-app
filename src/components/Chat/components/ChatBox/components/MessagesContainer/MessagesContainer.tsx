import React from "react";
import { StyledWrapper } from "./MessagesContainer.styled";
import Message from "./components/Message/Message";
import {
	IContact,
	IMessageType,
} from "../../../../utils/prepareContactsHandler";

function MessagesContainer({ currentContact }: { currentContact?: IContact }) {
	return (
		<StyledWrapper>
			{currentContact?.messages.map((c, index) => (
				<Message
					time={c.time}
					key={index}
					text={c.message}
					avatar={currentContact.avatar}
					leftSide={c.type === IMessageType.TYP1}
				/>
			))}
		</StyledWrapper>
	);
}
export default MessagesContainer;
