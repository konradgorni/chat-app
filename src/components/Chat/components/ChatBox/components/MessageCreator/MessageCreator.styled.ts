import styled from "styled-components";

export const StyledWrapper = styled.div`
	border-top: 1px solid darkgray;
	width: calc(100% - 80px);
	height: calc(12% - 72px);
	display: flex;
	align-items: center;
	padding: 0 40px;

	//background-color: red;
`;

export const StyledInput = styled.input`
	border: none;
	outline: none;
	height: 60%;
	width: 60%;
	font-size: 20px;
`;
export const StyledIconsWrapper = styled.div`
	display: flex;
	margin-left: auto;
	height: 60%;
	align-items: center;
`;
export const StyledIcon = styled.div`
	margin: 0 10px;
`;
export const StyledSendIcon = styled.div`
	width: 40px;
	height: 40px;
	background-color: #4f77d7;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	cursor: pointer;
	svg {
		transform: rotate(13deg);
	}
`;
