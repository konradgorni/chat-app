import styled from "styled-components";

export const StyledWrapper = styled.div`
	height: 100vh;
	width: 5vw;
	background-color: #3c52a0;
	@media (min-width: 2000px) {
		width: 3vw;
	}
`;
export const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
`;
export const StyledListElement = styled.li<{ selected?: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80px;
	border-bottom: 0.5px solid whitesmoke;
	background-color: ${(props) => (props.selected ? "#7786bd" : "transparent")};
`;
