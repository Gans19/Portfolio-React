/** @format */

import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Topcontainer from "./components/topcontainer/topcontainer";
import Skillcontainer from "./components/skillcontainer/skillcontainer";
import Project from "./components/projects/project";
import Contact from "./components/contact/contact";
const App = () => {
	return (
		<div>
			<Header />
			<Topcontainer />
			<Skillcontainer />
			<Project />
			<Contact />
		</div>
	);
};

export default App;
