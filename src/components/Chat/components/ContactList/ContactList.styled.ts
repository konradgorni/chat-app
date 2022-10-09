import styled from "styled-components";

export const StyledWrapper = styled.div`
	height: 100vh;
	background-color: #d8d8d8;
	width: 30vw;
	@media (min-width: 1450px) {
		width: 25vw;
	}
	@media (min-width: 1900px) {
		width: 20vw;
	}
`;
export const StyledContactWrapper = styled.div`
	height: calc(100vh - 116px);
	overflow: auto;
	overflow-x: hidden;
	::-webkit-scrollbar {
		width: 20px;
	}

	::-webkit-scrollbar-track {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: white;
		border-radius: 20px;
		border: 6px solid transparent;
		background-clip: content-box;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: #a8bbbf;
	}
`;
