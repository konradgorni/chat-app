import React from "react";
import {
	StyledAvatar,
	StyledAvatarWrapper,
	StyledMessageWrapper,
	StyledWrapper,
} from "./Message.styled";
import DefaultAvatar from "./DefaultAvatar.png";

function Message({
	leftSide,
	text,
	time,
	avatar,
}: {
	leftSide: boolean;
	text: string;
	time: Date;
	avatar: string;
}) {
	return (
		<StyledWrapper leftSide={leftSide}>
			<StyledAvatarWrapper leftSide={leftSide}>
				<StyledAvatar>
					<img src={leftSide ? avatar : DefaultAvatar} alt="avatar" />
				</StyledAvatar>
				<p>{`${time.getHours()}:${String(time.getMinutes()).padStart(
					2,
					"0",
				)}`}</p>
			</StyledAvatarWrapper>
			<StyledMessageWrapper leftSide={leftSide}>
				<p>{text}</p>
			</StyledMessageWrapper>
		</StyledWrapper>
	);
}
export default Message;
