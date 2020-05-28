import styled from "styled-components";

export const MovieItemWrapper = styled.div`
	background-color: var(--secondaryBg);
	padding: 2em;
	border-radius: 5px;
	margin: 5vh 10vw;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	transition: box-shadow 0.3s;
	&:hover {
		box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
		cursor: pointer;
	}
	div {
		margin: 0 4em;
	}

	ul {
	}

	@media (max-width: 700px) {
		flex-direction: column;
	}
`;
