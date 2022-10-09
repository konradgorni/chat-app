import styled from "styled-components";

export const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;
	border-bottom: 1px solid darkgray;
`;
export const StyledSearchBox = styled.input`
	border-radius: 40px;
	width: 80%;
	height: 45px;
	font-size: 22px;
	margin: 15px 0;
	border: none;
	padding-left: 28px;
	&:focus {
		outline: none;
	}
`;
