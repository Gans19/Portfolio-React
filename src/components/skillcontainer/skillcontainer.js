/** @format */

import React from "react";
import { Element } from "react-scroll";
import skillimg from "../../assets/skill.jpg";
import Linearprogress from "@mui/material/LinearProgress";
import "./skillcontainer.css";
const Skillcontainer = () => {
	return (
		<div>
			<Element className="skillcontainer" id="skills">
				<div className="skillcontainer_img">
					<img src={skillimg} />
				</div>
				<div className="skillcontainer_text">
					<h2>SKILLSET</h2>
					<div className="skillcontainer_skillset">
						<h5>React Js</h5>
						<div className="skillcontainer_slider skillcontainer_slider1">
							<Linearprogress variant="determinate" value={76} />
						</div>
					</div>
					<div className="skillcontainer_skillset">
						<h5>Mongo DB</h5>
						<div className="skillcontainer_slider skillcontainer_slider1">
							<Linearprogress variant="determinate" value={74} />
						</div>
					</div>
					<div className="skillcontainer_skillset">
						<h5>Express Js</h5>
						<div className="skillcontainer_slider skillcontainer_slider1">
							<Linearprogress variant="determinate" value={71} />
						</div>
					</div>
					<div className="skillcontainer_skillset">
						<h5>Node Js</h5>
						<div className="skillcontainer_slider skillcontainer_slider1">
							<Linearprogress variant="determinate" value={76} />
						</div>
					</div>
					<div className="skillcontainer_skillset">
						<h5>PHP</h5>
						<div className="skillcontainer_slider skillcontainer_slider1">
							<Linearprogress variant="determinate" value={73} />
						</div>
					</div>
					<div className="skillcontainer_skillset">
						<h5>HTML,CSS,JS,BOOTSTRAP</h5>
						<div className="skillcontainer_slider skillcontainer_slider1">
							<Linearprogress variant="determinate" value={80} />
						</div>
					</div>
				</div>
			</Element>
		</div>
	);
};

export default Skillcontainer;
