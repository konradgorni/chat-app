import React, { useContext, useState } from "react";
import { Send, Smile, Paperclip } from "react-feather";
import {
	StyledIcon,
	StyledIconsWrapper,
	StyledInput,
	StyledSendIcon,
	StyledWrapper,
} from "./MessageCreator.styled";
import {
	IContact,
	IMessage,
	IMessageType,
} from "../../../../utils/prepareContactsHandler";
import { ChatContext } from "../../../../ChatContext";

function MessageCreator({ contact }: { contact?: IContact }) {
	const [inputValue, setInputValue] = useState<string>("");
	const { setContacts, contacts } = useContext(ChatContext);

	const updateContactMessages = (message: IMessage) =>
		setContacts((prev) =>
			prev.map((c) => {
				if (c.id === contact?.id) {
					const copyContact = { ...c };
					copyContact.messages = [...c.messages, message];
					return copyContact;
				}
				return c;
			}),
		);

	const delay = (ms: number) =>
		new Promise((resolve) => setTimeout(resolve, ms));

	const addContactResponse = async (message: string) => {
		await delay(Math.floor(Math.random() * (10000 - 5000 + 1) + 5000));
		const newMessage: IMessage = {
			time: new Date(),
			message: `Answer: ${message}`,
			type: IMessageType.TYP1,
		};
		updateContactMessages(newMessage);
	};

	const addMessage = () => {
		if (contact) {
			const newMessage: IMessage = {
				time: new Date(),
				message: inputValue,
				type: IMessageType.TYP2,
			};

			updateContactMessages(newMessage);
			addContactResponse(inputValue);
			setInputValue("");
		}
	};

	const sendMessageOnIconClick = () => {
		addMessage();
	};
	const sendMessageAfterPressingEnterHandler = (e: any) => {
		if (e.key === "Enter") {
			addMessage();
		}
	};

	return (
		<StyledWrapper>
			<StyledInput
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={sendMessageAfterPressingEnterHandler}
				placeholder="Type your message here ..."
			/>
			<StyledIconsWrapper>
				<StyledIcon>
					<Paperclip width={25} color="lightgray" />
				</StyledIcon>
				<StyledIcon>
					<Smile width={25} color="lightgray" />
				</StyledIcon>
				<StyledSendIcon onClick={sendMessageOnIconClick}>
					<Send width={25} color="lightgray" />
				</StyledSendIcon>
			</StyledIconsWrapper>
		</StyledWrapper>
	);
}
export default MessageCreator;
