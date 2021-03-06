import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path={"/"} component={Home} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
