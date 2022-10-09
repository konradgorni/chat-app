import React, { useContext } from "react";
import { Phone, Video, Star } from "react-feather";
import {
	StyledIconsWrapper,
	StyledIconWrapper,
	StyledTitleWrapper,
	StyledWrapper,
} from "./ChatBoxHeader.styled";
import { ChatContext } from "../../../../ChatContext";

function ChatBoxHeader({
	fullname = "",
	selectedContact,
	isFavourite,
}: {
	fullname: string;
	selectedContact: string | null;
	isFavourite?: boolean;
}) {
	const { setContacts } = useContext(ChatContext);

	const favoruiteContactHandle = () => {
		setContacts((prev) =>
			prev.map((c) => {
				if (c.id === selectedContact) {
					const copyContact = { ...c };
					copyContact.favourite = !c.favourite;
					return copyContact;
				}
				return c;
			}),
		);
	};

	return (
		<StyledWrapper>
			<StyledTitleWrapper>
				{fullname !== undefined && (
					<h3>
						Chat with <u>{fullname}</u>
					</h3>
				)}
			</StyledTitleWrapper>

			<StyledIconsWrapper>
				<StyledIconWrapper>
					<Phone color="#5063aa" size={25} />
				</StyledIconWrapper>
				<StyledIconWrapper>
					<Video color="#5063aa" size={25} />
				</StyledIconWrapper>
				<StyledIconWrapper onClick={favoruiteContactHandle}>
					<Star color={isFavourite ? "gold" : "#5063aa"} size={25} />
				</StyledIconWrapper>
			</StyledIconsWrapper>
		</StyledWrapper>
	);
}
export default ChatBoxHeader;
