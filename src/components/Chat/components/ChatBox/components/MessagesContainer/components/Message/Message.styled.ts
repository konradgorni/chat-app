import styled from "styled-components";

export const StyledWrapper = styled.div<{ leftSide: boolean }>`
	display: flex;
	width: calc(100% - 80px);
	//background-color: green;
	padding: 20px 40px;
	align-items: center;
	flex-direction: ${(props) => (props.leftSide ? "row" : "row-reverse")};
`;
export const StyledAvatarWrapper = styled.div<{ leftSide: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: ${(props) => (props.leftSide ? "0 30px 0 0" : "0 0 0 30px")};
	p {
		margin-top: 5px;
		color: lightgray;
	}
`;
export const StyledAvatar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
`;
export const StyledMessageWrapper = styled.div<{ leftSide: boolean }>`
	width: auto;
	max-width: 70%;
	background-color: ${(props) => (props.leftSide ? "lightgray" : "#e3f1fc")};
	padding: 15px;
	border-radius: 15px;
	p {
		letter-spacing: 1px;
		line-height: 25px;
	}
	//background-color: yellow;
`;
