import React, { useContext } from "react";
import { StyledContactWrapper, StyledWrapper } from "./ContactList.styled";
import SearchBox from "./components/SearchBox/SearchBox";
import { ChatContext } from "../../ChatContext";
import Contact from "./components/Contact/Contact";

function ContactList() {
	const { contacts } = useContext(ChatContext);
	const [searchValue, setSearchValue] = React.useState("");

	const filterContactsHandler = (fullname: string) =>
		fullname
			.replaceAll(" ", "")
			.toLowerCase()
			.includes(searchValue.replaceAll(" ", "").toLowerCase());

	return (
		<StyledWrapper>
			<SearchBox setSearchValue={setSearchValue} searchValue={searchValue} />
			<StyledContactWrapper>
				{contacts
					.filter((el) => filterContactsHandler(el.name + el.last))
					.map((c) => {
						return <Contact key={c.id} data={c} />;
					})
					.sort((x) => (x.props.data.favourite ? -1 : 1))}
			</StyledContactWrapper>
		</StyledWrapper>
	);
}
export default ContactList;
