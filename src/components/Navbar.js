import React from "react";
import { NavbarWrapper } from "./styled-components/NavbarWrapper";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<NavbarWrapper>
			<Link to="/">The Power MBA</Link>
		</NavbarWrapper>
	);
};

export default Navbar;
