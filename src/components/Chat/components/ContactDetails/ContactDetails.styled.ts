import styled from "styled-components";

export const StyledWrapper = styled.div`
	width: 25vw;
	@media (min-width: 1350px) {
		width: 20vw;
	}
	@media (min-width: 1900px) {
		width: 15vw;
	}
	height: 100vh;
	background-color: white;
	border-left: 1px solid darkgray;
`;
export const StyledHeader = styled.div`
	display: flex;
	flex-direction: column;
	height: 40vh;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid darkgray;
	h2 {
		color: #5063aa;
		margin: 15px 0 10px 0;
	}
	p {
		color: gray;
	}
`;
export const StyledHeaderAvatar = styled.div`
	img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
	}
`;
export const StyledHeaderIconsWrapper = styled.div`
	display: flex;
	margin-top: 25px;
`;
export const StyledHeaderIcon = styled.div<{ color: string }>`
	width: 30px;
	height: 30px;
	background-color: ${(props) => props.color};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 7px;
`;
export const StyledInformationWrapper = styled.div`
	height: auto;
`;
export const StyledInformationWrapperHeader = styled.div`
	margin-top: 30px;
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	h2 {
		font-size: 18px;
		text-transform: uppercase;
		color: gray;
		margin-left: 12px;
	}
`;
export const StyledInformationWrapperContent = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-top: 30px;
`;
export const StyledInformationWrapperContentItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	margin: 2% 20%;
	color: gray;
	justify-content: space-between;
	span {
		font-weight: bold;
	}
	p {
		margin-top: 10px;
	}
`;
