import React, { useContext, useMemo } from "react";
import {
	StyledAvatar,
	StyledContentWrapper,
	StyledLine,
	StyledTime,
	StyledWrapper,
} from "./Contact.styled";
import { IContact } from "../../../../utils/prepareContactsHandler";
import { timeAgo } from "../SearchBox/timeAgo";
import { ChatContext } from "../../../../ChatContext";

function Contact({ data }: { data: IContact }) {
	const { setSelectedContact, selectedContact } = useContext(ChatContext);
	const { avatar, name, last, messages, favourite } = data;
	const lastMessages = messages[messages.length - 1];
	const contactClickHandler = (id: string) => {
		setSelectedContact(id);
	};
	const contactIsSelected = useMemo(
		() => selectedContact === data.id,
		[selectedContact],
	);

	return (
		<StyledWrapper
			selected={contactIsSelected}
			onClick={() => contactClickHandler(data.id)}
		>
			<StyledAvatar isFavorite={favourite}>
				<img src={avatar} alt="avatar" />
			</StyledAvatar>
			<StyledContentWrapper>
				<h3>{`${name} ${last}`}</h3>
				<p>{lastMessages.message}</p>
			</StyledContentWrapper>
			<StyledTime>{timeAgo(lastMessages.time)}</StyledTime>
			<StyledLine selected={contactIsSelected} />
		</StyledWrapper>
	);
}
export default Contact;
