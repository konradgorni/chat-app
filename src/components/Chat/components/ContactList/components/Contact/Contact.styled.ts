import styled from "styled-components";

export const StyledWrapper = styled.div<{ selected: boolean }>`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 25px;
	position: relative;
	border-bottom: 1px solid darkgray;
	background-color: ${(props) => (props.selected ? "white" : "lightgray")};
	&:hover {
		background-color: white;
		cursor: pointer;
	}

	h2 {
		color: red;
	}
	p {
		color: black;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 200px;
		overflow: hidden;
	}
`;
export const StyledAvatar = styled.div<{ isFavorite: boolean }>`
	margin-right: 20px;
	img {
		width: ${(props) => (props.isFavorite ? "38px" : "40px")};
		height: ${(props) => (props.isFavorite ? "38px" : "40px")};
		border-radius: 50%;
		border: ${(props) => (props.isFavorite ? "2px solid gold" : "none")};
	}
`;
export const StyledContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
export const StyledTime = styled.div`
	display: block;
	margin-left: auto;
	padding: 8px;
	border-radius: 10px;
	background-color: white;
	color: lightgray;
	white-space: nowrap;
`;
export const StyledLine = styled.div<{ selected: boolean }>`
	width: 5px;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	background-color: #5063aa;
	display: ${(props) => (props.selected ? "block" : "none")};
`;
