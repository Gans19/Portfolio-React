/** @format */

import React from "react";
import "./project.css";
import { Element } from "react-scroll";
import Projectcotainer from "../projectcontainer/projectcotainer";
import img1 from "../../assets/pro1.png";
import img2 from "../../assets/pro2.png";
import img3 from "../../assets/pro3.png";
import img4 from "../../assets/pro4.png";
import img5 from "../../assets/pro5.png";
import img6 from "../../assets/pro6.png";
const Project = () => {
	const project = [
		{
			img: img1,
			title: "Construction Website",
			desc: "This is  a consruction Company Website.I'm Using Html ,Css ,Bootstrap",
			link: "https://construction-website-bootstrap.web.app/",
		},
		{
			img: img2,
			title: "Portfolio Website",
			desc: "This is  a My Portfolio Website.I'm Using Html ,Css ,Css Animation ,Bootstrap",
			link: "https://portfolio-website-cda09.web.app",
		},
		{
			img: img3,
			title: "Registration Webpage",
			desc: "This is My Registration Webpage.I'm Using Html ,Css ,Javascript",
			link: "https://registration-form-4b4ce.web.app/",
		},
		{
			img: img4,
			title: "NewYear CountDown Webpage",
			desc: "This is New Year Countdown Website.I'm Using Html ,Css ,Javascript",
			link: "https://new-year-countdown-a89f3.web.app",
		},
		{
			img: img5,
			title: "Movie Ticket Booking Web",
			desc: "This Is the movie Booking Website.I'm Using Html ,Css ,Javascript ,Bootstrap. This Website Also Functioned in a Local Storage. ",
			link: "https://movie-ticket-booking-web-e03b0.web.app/",
		},
		{
			img: img6,
			title: "Ecommerce Web",
			desc: "This Is my Ecommerce Website Using PHP ,Mysql",
			link: "https://eommerce19.000webhostapp.com/",
		},
	];
	return (
		<Element className="projectcontainer" id="project">
			<h1>Projects</h1>
			<p>Here Are Some Projects Which I Done.</p>
			<div className="projectcontainer_project">
				{project.map((project, index) => {
					return (
						<Projectcotainer
							key={index}
							img={project.img}
							title={project.title}
							link={project.link}
							desc={project.desc}
						/>
					);
				})}
			</div>
		</Element>
	);
};

export default Project;
