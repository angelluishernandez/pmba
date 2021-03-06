import styled from "styled-components";

export const FilterBarWrapper = styled.div`
	background-color: var(--secondaryBg);
	padding: 2em;
	border-radius: 5px;
	margin: 5vh 10vw;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	@media (max-width: 700px) {
		flex-direction: column;
	}
`;
