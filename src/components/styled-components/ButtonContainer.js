import styled from "styled-components";

export const ButtonContainer = styled.button`
	width: 10rem;
	height: 2rem;
	background-color: transparent;
	text-align: center;
	border: 0.1rem solid var(--btnBg);
	border-color: var(--btnBg);
	color: var(--btnBg);
	border-radius: 5px;
	font-family: var(--textFont);
	font-weight: 800;
	transition: 0.2s;

	&:hover {
		background-color: var(--btnBg);
		color: var(--mainBg);
		-webkit-transform: translateY(-3px);
		transform: translateY(-3px);
	}
`;
