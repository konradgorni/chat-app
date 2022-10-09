import React, { useContext, useMemo } from "react";
import { Facebook, Linkedin, Twitter, Info } from "react-feather";
import {
	StyledHeader,
	StyledHeaderAvatar,
	StyledHeaderIcon,
	StyledHeaderIconsWrapper,
	StyledInformationWrapper,
	StyledInformationWrapperContent,
	StyledInformationWrapperContentItem,
	StyledInformationWrapperHeader,
	StyledWrapper,
} from "./ContactDetails.styled";
import { ChatContext } from "../../ChatContext";

function ContactDetail() {
	const { selectedContact, contacts } = useContext(ChatContext);
	const contact = useMemo(() => {
		return contacts.find((contact) => contact.id === selectedContact);
	}, [selectedContact]);
	return (
		<StyledWrapper>
			<StyledHeader>
				<StyledHeaderAvatar>
					<img src={contact?.largeAvatar} alt="avatar" />
				</StyledHeaderAvatar>
				<h2>{`${contact?.name} ${contact?.last}`}</h2>
				<p>{`${contact?.city},${contact?.country}`}</p>
				<StyledHeaderIconsWrapper>
					<StyledHeaderIcon color="#385697">
						<Facebook color="white" size={14} fill="white" />
					</StyledHeaderIcon>
					<StyledHeaderIcon color="#0b7abb">
						<Linkedin color="white" size={14} fill="white" />
					</StyledHeaderIcon>
					<StyledHeaderIcon color="#35ace1">
						<Twitter color="white" size={14} fill="white" />
					</StyledHeaderIcon>
				</StyledHeaderIconsWrapper>
			</StyledHeader>
			<StyledInformationWrapper>
				<StyledInformationWrapperHeader>
					<Info size={30} color="#5063aa" />
					<h2>Information</h2>
				</StyledInformationWrapperHeader>
				<StyledInformationWrapperContent>
					<StyledInformationWrapperContentItem>
						<span>Phone</span>
						<p>{contact?.phone}</p>
					</StyledInformationWrapperContentItem>
					<StyledInformationWrapperContentItem>
						<span>Email</span>
						<p>{contact?.email}</p>
					</StyledInformationWrapperContentItem>
				</StyledInformationWrapperContent>
			</StyledInformationWrapper>
		</StyledWrapper>
	);
}
export default ContactDetail;
