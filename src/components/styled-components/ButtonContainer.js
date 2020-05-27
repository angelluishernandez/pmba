import styled from "styled-components";

export const ButtonContainer = styled.button`
	width: 10rem;
	height: 2rem;
	background-color: transparent;
	text-align: center;
	border: 0.1rem solid var(--btnBg);
	border-color: ${(props) =>
		props.delete ? "var(--mainRed)" : "var(--btnBg)"};
	color: ${(props) => (props.delete ? "var(--mainRed)" : "var(--btnBg)")};
	border-radius: 5px;
	font-family: var(--textFont);
	font-weight: 800;
	transition: 0.2s;

	&:hover {
		background-color: ${(props) =>
			props.delete ? "var(--mainRed)" : "var(--btnBg)"};
		color: var(--mainBg);
		-webkit-transform: translateY(-2px);
		transform: translateY(-2px);
	}
`;
