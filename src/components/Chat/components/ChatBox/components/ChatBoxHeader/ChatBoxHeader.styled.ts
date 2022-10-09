import styled from "styled-components";

export const StyledWrapper = styled.div`
	display: flex;
	border-bottom: 1px solid darkgray;
	width: auto;
	//padding: 18px;
	height: 70px;
`;
export const StyledTitleWrapper = styled.div`
	height: 100%;
	display: flex;
	margin-left: 40px;
	align-items: center;
	h3 {
		font-weight: lighter;

		u {
			color: #5063aa;
			font-weight: 500;
			padding-bottom: 5px;
			text-decoration: none;
			border-bottom: 1px solid #5063aa;
		}
	}
`;

export const StyledIconsWrapper = styled.div`
	display: flex;
	margin-left: auto;
`;
export const StyledIconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 0 20px;
	border-left: 1px solid darkgray;
	&:hover {
		cursor: pointer;
	}
`;
