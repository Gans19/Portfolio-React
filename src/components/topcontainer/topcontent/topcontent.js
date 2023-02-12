/** @format */

import React from "react";
import { Link } from "react-scroll";
import "./topcontent.css";
const Topcontent = () => {
	return (
		<div className="topcontent">
			<div className="topcontent_container">
				<h1>Mr. Selva Ganesh G</h1>
				<p>A Professional Web Developer</p>
				<a href="https://drive.google.com/file/d/1aA_AEEvvVruveUh-4xpwRJLk5toG_Ou2/view?usp=share_link">
					<button className="topcontent_downloadbtn">Download CV</button>
				</a>
				<Link to="project" smooth={true} duration={500}>
					<button className="topcontent_workbtn">My Work</button>
				</Link>
			</div>
		</div>
	);
};

export default Topcontent;
