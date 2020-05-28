import styled from "styled-components";

export const FormItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	input {
		margin: 1em 0;
	}

	@media (max-width: 700) {
		width: 75%;
	}
`;
