import React from "react";

import { StyledSearchBox, StyledWrapper } from "./SearchBox.styled";

function SearchBox({
	setSearchValue,
	searchValue,
}: {
	setSearchValue: (value: string) => void;
	searchValue: string;
}) {
	return (
		<StyledWrapper>
			<StyledSearchBox
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				type="text"
				placeholder="Search..."
			/>
		</StyledWrapper>
	);
}
export default SearchBox;
