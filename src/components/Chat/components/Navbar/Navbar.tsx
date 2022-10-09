import React from "react";
import {
	Home,
	Edit2,
	User,
	MessageCircle,
	Settings,
	File,
} from "react-feather";
import { StyledList, StyledListElement, StyledWrapper } from "./Navbar.styled";

function Navbar() {
	return (
		<StyledWrapper>
			<StyledList>
				<StyledListElement>
					<Home color="white" size={30} />
				</StyledListElement>
				<StyledListElement>
					<Edit2 color="white" size={30} />
				</StyledListElement>
				<StyledListElement>
					<User color="white" size={30} />
				</StyledListElement>
				<StyledListElement selected>
					<MessageCircle color="white" size={30} />
				</StyledListElement>
				<StyledListElement>
					<File color="white" size={30} />
				</StyledListElement>
				<StyledListElement>
					<Settings color="white" size={30} />
				</StyledListElement>
			</StyledList>
		</StyledWrapper>
	);
}
export default Navbar;
